declare interface AppConfig {
    mode:string
    name:string
    host:string
    port:number
}

export const appConfig:AppConfig = {
    mode:process.env.APP_MODE ?? 'development',
    name:process.env.APP_NAME ?? 'development',
    host:process.env.APP_HOST ?? 'development',
    port:process.env.APP_PORT ? parseInt(process.env.APP_PORT,10) : 3000,
}