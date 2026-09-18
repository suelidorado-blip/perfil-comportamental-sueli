import { redirect } from 'next/navigation';
import { getServerSupabase } from '@/lib/supabase-server';
import { logoutAction } from '../login/actions';
import AdminClient from './ui';
export default async function Admin(){const supabase=await getServerSupabase();const {data:{user}}=await supabase.auth.getUser();if(!user)redirect('/login');return <><header className="topbar"><div className="topbar-inner"><span className="muted" style={{fontSize:13,marginRight:12}}>{user.email}</span><form action={logoutAction}><button className="btn btn-ghost">Sair</button></form></div></header><AdminClient/></>}
