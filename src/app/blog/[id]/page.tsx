'use client'
import { usePathname } from "next/navigation"

export default function Page() { 
    const pathname = usePathname()
    return (
        <div className="flex justify-center text-center bg-purple-500 mt-5 p-5 rounded-md">
            <h1>This is Single Blog Post <strong className="text-red-400"> {pathname}</strong> Page</h1>
        </div> 
    )
}