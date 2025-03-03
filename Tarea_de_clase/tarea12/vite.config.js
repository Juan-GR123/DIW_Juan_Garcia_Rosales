import { defineConfig } from 'vite';
import { resolve } from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  appType: 'mpa', // Indica que es un proyecto multipágina
  base: './',
  root: resolve(__dirname, 'fuente'), // Especifica que "fuente" es la raíz
  build: {
    outDir: '../produccion',
    emptyOutDir: true,    //Vacía el directorio de producción antes de compilar
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'fuente/index.html'),
        principal: resolve(__dirname, 'fuente/html/pagina_Principal.html'),
        perfil: resolve(__dirname, 'fuente/html/pagina_Perfil.html'),
        nosotros: resolve(__dirname, 'fuente/html/sobre_Nosotros.html'),
        libros: resolve(__dirname, 'fuente/html/pagina_Libros.html'),
        cesta: resolve(__dirname, 'fuente/html/pagina_Cesta.html'),
      },
    },
    minify: 'terser', // Asegura que JS y CSS también se minimicen
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
    open: true, // Abre automáticamente la previsualización
    port: 4173, // Puerto para el servidor de previsualización
  },
});