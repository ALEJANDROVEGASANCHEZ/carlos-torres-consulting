import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Carlos Torres IA",
    short_name: "Carlos Torres",

    description:
      "Consultoría especializada en inteligencia artificial, automatización y soluciones digitales modernas.",

    start_url: "/",

    display: "standalone",

    background_color: "#f5f3ee",

    theme_color: "#0f172a",

    orientation: "portrait",

    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}