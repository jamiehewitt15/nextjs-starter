// src/theme.ts
import { createTheme, ThemeOptions } from '@mui/material/styles'

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#0096FF', // Blue color similar to OnlyFans
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#6C757D'
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff'
    },
    text: {
      primary: '#212529',
      secondary: '#6c757d'
    }
  },
  typography: {
    fontWeightLight: '200',
    fontWeightRegular: '300',
    fontWeightMedium: '200',
    fontWeightBold: '200',
    fontFamily: '"antipasto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: 'antipasto, Helvetica, san-serif'
    },
    h2: {
      fontFamily: 'antipasto, Helvetica, san-serif',
      fontWeight: 600
    },
    h3: {
      fontFamily: 'antipasto, Helvetica, san-serif',
      fontWeight: 500
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5
    },
    body2: {
      fontFamily: '"Helvetica", "Arial", sans-serif'
    },
    button: {
      textTransform: 'none',
      fontWeight: 600
    }
  },
  shape: {
    borderRadius: 8
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          padding: '10px 20px',
          boxShadow: 'none',
          ':hover': {
            backgroundColor: '#0086E6'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#212529',
          boxShadow: 'none',
          borderBottom: '1px solid #e0e0e0'
        }
      }
    }
  }
}

const theme = createTheme(themeOptions)

export default theme
