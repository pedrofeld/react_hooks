import { useEffect, useState } from "react";

export function Contador() {
    // useState: cria estado 'count' com valor inicial 0
    const [count, setCount] = useState(0);

    // useEffect: sincroniza o título da página com o estado do contador
    // executa quando 'count' muda
    useEffect(() => {
        document.title = `Contador: ${count}`;
    }, [count]); // Array de dependências

    return (
        <>
            <p>Você clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>
            Clique aqui
            </button>
        </>
    )
}