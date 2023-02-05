/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_SERVER_HOST: string,
  readonly VITE_API_SERVER_PORT: string
}

interface ImportMeta  {
  // additionally pull in the original values from vite, so you won't need <reference types="vite/client" /> any longer.
  readonly env:ImportMetaEnv; 
}