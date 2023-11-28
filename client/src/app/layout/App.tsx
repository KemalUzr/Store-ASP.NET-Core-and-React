import './styles.css'
import Catalog from '../../features/catalog/Catalog';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './header';
import { useState } from 'react';

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
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header darkMode={darkMode} themeChange={handleThemeChange}/> 
      <Container>
        <Catalog/>  
      </Container>
    </ThemeProvider>
  )
}

export default App
