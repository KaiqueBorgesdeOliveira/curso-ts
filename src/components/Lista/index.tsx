import React from "react";
import style from './Lista.module.scss';
import Item from "./Item";

function Lista() {
    let tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Javascript',
        tempo: '01:00:00'
    }, {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }]
    return (
        <aside className= {style.listaTarefas}>
            <h2 onClick={() => {
                console.log("h2 clicado", tarefas)
                tarefas = [...tarefas, {tarefa: "Estudar estado", tempo: "05:00:00"}]
            }}>Estudos do dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item 
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;