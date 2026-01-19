import { exec } from "child_process";

const i18nHotReload = () => {
  return {
    name: "i18n-hot-reload",
    handleHotUpdate({ file, server }) {
      if (file.endsWith("uz.json")) {
        console.log("uz.json changed, running transliteration and sync...");
        exec(
          "node scripts/transliterate.cjs && node scripts/sync_locales.cjs",
          (err, stdout, stderr) => {
            if (err) {
              console.error("Error running scripts:", stderr);
              return;
            }
            console.log("Scripts output:", stdout);
          },
        );
      }
    },
  };
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), i18nHotReload()],
});
