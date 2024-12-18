import { TodoList } from '@/components/TodoList';
import { todos } from "@/db/schema";
import {db} from "../../db";

export const dynamic = 'force-dynamic';

export default async function TodoApp() {

    const todosData = await db.select().from(todos);

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-background rounded-xl shadow-xl overflow-hidden">
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-center mb-6 text-primary">Todo</h1>
                    <TodoList initialTodos={todosData} />
                </div>
            </div>
        </div>
    );
}
