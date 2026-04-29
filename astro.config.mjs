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
      SUPABASE_URL: envField.string({ context: 'server', access: 'secret' }),
      SUPABASE_SERVICE_ROLE_KEY: envField.string({ context: 'server', access: 'secret' }),
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
