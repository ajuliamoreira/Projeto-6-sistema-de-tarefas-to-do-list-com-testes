import React, {useState} from "react"
import './ListaTarefas.css'

export default function ListaTarefas() {
    const [tarefa,setTarefa] = useState('')
    const [tarefas,setTarefas] = useState([])
    
    function adicionarTarefas() {
        if (!tarefa.trim()) return
        setTarefas([...tarefas, tarefa])
        setTarefa('');
    }
    
    
    return(
        <div className="container">
            <h1 className="titulo">Lista de Tarefas</h1>
            <div className="formulario">
                <input
                    className='input' 
                    type="text" 
                    placeholder="Nova tarefa"
                    value={tarefa}
                    onChange={(e) => setTarefa(e.target.value)}
                />
                <button className="btn" onClick={adicionarTarefas}>Adicionar</button>
            </div>
            <ul className="lista">
                {tarefas.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    )
}