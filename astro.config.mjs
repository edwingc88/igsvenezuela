// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config'; // Importación combinada
import vercel from '@astrojs/vercel'; // 👈 Importación correg

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  
  // ✅ Configuración de variables de entorno seguras
  env: {
    schema: {
      CLOUDINARY_CLOUD_NAME: envField.string({ context: 'server', access: 'secret' }),
      CLOUDINARY_API_KEY: envField.string({ context: 'server', access: 'secret' }),
      CLOUDINARY_API_SECRET: envField.string({ context: 'server', access: 'secret' }),
      // Puedes añadir SUPABASE_URL y SUPABASE_ANON_KEY aquí también si quieres
    }
  },

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['cloudinary'],
      external: ['cloudinary/lib/cloudinary']
    }
  }
});
