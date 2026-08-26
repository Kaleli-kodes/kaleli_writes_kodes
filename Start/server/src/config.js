import 'dotenv/config';
const required=['DATABASE_URL','AUTH_SECRET'];
for(const key of required) if(!process.env[key]) throw new Error(`Missing required environment variable: ${key}`);
if(process.env.AUTH_SECRET.length<32) throw new Error('AUTH_SECRET must contain at least 32 characters');
export const config={
  env:process.env.NODE_ENV||'development', port:Number(process.env.PORT||3001), databaseUrl:process.env.DATABASE_URL,
  authSecret:new TextEncoder().encode(process.env.AUTH_SECRET), appUrl:process.env.APP_URL||'http://localhost:3000',
  corsOrigin:process.env.CORS_ORIGIN||'http://localhost:3000', cookieSecure:process.env.COOKIE_SECURE==='true'
};
