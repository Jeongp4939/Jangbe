'use client'
 
import { useRouter } from 'next/navigation'
import NavBar from './NavBar'

export default function Home() {
  const router = useRouter()
 
  return (
    <div>
      <NavBar />
    </div>

  )
}