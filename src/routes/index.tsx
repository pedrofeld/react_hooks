import { createBrowserRouter } from 'react-router-dom'
import { Contador } from '../paginas/Contador'
import { Cronometro } from '../paginas/Cronometro'
import { Home } from '../paginas/Home'
import { Fatorial } from '../paginas/Fatorial'
import { ListaDeTarefasComPropriedades } from '../paginas/ListaDeTarefas'
import { HookPersonalizado } from '../paginas/HookPersonalizado'
import { Formulario } from '../paginas/Formulario'
import MUI from '../paginas/AplicacoesMUI'

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
    {
        path: '/fatorial',
        element: <Fatorial />,
    },
    {
        path: '/listadetarefas',
        element: <ListaDeTarefasComPropriedades />,
    },
    {
        path: '/hookpersonalizado',
        element: <HookPersonalizado />,
    },
    {
        path: '/formulario',
        element: <Formulario />,
    },
    {
        path: '/mui',
        element: <MUI />,
    },
])