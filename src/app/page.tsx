import { TodoList } from '@/components/TodoList';
import { drizzle } from "drizzle-orm/d1";
import { todos } from "@/db/schema";
import { getEnv } from '@/utils/env';

export const dynamic = 'force-dynamic';

export default async function TodoApp() {
    const env = await getEnv();
    const db = drizzle(env.DB);

    const todosData = await db.select().from(todos).all();

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
