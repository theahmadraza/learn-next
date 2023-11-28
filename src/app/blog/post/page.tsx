import { data } from '@/data/post'
import Link from 'next/link'

export default function Page() {
  return (
    <ul className='flex flex-wrap gap-5 justify-center mt-5'>
      {data.map((post: any) => (
        <li key={post.id} className='bg-gray-200 my-2 p-5 rounded-md w-64 text-center'>
          <Link className=' underline text-blue-700' href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}