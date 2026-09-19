import {NextResponse} from 'next/server';
import {getServerSupabase} from '@/lib/supabase-server';
import {getAdminSupabase} from '@/lib/supabase-admin';
async function user(){const s=await getServerSupabase();return (await s.auth.getUser()).data.user}
export async function GET(){const u=await user();if(!u)return NextResponse.json({error:'unauthorized'},{status:401});const a=getAdminSupabase();const {data,error}=await a.from('people').select('*').eq('created_by',u.id).order('full_name');if(error)return NextResponse.json({error:error.message},{status:500});return NextResponse.json(data)}
export async function POST(req:Request){const u=await user();if(!u)return NextResponse.json({error:'unauthorized'},{status:401});const b=await req.json();if(!String(b.full_name||'').trim())return NextResponse.json({error:'Nome obrigatório'},{status:400});const a=getAdminSupabase();const {data,error}=await a.from('people').insert({full_name:String(b.full_name).trim(),email:b.email||null,phone:b.phone||null,notes:b.notes||null,created_by:u.id}).select().single();if(error)return NextResponse.json({error:error.message},{status:500});return NextResponse.json(data)}
