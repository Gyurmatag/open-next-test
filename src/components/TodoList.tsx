'use client'

import { useState } from 'react';
import { useTodos, Todo } from '@/hooks/useTodos';
import { TodoItem } from './TodoItem';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PlusCircle } from 'lucide-react';

export function TodoList() {
    const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
    const [newTodo, setNewTodo] = useState('');

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

