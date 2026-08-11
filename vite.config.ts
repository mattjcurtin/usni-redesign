import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'
import path from 'path'

/**
 * Function form so the single-file plugin applies to builds only —
 * `npm run dev` keeps unbundled modules and hot reload.
 *
 * Why single-file: when the prototype is served behind a Basic Auth gate that
 * issues a per-URL realm and only sets its session cookie after a successful
 * challenge, a cold visit to a deep link asks for credentials once per
 * resource. The dev server requests every .tsx module separately on first
 * paint, which reads as an endless auth reprompt. Inlining JS and CSS into one
 * index.html collapses the critical path to a single request — one prompt —
 * after which the cookie covers the images.
 */
export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    ...(command === 'build'
      ? [
          viteSingleFile({
            // The plugin's "recommended" config is wrong for this app: it sets
            // assetsInlineLimit to inline *everything* (base64-ing ~50 MB of
            // photography into a 141 MB HTML file) and rewrites base to './',
            // which breaks asset URLs on deep links like /about/history. We
            // supply just the parts that matter below instead.
            useRecommendedBuildConfig: false,
          }),
        ]
      : []),
  ],
  build: {
    // One CSS file and one JS chunk, so there is a single each for the plugin
    // to inline. Images deliberately stay as separate files under /assets.
    cssCodeSplit: false,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: { inlineDynamicImports: true },
    },
  },
  server: {
    port: 5300,
    strictPort: true,
  },
  // Mirrors `server` so `vite preview` binds exactly where the dev server did
  // and anything proxying to this port keeps working unchanged.
  preview: {
    port: 5300,
    strictPort: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Absolute, so deep links resolve asset URLs from the site root
  base: '/',
}))
