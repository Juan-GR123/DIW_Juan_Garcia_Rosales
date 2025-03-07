import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  appType: 'mpa', // Proyecto multipágina
  base: './',
  root: path.resolve(__dirname, 'fuente'), // Especifica "fuente" como raíz
  build: {
    outDir: '../produccion',
    emptyOutDir: true, // Vacía la carpeta antes de compilar
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'fuente/index.html'),
        principal: path.resolve(__dirname, 'fuente/html/pagina_Principal.html'),
        perfil: path.resolve(__dirname, 'fuente/html/pagina_Perfil.html'),
        nosotros: path.resolve(__dirname, 'fuente/html/sobre_Nosotros.html'),
        libros: path.resolve(__dirname, 'fuente/html/pagina_Libros.html'),
        cesta: path.resolve(__dirname, 'fuente/html/pagina_Cesta.html'),
      },
    },
    minify: 'terser', // Minimiza JS y CSS
  },
  plugins: [
    createHtmlPlugin({
      minify: true, // Minimiza el HTML
    }),
  ],
  server: {
    open: true,
  },
  preview: {
    open: true,
    port: 4173,
  },
});
