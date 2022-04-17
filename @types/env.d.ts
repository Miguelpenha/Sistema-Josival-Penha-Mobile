declare global {
    namespace NodeJS {
      interface ProcessEnv {
        API_URL: string
        API_KEY: string
        NAME_USER: string
        NODE_ENV: 'development' | 'production'
      }
    }
}

export {}