import { useReducer } from "react";
import Navbar from "../../components/Navbar";

interface State {
    name: string
    email: string
};

type Action = 
    | {type: 'updateField'; field: 'name' | 'email'; value: string} 
    | {type: 'reset' }

const initialState: State = {
    name: "",
    email: "",
};

function formReducer(state: State, action: Action): State {
    switch (action.type){
        case 'updateField':
            return {...state, [action.field]: action.value};
        case 'reset':
            return initialState;
        default:
            return state;
    };
};

export function Formulario(){
    const [state, dispatch] = useReducer(formReducer, initialState);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = e.target;
        dispatch({type: 'updateField', field: name as 'name' | 'email', value});
    };

    function handleReset(){
        dispatch({type: 'reset'});
    };

    return (
        <>
            <Navbar/>
            <form action="">
                <div>
                    <label htmlFor="">Nome:</label>
                    <input type="text" name="name" value={state.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="text" name="email" value={state.email} onChange={handleChange} />
                </div>
                <button type="button" onClick={handleReset}>Reset</button>
            </form>
            <h3>Dados do formulário:</h3>
            <p>Nome: {state.name}</p>
            <p>Email: {state.email}</p>
        </>
    )
}