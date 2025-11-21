import { createBrowserRouter } from 'react-router-dom'
import { Contador } from '../paginas/Contador'
import { Cronometro } from '../paginas/Cronometro'
import { Home } from '../paginas/Home'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/contador',
        element: <Contador />,
    },
    {
        path: '/cronometro',
        element: <Cronometro />,
    },
])