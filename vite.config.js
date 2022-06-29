import vue from "@vitejs/plugin-vue";
import path from "path";

export default () => {
  return {
    alias: {
      "@": `${path.resolve(__dirname, "src")}/`,
    },
    plugins: [vue()],
  };
};
