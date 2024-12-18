import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.hercom.pe",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
  ];
}
