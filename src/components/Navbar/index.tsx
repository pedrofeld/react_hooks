import { Wrapper, Container } from "./styles"

export default function Navbar() { 
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
          </ul>
        </nav>
      </Container>
    </Wrapper>
  );
}