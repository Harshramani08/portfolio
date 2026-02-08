import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  colors: {
    primary: "#6366F1", // indigo
    secondary: "#8B5CF6", // purple
    dark: "#0F172A",
    lightDark: "#1E293B",
  },
  plugins: [react(), tailwindcss()],
});
