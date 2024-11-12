import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header/header'
import { Box, Container, useMediaQuery } from '@mui/material'
import Footer from './components/footer/footer';
import SnackbarControl from './components/snackbar/snackbarControl';

function App() {
  const matches = useMediaQuery('(min-width: 600px)');

  return (
    <Container maxWidth={false} disableGutters={true} sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <Box sx={{ flex: '0 0', marginBottom: matches ? '145px' : '60px' }}>
        <Header></Header>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1 1',
        width: '100%',
        marginBottom: matches ? '145px' : '60px'
      }}>
        <Outlet></Outlet>
      </Box>
      <Box>
        <Footer></Footer>
      </Box>
      <SnackbarControl></SnackbarControl>
    </Container>
  )
}

export default App
