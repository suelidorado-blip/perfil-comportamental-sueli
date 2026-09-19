import {redirect} from 'next/navigation'; import {getServerSupabase} from '@/lib/supabase-server'; import LifeWheelAdmin from './ui';
export default async function Page(){const s=await getServerSupabase();const {data:{user}}=await s.auth.getUser();if(!user)redirect('/login');return <LifeWheelAdmin/>}
