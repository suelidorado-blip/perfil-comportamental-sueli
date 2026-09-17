import { getAdminSupabase } from '@/lib/supabase-admin';
import TestClient from './ui';

export default async function TestPage({params}:{params:Promise<{token:string}>}){
  const {token}=await params;
  const a=getAdminSupabase();
  const {data}=await a.from('assessments').select('id,participant_name,type,status,context,token,expires_at,used_at,deleted_at,started_at').eq('token',token).maybeSingle();
  if(!data||data.deleted_at)return <main className="container"><div className="card"><h1>Link inválido</h1><p>Esta avaliação não está disponível.</p></div></main>;
  if(data.status==='cancelled')return <main className="container"><div className="card"><h1>Avaliação indisponível</h1><p>Este link foi cancelado.</p></div></main>;
  if(data.status==='completed'||data.used_at)return <main className="container"><div className="card"><h1>Avaliação concluída</h1><p>Este link é de uso único e as respostas já foram enviadas.</p></div></main>;
  if(data.expires_at&&new Date(data.expires_at).getTime()<Date.now())return <main className="container"><div className="card"><h1>Link expirado</h1><p>Solicite um novo link ao responsável pela avaliação.</p></div></main>;
  if(!data.started_at){
    await a.from('assessments').update({status:'started',started_at:new Date().toISOString()}).eq('id',data.id).eq('status','pending').is('used_at',null).is('deleted_at',null);
  }
  return <TestClient assessment={{...data,status:'started'} as any}/>;
}
