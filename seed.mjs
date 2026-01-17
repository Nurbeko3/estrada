import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cyrfnvardofpxtgfeoce.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5cmZudmFyZG9mcHh0Z2Zlb2NlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg2MzU2NDcsImV4cCI6MjA4NDIxMTY0N30.wUo8uWAKBnNHSHunGfBNF5CJDQ9JDG5I2NjXmMYcDvo";

const supabase = createClient(supabaseUrl, supabaseKey);

const data = [
  // News - Yangiliklar
  {
    title: "Institutda yangi o'quv yili tantanali ochildi",
    content:
      "Bugun Botir Zokirov nomidagi Milliy estrada san'ati institutida yangi o'quv yilining boshlanishiga bag'ishlangan tantanali marosim bo'lib o'tdi. Tadbirda institut rahbariyati, faxriy ustozlar va talabalar ishtirok etishdi.",
    category: "news",
    image_url:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    views: 125,
  },
  {
    title: "Xalqaro hamkorlik aloqalari kengaymoqda",
    content:
      "Institutimiz va Fransiyaning nufuzli musiqa akademiyasi o'rtasida o'zaro hamkorlik memorandumi imzolandi. Bu kelishuv talabalar almashinuvi va malaka oshirish imkoniyatlarini yaratadi.",
    category: "news",
    image_url:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    views: 84,
  },
  {
    title: "Yosh iste'dodlar ko'rik tanlovi g'oliblari",
    content:
      "O'tgan hafta bo'lib o'tgan 'Estrada yulduzlari' ko'rik tanlovida institutimiz talabalari faxrli o'rinlarni egallashdi. G'oliblarni tabriklaymiz!",
    category: "news",
    image_url:
      "https://images.unsplash.com/photo-1514320291940-bf297374a47d?w=800&q=80",
    views: 210,
  },

  // Events - Tadbirlar
  {
    title: "Navro'z bayrami sayli",
    content:
      "21-mart kuni institut hovlisida Navro'z umumxalq bayramiga bag'ishlangan katta sayl va konsert dasturi bo'lib o'tadi. Barchani taklif etamiz!",
    category: "event",
    image_url:
      "https://images.unsplash.com/photo-1533174072545-e8d9859f6471?w=800&q=80",
    views: 45,
  },
  {
    title: "Ochiq eshiklar kuni",
    content:
      "Abituriyentlar va ularning ota-onalari uchun institut faoliyati bilan yaqindan tanishish maqsadida Ochiq eshiklar kuni tashkil etilmoqda.",
    category: "event",
    image_url:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
    views: 156,
  },
  {
    title: "Bitiruvchilar kechasi 2026",
    content:
      "Joriy o'quv yili bitiruvchilari uchun tantanali diplom topshirish marosimi va gala-konsert dasturi rejalashtirilgan.",
    category: "event",
    image_url:
      "https://images.unsplash.com/photo-1627556592933-ffe99c1cd9eb?w=800&q=80",
    views: 312,
  },

  // Announcements - E'lonlar
  {
    title: "Qishki ta'til muddati o'zgarishi haqida",
    content:
      "Ob-havo sharoitining keskin o'zgarishi munosabati bilan qishki ta'til muddati 2 kun uzaytirildi. Darslar 12-yanvardan boshlanadi.",
    category: "announcement",
    image_url:
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800&q=80",
    views: 520,
  },
  {
    title: "Davlat granti tanlovi",
    content:
      "Iqtidorli talabalar uchun maxsus davlat granti tanlovi e'lon qilinadi. Hujjatlar 1-fevralga qadar qabul qilinadi.",
    category: "announcement",
    image_url:
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80",
    views: 245,
  },
  {
    title: "Kutubxona ish vaqti",
    content:
      "Hurmatli talabalar, imtihonlar mavsumida kutubxona ish vaqti soat 22:00 gacha uzaytirildi.",
    category: "announcement",
    image_url:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80",
    views: 130,
  },
];

async function seed() {
  console.log("Inserting data...");
  const { error } = await supabase.from("news").insert(data);
  if (error) console.error("Error inserting data:", error);
  else console.log("Success! 9 items inserted.");
}

seed();
