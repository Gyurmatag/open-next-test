'use client';

import { useState } from 'react';
import { TodoItem } from './TodoItem';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircle } from 'lucide-react';
import {todos} from "@/db/schema";

type Todo = typeof todos.$inferSelect

type TodoListProps = {
    initialTodos: Todo[];
};

export function TodoList({ initialTodos }: TodoListProps) {
    const [todos, setTodos] = useState<Todo[]>(initialTodos || []);
    const [newTodo, setNewTodo] = useState<string>('');

    const addTodo = (text: string) => {
        const newTodo: Todo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => (
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )));
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newTodo.trim()) {
            addTodo(newTodo.trim());
            setNewTodo('');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="flex space-x-2 mb-6">
                <Input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new task..."
                    className="flex-grow"
                />
                <Button type="submit">
                    <PlusCircle size={18} className="mr-2" />
                    Add
                </Button>
            </form>
            <div className="space-y-3">
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                    />
                ))}
            </div>
        </>
    );
}
