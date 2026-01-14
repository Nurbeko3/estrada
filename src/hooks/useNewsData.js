import { useTranslation } from "react-i18next";

export const useNewsData = () => {
  const { t } = useTranslation();

  const getNewsData = (category) => [
    {
      id: 1,
      date: "12 Yanvar, 2026",
      title: t(`news.${category}.1.title`),
      image:
        category === "official_items"
          ? "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop"
          : category === "student_life_items"
          ? "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop"
          : "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2064&auto=format&fit=crop",
      excerpt: t(`news.${category}.1.excerpt`),
    },
    {
      id: 2,
      date: "10 Yanvar, 2026",
      title: t(`news.${category}.2.title`),
      image:
        category === "official_items"
          ? "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"
          : category === "student_life_items"
          ? "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1932&auto=format&fit=crop"
          : "https://images.unsplash.com/photo-1507838153414-b4b713384ebd?q=80&w=2068&auto=format&fit=crop",
      excerpt: t(`news.${category}.2.excerpt`),
    },
    {
      id: 3,
      date: "05 Yanvar, 2026",
      title: t(`news.${category}.3.title`),
      image:
        category === "official_items"
          ? "https://images.unsplash.com/photo-1514525253440-b393452e2729?q=80&w=2069&auto=format&fit=crop"
          : category === "student_life_items"
          ? "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop"
          : "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop",
      excerpt: t(`news.${category}.3.excerpt`),
    },
  ];

  return { getNewsData };
};
