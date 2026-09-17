import { NextResponse } from 'next/server';
import { getServerSupabase } from '@/lib/supabase-server';
import { getAdminSupabase } from '@/lib/supabase-admin';
import crypto from 'crypto';

async function currentUser(){
  const s=await getServerSupabase();
  const {data:{user}}=await s.auth.getUser();
  return user;
}

export async function GET(req:Request){
  const user=await currentUser();
  if(!user)return NextResponse.json({error:'unauthorized'},{status:401});
  const url=new URL(req.url);
  const showDeleted=url.searchParams.get('deleted')==='1';
  const a=getAdminSupabase();
  let q=a.from('assessments').select('*').eq('created_by',user.id).order('created_at',{ascending:false});
  q=showDeleted?q.not('deleted_at','is',null):q.is('deleted_at',null);
  const {data,error}=await q;
  if(error)return NextResponse.json({error:error.message},{status:500});
  return NextResponse.json(data);
}

export async function POST(req:Request){
  const user=await currentUser();
  if(!user)return NextResponse.json({error:'unauthorized'},{status:401});
  const body=await req.json();
  if(!body.participant_name||!['behavioral','vocational'].includes(body.type))return NextResponse.json({error:'Dados inválidos'},{status:400});
  const token=crypto.randomBytes(24).toString('hex');
  const a=getAdminSupabase();
  const {data,error}=await a.from('assessments').insert({
    participant_name:body.participant_name,
    participant_contact:body.participant_contact||null,
    context:body.context||null,
    type:body.type,
    token,
    status:'pending',
    created_by:user.id
  }).select().single();
  if(error)return NextResponse.json({error:error.message},{status:500});
  const base=process.env.NEXT_PUBLIC_APP_URL||new URL(req.url).origin;
  return NextResponse.json({id:data.id,url:`${base}/t/${token}`});
}

export async function DELETE(req:Request){
  const user=await currentUser();
  if(!user)return NextResponse.json({error:'unauthorized'},{status:401});
  const body=await req.json().catch(()=>({}));
  if(!body.id)return NextResponse.json({error:'ID obrigatório'},{status:400});
  const a=getAdminSupabase();
  const {data,error}=await a.from('assessments').update({
    deleted_at:new Date().toISOString(),
    deleted_by:user.id,
    deletion_reason:body.reason||null
  }).eq('id',body.id).eq('created_by',user.id).is('deleted_at',null).select('id').maybeSingle();
  if(error)return NextResponse.json({error:error.message},{status:500});
  if(!data)return NextResponse.json({error:'Avaliação não encontrada ou já excluída.'},{status:404});
  return NextResponse.json({ok:true});
}

export async function PATCH(req:Request){
  const user=await currentUser();
  if(!user)return NextResponse.json({error:'unauthorized'},{status:401});
  const body=await req.json().catch(()=>({}));
  if(!body.id||!['restore','permanent'].includes(body.action))return NextResponse.json({error:'Dados inválidos'},{status:400});
  const a=getAdminSupabase();
  if(body.action==='restore'){
    const {data,error}=await a.from('assessments').update({deleted_at:null,deleted_by:null,deletion_reason:null}).eq('id',body.id).eq('created_by',user.id).not('deleted_at','is',null).select('id').maybeSingle();
    if(error)return NextResponse.json({error:error.message},{status:500});
    if(!data)return NextResponse.json({error:'Relatório excluído não encontrado.'},{status:404});
    return NextResponse.json({ok:true});
  }
  const {error}=await a.from('assessments').delete().eq('id',body.id).eq('created_by',user.id).not('deleted_at','is',null);
  if(error)return NextResponse.json({error:error.message},{status:500});
  return NextResponse.json({ok:true});
}
