const fs = require("fs");
const path = require("path");

const localesDir = path.join(__dirname, "../src/locales");
const uzPath = path.join(localesDir, "uz.json");
const enPath = path.join(localesDir, "en.json");
const ruPath = path.join(localesDir, "ru.json");

const uz = JSON.parse(fs.readFileSync(uzPath, "utf8"));
const en = JSON.parse(fs.readFileSync(enPath, "utf8"));
const ru = JSON.parse(fs.readFileSync(ruPath, "utf8"));

function syncKeys(source, target, label) {
  let modified = false;
  function recurse(srcObj, tgtObj, path = "") {
    for (const key in srcObj) {
      const currentPath = path ? `${path}.${key}` : key;
      if (typeof srcObj[key] === "object" && srcObj[key] !== null) {
        if (!tgtObj[key] || typeof tgtObj[key] !== "object") {
          tgtObj[key] = {};
          console.log(`[${label}] Adding object key: ${currentPath}`);
          modified = true;
        }
        recurse(srcObj[key], tgtObj[key], currentPath);
      } else {
        if (!tgtObj.hasOwnProperty(key)) {
          tgtObj[key] = `[TRANSLATION_MISSING] ` + srcObj[key];
          console.log(`[${label}] Adding missing key: ${currentPath}`);
          modified = true;
        } else if (
          typeof tgtObj[key] === "string" &&
          tgtObj[key].startsWith("[TODO:")
        ) {
          tgtObj[key] = tgtObj[key].replace(
            /^\[TODO:.*?\]/,
            "[TRANSLATION_MISSING]",
          );
          console.log(`[${label}] Updating placeholder: ${currentPath}`);
          modified = true;
        }
      }
    }
  }
  recurse(source, target);
  return modified;
}

const enModified = syncKeys(uz, en, "EN");
const ruModified = syncKeys(uz, ru, "RU");

if (enModified) {
  fs.writeFileSync(enPath, JSON.stringify(en, null, 2), "utf8");
  console.log("Updated en.json");
}

if (ruModified) {
  fs.writeFileSync(ruPath, JSON.stringify(ru, null, 2), "utf8");
  console.log("Updated ru.json");
}
