'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Links() {
  const pathname = usePathname()
 
  return (
    <nav>
      <ul className='flex justify-evenly bg-black p-4 text-white'>
        <li>
          <Link className={`link ${pathname === '/' ? 'text-blue-500' : ''}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={`link ${pathname === '/dashboard' ? 'text-blue-500' : ''}`} href="/dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/blog/post' ? 'text-blue-500' : ''}`}
            href="/blog/post"
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}