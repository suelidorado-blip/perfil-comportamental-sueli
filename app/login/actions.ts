'use server';
import { redirect } from 'next/navigation';
import { getServerSupabase } from '@/lib/supabase-server';
export async function loginAction(formData:FormData){
 const email=String(formData.get('email')||''); const password=String(formData.get('password')||'');
 const supabase=await getServerSupabase();
 const {error}=await supabase.auth.signInWithPassword({email,password});
 if(error) redirect('/login?erro=1');
 redirect('/admin');
}
export async function logoutAction(){const supabase=await getServerSupabase();await supabase.auth.signOut();redirect('/login')}
