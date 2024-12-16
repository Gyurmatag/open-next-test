import { useState } from 'react';
import { Todo } from '@/hooks/useTodos';
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Trash2 } from 'lucide-react';

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = () => {
        setIsDeleting(true);
        setTimeout(() => onDelete(todo.id), 300);
    };

    return (
        <div className={`flex items-center justify-between p-4 bg-card rounded-lg shadow-sm transition-all duration-300 ease-in-out ${isDeleting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="flex items-center space-x-3">
                <Checkbox
                    checked={todo.completed}
                    onCheckedChange={() => onToggle(todo.id)}
                    className="border-primary"
                />
                <span className={`text-lg ${todo.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
          {todo.text}
        </span>
            </div>
            <Button variant="ghost" size="icon" onClick={handleDelete} className="text-destructive hover:text-destructive hover:bg-destructive/10">
                <Trash2 size={18} />
            </Button>
        </div>
    );
}

