// src/components/LoginPage.tsx
'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Divider
} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const { login, signup, loginWithGoogle, user } = useAuth() // Use the Google login method
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    if (user) {
      // Redirect to the home page if the user is logged in
      router.push('/')
    }
  }, [user])

  const handleSubmit = async () => {
    try {
      setError(null)
      if (isLogin) {
        await login(email, password)
      } else {
        await signup(email, password)
      }
    } catch (err) {
      setError((err as Error).message)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      setError(null)
      await loginWithGoogle() // Call the Google login method
    } catch (err) {
      setError((err as Error).message)
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 4
      }}
    >
      <Typography variant="h1" gutterBottom>
        Let&apos;s start
      </Typography>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: 400,
          width: '100%'
        }}
      >
        <Typography variant="h5" gutterBottom>
          {isLogin ? 'Login' : 'Sign Up'}
        </Typography>
        <TextField
          label="Email"
          type="email"
          fullWidth
          sx={{ mb: 2 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          sx={{ mb: 2 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </Button>
        <Divider sx={{ my: 2, width: '100%' }}>or</Divider>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleGoogleLogin}
          fullWidth
          startIcon={<GoogleIcon />}
        >
          Continue with Google
        </Button>
        <Button onClick={() => setIsLogin(!isLogin)} sx={{ mt: 2 }}>
          {isLogin
            ? 'Need an account? Sign Up'
            : 'Already have an account? Login'}
        </Button>
      </Paper>
    </Box>
  )
}
