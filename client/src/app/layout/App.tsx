import './styles.css'
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './header';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  const[darkMode, setDarkMode] = useState(false);
  const paletteType=darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType
    }
  })

  function handleThemeChange(){
    setDarkMode(!darkMode);
  }
  //outlet is getting swapped by component that is being loaded
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header darkMode={darkMode} themeChange={handleThemeChange}/> 
      <Container>
        <Outlet />   
      </Container>
    </ThemeProvider>
  )
}

export default App
