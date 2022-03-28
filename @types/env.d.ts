declare global {
    namespace NodeJS {
      interface ProcessEnv {
        API_URL: string
        API_KEY: string
        NODE_ENV: 'development' | 'production'
      }
    }
}