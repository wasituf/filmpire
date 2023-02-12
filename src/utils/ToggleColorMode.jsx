/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, useEffect, useMemo, createContext } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

export const ColorModeContext = createContext()

const ToggleColorMode = ({ children }) => {
  const [mode, setMode] = useState('light')

  useEffect(() => {
    const colorMode = localStorage.getItem('color_mode')
    if (colorMode) setMode(colorMode)
  }, [])

  useEffect(() => {
    localStorage.setItem('color_mode', mode)
  }, [mode])

  const toggleColorMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
  }

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  )

  return (
    <ColorModeContext.Provider value={{ mode, setMode, toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default ToggleColorMode
