const DBConfig = {
    name : process.env.DATABASE_NAME || '',
    username :  process.env.DATABASE_USERNAME || '',
    password : process.env.DATABASE_PASSWORD || '',
    hostName : process.env.DATABASE_HOST || ''
} ;

export {DBConfig}