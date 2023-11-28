'use client'
import { useRouter } from 'next/navigation'


export default async function Page() {
  const router = useRouter();
    return (
    <main className="flex justify-center items-center flex-col mt-3">
     <div>This is Main Page</div>
      <button className='bg-blue-500 p-3 rounded-lg mt-5' type="button" onClick={() => router.push('/dashboard')}>
        Dashboard
      </button>
      <p className='mt-3'>In the above button I am using <strong className='bg-gray-500 rounded-md p-1 mt-2'>useRouter Hook</strong></p>
    </main>
  );
}



