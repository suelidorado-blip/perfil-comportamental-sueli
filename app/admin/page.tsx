import { redirect } from 'next/navigation';
import { getServerSupabase } from '@/lib/supabase-server';
import { logoutAction } from '../login/actions';
import AdminClient from './ui';
export default async function Admin(){const supabase=await getServerSupabase();const {data:{user}}=await supabase.auth.getUser();if(!user)redirect('/login');return <><header className="topbar"><div className="topbar-inner"><div className="brand">Perfil & Vocacional</div><form action={logoutAction}><button className="btn btn-secondary">Sair</button></form></div></header><AdminClient/></>}
