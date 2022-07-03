import vue from "@vitejs/plugin-vue";
import path from "path";
import vueI18n from "@intlify/vite-plugin-vue-i18n";

export default () => {
  return {
    alias: {
      "@": `${path.resolve(__dirname, "src")}/`,
    },
    plugins: [
      vue(),
      vueI18n({
        include: path.resolve(__dirname, "@/locales/**"),
      }),
    ],
  };
};
