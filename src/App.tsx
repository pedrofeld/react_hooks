import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevState => prevState + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
      console.log("Intervalo limpo")
    }
  }, [])

  return <p>Segundos: {seconds}</p>
}

function App() {
  /*
    // useState: cria estado 'count' com valor inicial 0
    const [count, setCount] = useState(0);

    // useEffect: sincroniza o título da página com o estado do contador
    // executa quando 'count' muda
    useEffect(() => {
      document.title = `Contador: ${count}`;
    }, [count]); // Array de dependências
  */

  const [showTimer, setShowTimer] = useState(false);

  return (
    <>
      {/*
        <p>Você clicou {count} vezes</p>
        <button onClick={() => setCount(count + 1)}>
          Clique aqui
        </button>
      */}
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Parar timer" : "Iniciar timer"}
      </button>
      {showTimer && <Timer/>}
    </>
  );
}

export default App