import {SignJWT,jwtVerify} from 'jose'; import {config} from './config.js';
const cookie='bizai_session';
export async function issueSession(res,user){const token=await new SignJWT({email:user.email}).setProtectedHeader({alg:'HS256'}).setSubject(user.id).setIssuedAt().setExpirationTime('8h').sign(config.authSecret);res.cookie(cookie,token,{httpOnly:true,secure:config.cookieSecure,sameSite:'lax',path:'/',maxAge:8*60*60*1000});}
export function clearSession(res){res.clearCookie(cookie,{httpOnly:true,secure:config.cookieSecure,sameSite:'lax',path:'/'});}
export async function requireAuth(req,res,next){try{const token=req.cookies[cookie];if(!token)return res.status(401).json({error:{code:'UNAUTHENTICATED',message:'Sign in required.'}});const {payload}=await jwtVerify(token,config.authSecret);req.user={id:payload.sub,email:payload.email};next();}catch{return res.status(401).json({error:{code:'UNAUTHENTICATED',message:'Session is invalid or expired.'}});}}
