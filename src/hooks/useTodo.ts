import { useState } from "react";
import type { Todos } from "../types";

export default function useTodo(){

    const [todos, setTodo] = useState<Todos[]>([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = (e: React.FormEvent) =>{
        e.preventDefault();

        if(!inputValue.trim()) return;
        const newTodo: Todos = {
            id: Date.now(),
            todo: inputValue.trim(),
            status: false,
        };

        setTodo([newTodo, ...todos])
        setInputValue('');
    }

    const handleCompleteTodo = (id: number) => {
        const updatedTodos = todos.map(todo=>
            todo.id === id ? {...todo, status: true } : todo
        )
        setTodo(updatedTodos)
    }

    const deleteTodo = (id: Todos['id']) =>{
        setTodo(todos.filter(item => item.id !== id))
    }

    const restartTodo= () => {
        setTodo([])
    }

    return{
        handleAddTodo,
        inputValue,
        setInputValue,
        todos,
        handleCompleteTodo,
        deleteTodo,
        restartTodo
    }
}





