import { useState, useCallback } from 'react';

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export function useTodos() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = useCallback((text: string) => {
        setTodos(prev => [...prev, { id: Date.now(), text, completed: false }]);
    }, []);

    const toggleTodo = useCallback((id: number) => {
        setTodos(prev => prev.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    }, []);

    const deleteTodo = useCallback((id: number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    }, []);

    return { todos, addTodo, toggleTodo, deleteTodo };
}

