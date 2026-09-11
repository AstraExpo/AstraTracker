import { SubmitEvent, useEffect, useState } from "react";
import { Task } from "types";
import { addTask, deleteTask, getAllTasks, toggleTask } from "@/lib/taskStore";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllTasks()
      .then(setTasks)
      .finally(() => setLoading(false));
  }, []);

  async function handleAdd(e: SubmitEvent) {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    const updated = await addTask(trimmed);
    setTasks(updated);
    setTitle("");
  }

  async function handleToggle(id: string) {
    const updated = await toggleTask(id);
    setTasks(updated);
  }

  async function handleDelete(id: string) {
    const updated = await deleteTask(id);
    setTasks(updated);
  }

  if (loading) {
    return (
      <main className="h-screen w-full flex items-center justify-center bg-background text-foreground">
        <p>Loading tasks...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full bg-background text-foreground p-8 flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Astra Tracker</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex items-center gap-2 mb-6" onSubmit={handleAdd}>
            <Input
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
              placeholder="What needs doing?"
            />
            <Button type="submit">Add</Button>
          </form>

          <ul className="space-y-1">
            {tasks.length === 0 && (
              <p className="text-sm text-muted-foreground">
                No tasks yet — add one above.
              </p>
            )}
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center gap-3 py-2 border-b last:border-b-0"
              >
                <Checkbox
                  checked={task.done}
                  onCheckedChange={() => handleToggle(task.id)}
                />
                <span
                  className={`flex-1 text-left ${
                    task.done ? "line-through text-muted-foreground" : ""
                  }`}
                >
                  {task.title}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(task.id)}
                >
                  ✕
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </main>
  );
}

export default Tasks;
