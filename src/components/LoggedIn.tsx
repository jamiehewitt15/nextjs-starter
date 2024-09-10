'use client'

import { useEffect, ReactNode } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter, usePathname } from 'next/navigation'

export default function LoggedIn({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const router = useRouter()
  const pathname = usePathname() // Get the current path

  useEffect(() => {
    if (!user && pathname !== '/login') {
      router.push('/login')
    }
  }, [user, pathname, router])

  return children
}
