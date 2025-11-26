import Navbar from "../../components/Navbar";
import { useState } from "react";

interface ListaDeTarefasProps {
    tarefas: string[];
    adicionarTarefa: (tarefa: string) => void;
}

/* 
    Função responsável por renderizar a interface da lista de tarefas, 
    onde o usuário pode adicionar novas tarefas e visualizar as tarefas existentes
*/
function ListaDeTarefas({tarefas, adicionarTarefa}: ListaDeTarefasProps) {
    const [novaTarefa, setNovaTarefa] = useState("");

    console.log("Lista de tarefas re-renderizou");

    return (
        <>
            <Navbar/>

            <h2>Lista de tarefas</h2>
            <p>Usando o hook useCallback</p>

            <input 
                type="text"
                placeholder="Nova tarefa"
                value={novaTarefa}
                onChange={(event) => setNovaTarefa(event.target.value)}
            />
            <button
                onClick={() => {
                    adicionarTarefa(novaTarefa);
                    setNovaTarefa("");
                }}
            >
                Adicionar tarefa
            </button>

            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ul>
        </>
    )
}

/*
    Função responsável por atuar como um "container" para gerenciar o estado 
    das tarefas e a lógica de adição de novas tarefas. Ele estabelece a conexão 
    entre o estado local e o componente ListaDeTarefas.
*/
export function ListaDeTarefasComPropriedades() {
  const [tarefas, setTarefas] = useState<string[]>([]);
  const handleAdicionarTarefa = (novaTarefa: string) => {
    setTarefas(prevState => [...prevState, novaTarefa])
  }

  return (
    <>
      <ListaDeTarefas tarefas={tarefas} adicionarTarefa={handleAdicionarTarefa}/>
    </>
  );
}
// Dava para criar um componente para esta