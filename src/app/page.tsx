import { TodoList } from '@/components/TodoList';

export default function TodoApp() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-background rounded-xl shadow-xl overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-primary">Beautiful Todo</h1>
            <TodoList />
          </div>
        </div>
      </div>
  );
}
