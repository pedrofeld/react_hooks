import { useEffect, useState } from "react"

export function Cronometro() {
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

    const [showTimer, setShowTimer] = useState(false);

    return (
    <>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Parar timer" : "Iniciar timer"}
      </button>
      {showTimer && <Timer/>}
    </>
  );
}
