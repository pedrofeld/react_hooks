import { TextField, Typography } from '@mui/material';
// import { CssBaseline } from '@mui/material';

import Navbar from '../../components/Navbar';

export default function MUI() {
  return (
    <>
        <Navbar/>
        {/*<CssBaseline/>*/}
        <Typography>Teste de texto</Typography>
        <TextField label="Nome"/>
    </>
  );
}
