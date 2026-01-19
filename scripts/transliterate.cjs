const fs = require("fs");
const path = require("path");

const uzMap = {
  Sh: "Ш",
  sh: "ш",
  SH: "Ш",
  Ch: "Ч",
  ch: "ч",
  CH: "Ч",
  "O'": "Ў",
  "o'": "ў",
  "O`": "Ў",
  "o`": "ў",
  "G'": "Ғ",
  "g'": "ғ",
  "G`": "Ғ",
  "g`": "ғ",
  Ng: "Нг",
  ng: "нг",
  NG: "НГ",
  Yu: "Ю",
  yu: "ю",
  YU: "Ю",
  Ya: "Я",
  ya: "я",
  YA: "Я",
  Yo: "Ё",
  yo: "ё",
  YO: "Ё",
  Ye: "Е",
  ye: "е",
  YE: "Е",
  A: "А",
  a: "а",
  B: "Б",
  b: "б",
  D: "Д",
  d: "д",
  E: "Э",
  e: "э", // Context rules applied separate/later or generic?
  F: "Ф",
  f: "ф",
  G: "Г",
  g: "г",
  H: "Ҳ",
  h: "ҳ",
  I: "И",
  i: "и",
  J: "Ж",
  j: "ж",
  K: "К",
  k: "к",
  L: "Л",
  l: "л",
  M: "М",
  m: "м",
  N: "Н",
  n: "н",
  O: "О",
  o: "о",
  P: "П",
  p: "п",
  Q: "Қ",
  q: "қ",
  R: "Р",
  r: "р",
  S: "С",
  s: "с",
  T: "Т",
  t: "т",
  U: "У",
  u: "у",
  V: "В",
  v: "в",
  X: "Х",
  x: "х",
  Y: "Й",
  y: "й",
  Z: "З",
  z: "з",
  "'": "ъ", // apostrophe often hard sign or ignored? In o' it's taken. In sa'nat -> san'at -> санъат.
};

// "E" rule: usually "E" at start is "Э", "E" after consonant is "Е".
// Current map has e->э. We need to fix this.
// "Ye" is often written as "Ye" in Latin at start? Or just "E"? "Еr" -> "Er". "Yelka" -> "Yelka" (Елка).
// Actually standard Uz-Latin: E is Э at start of word. Ye is Е.
// But some texts use E for everything.
// Let's rely on replacement order: Ye -> Е first. Then E -> Э (mostly correct for start).
// Inside word: "men" -> "мен" (not мэн).
// So "e" after consonant = "е". "e" at start or after vowel = "э".
// This is hard to regex purely with map. I'll implement a function.

function latinToCyrillic(text) {
  if (!text) return text;

  // Protect interpolation variables {{...}}
  const placeHolders = [];
  let protectedText = text.replace(/\{\{.*?\}\}/g, (match) => {
    placeHolders.push(match);
    return `__PH${placeHolders.length - 1}__`;
  });

  let res = protectedText;

  // Specific multi-char replacements first
  // We need to handle case sensitivity.
  // sh -> ш. Sh -> Ш. sH -> ш (unlikely). SH -> Ш.

  // Replacements list ordered by priority/length.
  const replacements = [
    { p: /Sh/g, r: "Ш" },
    { p: /sh/g, r: "ш" },
    { p: /SH/g, r: "Ш" },
    { p: /Ch/g, r: "Ч" },
    { p: /ch/g, r: "ч" },
    { p: /CH/g, r: "Ч" },
    { p: /O\'/g, r: "Ў" },
    { p: /o\'/g, r: "ў" },
    { p: /O`/g, r: "Ў" },
    { p: /o`/g, r: "ў" },
    { p: /G\'/g, r: "Ғ" },
    { p: /g\'/g, r: "ғ" },
    { p: /G`/g, r: "Ғ" },
    { p: /g`/g, r: "ғ" },
    // ng is tricky. ng -> нг. Ng -> Нг.
    { p: /Ng/g, r: "Нг" },
    { p: /ng/g, r: "нг" },
    { p: /NG/g, r: "НГ" },

    // Ya, Yu, Yo, Ye
    { p: /Ya/g, r: "Я" },
    { p: /ya/g, r: "я" },
    { p: /YA/g, r: "Я" },
    { p: /Yu/g, r: "Ю" },
    { p: /yu/g, r: "ю" },
    { p: /YU/g, r: "Ю" },
    { p: /Yo/g, r: "Ё" },
    { p: /yo/g, r: "ё" },
    { p: /YO/g, r: "Ё" },
    // Ye is Е.
    { p: /Ye/g, r: "Е" },
    { p: /ye/g, r: "е" },
    { p: /YE/g, r: "Е" },
  ];

  replacements.forEach((re) => {
    res = res.replace(re.p, re.r);
  });

  // Handling E/e.
  // E -> Э if (start of string OR after non-alphanum (space/punct) OR after vowel).
  // E -> Е if after consonant.
  // But wait, in regex replacement above, we haven't touched single chars yet.

  // Actually simpler heuristic for E:
  // If previous char is consonant (in Latin or Cyrillic? Latin still here), then E->Е.
  // Else E->Э.
  // Consonants (Latin): b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, x, z.
  // Vowels: a, e, i, o, u, o', y (y sometimes vowel), etc.

  // Better approach: iterate chars? No, too slow maybe.
  // Regex for e:
  // (?<=...) lookbehind.
  // (?<=[bcdfghjklmnpqrstvxzBCDFGHJKLMNPQRSTVXZ])e -> е
  // else e -> э

  // Javascript regex lookbehind support is good now.
  const consonants = "bcdfghjklmnpqrstvxzBCDFGHJKLMNPQRSTVXZ";
  const regexE_after_cons = new RegExp(`(?<=[${consonants}])e`, "g");
  const regexE_after_cons_upper = new RegExp(`(?<=[${consonants}])E`, "g"); // Usually after cons it's lowercase unless ALL CAPS.

  res = res.replace(regexE_after_cons, "е");
  res = res.replace(regexE_after_cons_upper, "Е");

  // Any remaining e/E should be э/Э (start or after vowel or space)
  res = res.replace(/e/g, "э");
  res = res.replace(/E/g, "Э");

  // Now single chars
  const simpleMap = {
    A: "А",
    a: "а",
    B: "Б",
    b: "б",
    D: "Д",
    d: "д",
    F: "Ф",
    f: "ф",
    G: "Г",
    g: "г",
    H: "Ҳ",
    h: "ҳ", // H is usually Ҳ in standard translit, sometimes X if X is used for X.
    I: "И",
    i: "и",
    J: "Ж",
    j: "ж",
    K: "К",
    k: "к",
    L: "Л",
    l: "л",
    M: "М",
    m: "м",
    N: "Н",
    n: "н",
    O: "О",
    o: "о",
    P: "П",
    p: "п",
    Q: "Қ",
    q: "қ",
    R: "Р",
    r: "р",
    S: "С",
    s: "с",
    T: "Т",
    t: "т",
    U: "У",
    u: "у",
    V: "В",
    v: "в",
    X: "Х",
    x: "х",
    Y: "Й",
    y: "й",
    Z: "З",
    z: "з",
    "'": "ъ",
    "’": "ъ",
  };

  // Iterate remaining map
  for (let key in simpleMap) {
    // Escape for regex if needed? A-Z is fine. ' is used.
    // Need to be careful not to replace already converted Cyrillic chars?
    // Cyrillic chars are not in keys of simpleMap (keys are A-Z).
    // But 'Y' -> 'Й' might overlap if I double replace?
    // No, A-Z keys are disjoint from Cyrillic values.
    let re = new RegExp(key.replace(/['’]/g, "\\$&"), "g");
    res = res.replace(re, simpleMap[key]);
  }

  // Restore placeholders
  placeHolders.forEach((ph, i) => {
    res = res.replace(`__PH${i}__`, ph);
  });

  return res;
}

function processObject(obj) {
  if (typeof obj === "string") {
    return latinToCyrillic(obj);
  } else if (Array.isArray(obj)) {
    return obj.map(processObject);
  } else if (typeof obj === "object" && obj !== null) {
    const newObj = {};
    for (const key in obj) {
      newObj[key] = processObject(obj[key]);
    }
    return newObj;
  }
  return obj;
}

const sourcePath = path.join(__dirname, "../src/locales/uz.json");
const targetPath = path.join(__dirname, "../src/locales/kr.json");

try {
  const content = fs.readFileSync(sourcePath, "utf8");
  const data = JSON.parse(content);
  const converted = processObject(data);
  fs.writeFileSync(targetPath, JSON.stringify(converted, null, 2), "utf8");
  console.log("Successfully created kr.json");
} catch (e) {
  console.error("Error:", e);
}
