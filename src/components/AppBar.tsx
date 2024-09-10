'use client'

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function CustomAppBar() {
  const theme = useTheme()
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Failed to logout:', error)
    }
  }

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        boxShadow: 'none',
        borderBottom: '1px solid #e0e0e0'
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
          <Link href="/" passHref legacyBehavior>
            <Box
              component="a"
              sx={{
                textDecoration: 'none', // Remove text decoration
                color: theme.palette.primary.main, // Always use primary color
                '&:hover': {
                  color: theme.palette.primary.main // Maintain primary color on hover
                },
                '&:visited': {
                  color: theme.palette.primary.main // Maintain primary color after visited
                },
                '&:active': {
                  color: theme.palette.primary.main // Maintain primary color on active
                }
              }}
            >
              Next.js Starter 😎
            </Box>
          </Link>
        </Typography>
        {/* {user && (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        )} */}
      </Toolbar>
    </AppBar>
  )
}
