// src/app/layout.tsx
'use client'

import { ReactNode, useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, Container } from '@mui/material'
import { AuthProvider } from '@/contexts/AuthContext'
import theme from '@/theme'
import CustomAppBar from '@/components/AppBar'
import '@styles/globals.css'
// import { initFirebaseAnalytics } from '@/firebase'
import LoggedIn from '@/components/LoggedIn'

export default function RootLayout({ children }: { children: ReactNode }) {
  // useEffect(() => {
  // Initialize Firebase Analytics when the component mounts on the client side
  //   initFirebaseAnalytics().then((analytics) => {
  //     if (analytics) {
  //       console.log('Firebase Analytics initialized')
  //     }
  //   })
  // }, [])

  return (
    <html lang="en" style={{ height: '100%' }}>
      <head />
      <body
        style={{
          margin: 0,
          backgroundColor: '#ffffff',
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <CssBaseline />
            <CustomAppBar />
            {/* <LoggedIn> */}
            <Container
              maxWidth="md"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                minHeight: '100vh',
                paddingTop: 4,
                paddingBottom: 4,
                backgroundColor: '#ffffff'
              }}
            >
              {children}
            </Container>
            {/* </LoggedIn> */}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
