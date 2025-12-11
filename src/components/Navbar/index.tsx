import { Wrapper, Container } from "./styles"
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeMode } from '../../Contextos/thema';

export default function Navbar() { 
  const { mode, toggleMode } = useThemeMode();
  return (
    <Wrapper>
      <Container>   
        <nav className="navbar">
          <div className="logo">PF Utilitários</div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/contador">Contador</a></li>
            <li><a href="/cronometro">Cronômetro</a></li>
            <li><a href="/fatorial">Fatorial</a></li>
            <li><a href="/listadetarefas">Lista de Tarefas</a></li>
            <li><a href="/hookpersonalizado">Hook Personalizado</a></li>
            <li><a href="/formulario">Formulário</a></li>
            <li><a href="/mui">Aplicações MUI</a></li>
          </ul>
        </nav>
        <IconButton onClick={toggleMode} aria-label="toggle theme" sx={{color: "#ffffff"}}>
          {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Container>
    </Wrapper>
  );
}