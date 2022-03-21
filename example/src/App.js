import React from 'react'

//Dependencies
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './components/theme'

//Components
import { GlobalStyles } from '@mui/material'

import Search from './Search'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          '*': {
            // Disable Blue Highlight when Touch/Press object with cursor: 'pointer' in Android
            WebkitTapHighlightColor: 'transparent',
            // scrollbar
            scrollbarWidth: '5px',
            scrollbarColor: `${theme.palette.primary.light} #00000033`
          },
          '*::-webkit-scrollbar': {
            width: '5px'
          },
          '*::-webkit-scrollbar-track': {
            background: '#00000033'
          },
          '*::-webkit-scrollbar-thumb': {
            background: theme.palette.primary.light
          },
          '*::-webkit-scrollbar-thumb:hover': {
            background: theme.palette.primary.main
          },
          // App Body Scrollbar
          '&::-webkit-scrollbar': {
            width: '5px'
          },
          '&::-webkit-scrollbar-track': {
            background: '#00000033'
          },
          '&::-webkit-scrollbar-thumb': {
            background: theme.palette.primary.light
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: theme.palette.primary.main
          }
        }}
      />
      <Search />
    </ThemeProvider>
  )
}

export default App
