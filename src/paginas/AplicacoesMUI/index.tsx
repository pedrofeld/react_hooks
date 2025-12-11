import { Button, Container, IconButton, Paper, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Navbar from '../../components/Navbar';
import { Add, Delete, Favorite, FavoriteBorder, Search, ShoppingCart } from '@mui/icons-material';
import { useState } from 'react';
// import { CssBaseline } from '@mui/material';

export default function MUI() {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <>
      <Navbar/>
      {/*<CssBaseline/>*/}

      <p>Tema dark e light:</p>
      <Container maxWidth="sm" sx={{marginTop: "50px", textAlign: "center"}}> 
        <Typography variant='h1' color='primary'>
          {" "}
          Teste de tema
        </Typography>
        <Typography variant='h6' color='secondary'>
          Teste de personalização do tema
        </Typography>
        <Paper sx={{padding: "20px", marginTop: "20px"}}>
          <Typography variant='body1' color="textPrimary">
            Esse é um Paper com fundo personalizado
          </Typography>
          <Button 
            variant='contained' 
            color='primary'
            sx={{
              marginTop: "20px"
            }}
          >
            Tema light
          </Button>
          <Button 
            variant='contained' 
            color='secondary'
            sx={{
              marginLeft: "10px", 
              marginTop: "20px"
            }
          }>
            Tema dark
          </Button>
        </Paper>
      </Container>

      <Typography>Teste de texto</Typography>

      <TextField label="Nome" slotProps={{
        input: {
          sx: {
            backgroundColor: "gray.200",
            borderRadius: 6
          },
        },
      }}/>

      <p>Grid:</p>
      <Grid container spacing={2}>
        <Grid size={{xs: 6, md: 8}}>
          xs: 6, md: 8
        </Grid>
        <Grid size={{xs: 6, md: 4}}>
          xs: 6, md: 4
        </Grid>
      </Grid>
      
      <Button variant="contained" color="primary" sx={{ borderRadius: 8, backgroundColor: "secondary.light"}}>
        Botão
      </Button>

      <p>Icons:</p>
      <Search sx={{ fontSize: 50 }}/>
      <ShoppingCart fontSize='large'/>

      <p>Botão com ícone:</p>
      <Button variant='contained' startIcon={<Add/>}>
        Adicionar
      </Button>
      <Button variant='contained' endIcon={<Delete/>}>
        Remover
      </Button>

      <p>Ícone que serve de botão</p>
      <IconButton size='large' onClick={() => setIsFavorite(!isFavorite)}>
        {isFavorite ? <Favorite color="primary"/> : <FavoriteBorder />}
      </IconButton>
    </>
  );
}
