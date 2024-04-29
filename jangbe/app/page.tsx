'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Home() {
  const router = useRouter()
 
  return (
    <button
      type="button"
      onClick={() => router.push('/sales', { scroll: false })}
    >
      Sales
    </button>
  )
}