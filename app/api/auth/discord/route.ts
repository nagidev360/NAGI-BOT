import { NextResponse } from 'next/server';
export async function GET(request:Request){
 const clientId=process.env.DISCORD_CLIENT_ID;
 const redirect=process.env.DISCORD_REDIRECT_URI;
 if(!clientId||!redirect) return NextResponse.json({error:'Discord OAuth is not configured'},{status:503});
 const state=crypto.randomUUID();
 const url=new URL('https://discord.com/oauth2/authorize');
 url.searchParams.set('client_id',clientId); url.searchParams.set('redirect_uri',redirect); url.searchParams.set('response_type','code'); url.searchParams.set('scope','identify guilds');
 const res=NextResponse.redirect(url); res.cookies.set('oauth_state',state,{httpOnly:true,secure:true,sameSite:'lax',maxAge:600,path:'/'});
 url.searchParams.set('state',state); return NextResponse.redirect(url);
}
