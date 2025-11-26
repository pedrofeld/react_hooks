import { useMemo, useState } from "react";
import Navbar from "../../components/Navbar";

function calcularFatorial(n: number): number {
    console.log("Calculando fatorial...")
    return n<=1 ? 1 : n * calcularFatorial(n-1);
}

export function Fatorial() {
    const [numero, setNumero] = useState(5);
    const [contador, setContador] = useState(0);
    // const fatorial = calcularFatorial(numero);
    const fatorial = useMemo(() => calcularFatorial(numero), [numero]);

    return (
        <>
            <Navbar/>
            <h2>Fatorial de {numero}: {fatorial}</h2>
            <button onClick={() => setNumero(numero + 1)}>Aumentar</button>
            <button onClick={() => setNumero(numero - 1)}>Diminuir</button>
            <button onClick={() => setContador(contador + 1)}>Contador</button>
        </>
    )
}

/*
    Essa aplicação é prejudicial sem useMemo porque a função calcularFatorial
    é chamada toda vez que o componente Fatorial é re-renderizado, mesmo quando
    o valor não muda.
    
    Além do cálculo desnecessário, pode prejudicar o desempenho em operações mais
    complexas, com números mais altos.
*/