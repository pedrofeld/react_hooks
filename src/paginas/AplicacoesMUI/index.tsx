import { Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
// import { CssBaseline } from '@mui/material';

import Navbar from '../../components/Navbar';

export default function MUI() {
  return (
    <>
        <Navbar/>
        {/*<CssBaseline/>*/}

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
    </>
  );
}
