import './styles.css'
import Catalog from '../../features/catalog/Catalog';
import { Container, CssBaseline } from '@mui/material';
import Header from './header';

function App() {
  
  return (
    <>
      <CssBaseline/>
      <Header/>
      <Container>
        <Catalog/>  
      </Container>
    </>
  )
}

export default App
