import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { imagetools } from "vite-imagetools";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
    // Screenshots are imported with ?preset=screenshot (see src/utils/images.js),
    // which imagetools expands into the widths and formats below at build time.
    // Source files on disk are never modified.
    imagetools({
      defaultDirectives: (url) => {
        if (url.searchParams.get("preset") === "screenshot") {
          return new URLSearchParams({
            format: "webp",
            w: "480;960;1440",
            as: "picture",
          });
        }
        return new URLSearchParams();
      },
    }),
  ],
});
