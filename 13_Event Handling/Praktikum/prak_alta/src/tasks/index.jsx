import { useState } from "react";
import { v4 as uuid } from "uuid";
import Header from "./header";
import FormTodos from "./form";
import FormProcces from "./listProcces";
import '../style/style.css';

export default function Index () {
    const [array, setArray] = useState([]);

    const handlerAddData = (input) => {
        let newData = [...array];
        newData = [
            ...newData,
            {
                id: uuid(),
                title: input,
                completed: false
            }
        ]
        setArray(newData);
    }

    const handlerDelete = (id) => {
        const deleteTodos = array.filter(todo => {
            return todo.id !== id;
        });
        setArray(deleteTodos);
    }

    const handlerCheck = (value) => {
        let checkTodos = array.map(list => list.id === value.id ? {...list, completed: !list.completed } : list);
        setArray(checkTodos);
    }

    return (
        <>
            <Header logo="React Todos"/>
            <FormTodos addData = {handlerAddData} />
            <FormProcces todos = {array}
                         deleteTodos = {handlerDelete} 
                         checkTodos = {handlerCheck}           
            />
        </>
    )
}