'use server';
import { redirect } from 'next/navigation';
import { getServerSupabase } from '@/lib/supabase-server';

const PASSWORD_RESET_URL='https://perfil-comportamental-sueli-h4i2.vercel.app/update-password';

export async function requestPasswordReset(formData:FormData){
  const email=String(formData.get('email')||'').trim();
  const supabase=await getServerSupabase();

  const {error}=await supabase.auth.resetPasswordForEmail(email,{
    redirectTo:PASSWORD_RESET_URL
  });

  if(error){
    const msg=(error.message||'').toLowerCase();
    if(msg.includes('rate')||msg.includes('too many')||msg.includes('429')||error.status===429){
      redirect('/forgot-password?erro=rate');
    }
    redirect('/forgot-password?erro=1');
  }

  redirect('/forgot-password?sent=1');
}
