'use server';
import { redirect } from 'next/navigation';
import { getServerSupabase } from '@/lib/supabase-server';

export async function updatePassword(formData:FormData){
  const password=String(formData.get('password')||'');
  const confirmPassword=String(formData.get('confirmPassword')||'');

  if(password!==confirmPassword) redirect('/update-password?erro=match');
  if(password.length<8) redirect('/update-password?erro=short');

  const supabase=await getServerSupabase();
  const {data:{user}}=await supabase.auth.getUser();
  if(!user) redirect('/update-password?erro=session');

  const {error}=await supabase.auth.updateUser({password});
  if(error) redirect('/update-password?erro=1');

  await supabase.auth.signOut();
  redirect('/login?senha=alterada');
}
