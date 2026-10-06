'use server';
import { redirect } from 'next/navigation';
import { getServerSupabase } from '@/lib/supabase-server';

export async function requestPasswordReset(formData:FormData){
  const email=String(formData.get('email')||'').trim();
  const supabase=await getServerSupabase();
  const appUrl=(process.env.NEXT_PUBLIC_APP_URL||'').replace(/\/$/,'');
  const {error}=await supabase.auth.resetPasswordForEmail(email,{
    redirectTo:`${appUrl}/auth/callback?next=/update-password`
  });
  if(error){
    const msg=(error.message||'').toLowerCase();
    if(msg.includes('rate')||msg.includes('too many')) redirect('/forgot-password?erro=rate');
    redirect('/forgot-password?erro=1');
  }
  redirect('/forgot-password?sent=1');
}
