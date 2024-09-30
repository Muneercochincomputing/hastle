// vite.config.js
import { defineConfig } from "file:///C:/Users/user/Downloads/hastle-main%20(1)/hastle-main/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/user/Downloads/hastle-main%20(1)/hastle-main/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  base: "/",
  // Adjust base URL as needed
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  server: {
    host: true,
    port: 80
  },
  build: {
    outDir: "./server/public",
    // This specifies where to output the build files
    emptyOutDir: true
    // This ensures the output directory is cleaned before building
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXERvd25sb2Fkc1xcXFxoYXN0bGUtbWFpbiAoMSlcXFxcaGFzdGxlLW1haW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHVzZXJcXFxcRG93bmxvYWRzXFxcXGhhc3RsZS1tYWluICgxKVxcXFxoYXN0bGUtbWFpblxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvdXNlci9Eb3dubG9hZHMvaGFzdGxlLW1haW4lMjAoMSkvaGFzdGxlLW1haW4vdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcclxuICBiYXNlOiAnLycsIC8vIEFkanVzdCBiYXNlIFVSTCBhcyBuZWVkZWRcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6ICcvc3JjJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIGhvc3Q6IHRydWUsXHJcbiAgICBwb3J0OiA4MCxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBvdXREaXI6ICcuL3NlcnZlci9wdWJsaWMnLCAgLy8gVGhpcyBzcGVjaWZpZXMgd2hlcmUgdG8gb3V0cHV0IHRoZSBidWlsZCBmaWxlc1xyXG4gICAgZW1wdHlPdXREaXI6IHRydWUsICAvLyBUaGlzIGVuc3VyZXMgdGhlIG91dHB1dCBkaXJlY3RvcnkgaXMgY2xlYW5lZCBiZWZvcmUgYnVpbGRpbmdcclxuICB9LFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlWLFNBQVMsb0JBQW9CO0FBQ3RYLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsTUFBTTtBQUFBO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsSUFDUDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUE7QUFBQSxJQUNSLGFBQWE7QUFBQTtBQUFBLEVBQ2Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=