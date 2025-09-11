import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts", "./src/userAgentCheck.ts"],
  minify: false,
  dts: true,
  format: ["esm", "cjs"],
  clean: true,
});
