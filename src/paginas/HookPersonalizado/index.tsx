import { useState } from "react";
import Navbar from "../../components/Navbar";

function useCounter(initialValue: number = 0){
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(initialValue);

    return { count, increment, decrement, reset };
}

export function HookPersonalizado() {
    const { count, increment, decrement, reset } = useCounter(10);

    return (
        <>
            <Navbar/>
            <h2>Contador: {count}</h2>
            <p>Esta é uma demonstração de um hook personalizado.</p>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={reset}>Resetar</button>
        </>
    )
}

// Esse mesmo exemplo poderia utilizar o hook nativo useCallback