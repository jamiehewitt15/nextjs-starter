'use client'

import { Container, Typography, Paper } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function AvatarsPage() {
  const router = useRouter()

  const handleAvatarClick = (name: string) => {
    // Navigate to the /chat/{name} page
    router.push(`/chat/${name}`)
  }

  return (
    <Container sx={{ py: 4 }}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#f0f2f5',
          borderRadius: 2
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          Starter site
        </Typography>
      </Paper>
    </Container>
  )
}
