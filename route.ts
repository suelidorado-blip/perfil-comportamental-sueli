import { NextResponse } from 'next/server';
import { getAdminSupabase } from '@/lib/supabase-admin';
import { scoreBehavioral,scoreVocational } from '@/lib/scoring';

export async function POST(req:Request){
  const {token,answers}=await req.json();
  if(!token||!answers)return NextResponse.json({error:'Dados inválidos.'},{status:400});
  const a=getAdminSupabase();
  const {data:x,error}=await a.from('assessments').select('*').eq('token',token).is('deleted_at',null).maybeSingle();
  if(error||!x)return NextResponse.json({error:'Link inválido'},{status:404});
  if(x.status==='completed'||x.used_at)return NextResponse.json({error:'Esta avaliação já foi concluída. Este link é de uso único.'},{status:409});
  if(x.status==='cancelled')return NextResponse.json({error:'Esta avaliação foi cancelada.'},{status:410});
  if(x.expires_at&&new Date(x.expires_at).getTime()<Date.now())return NextResponse.json({error:'Este link expirou.'},{status:410});

  const result=x.type==='behavioral'?scoreBehavioral(answers):scoreVocational(answers);
  const now=new Date().toISOString();
  // Conditional update makes the one-use rule server-side and atomic.
  const {data:updated,error:u}=await a.from('assessments').update({
    answers,
    result,
    status:'completed',
    completed_at:now,
    used_at:now
  }).eq('id',x.id).in('status',['pending','started']).is('used_at',null).is('deleted_at',null).select('id').maybeSingle();
  if(u)return NextResponse.json({error:u.message},{status:500});
  if(!updated)return NextResponse.json({error:'Esta avaliação já foi concluída. Este link é de uso único.'},{status:409});
  return NextResponse.json({ok:true});
}
