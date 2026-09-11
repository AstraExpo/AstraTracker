import { load } from "@tauri-apps/plugin-store";
import type { Task } from "../types";

const STORE_FILE = "tasks.json";
const TASKS_KEY = "tasks";

async function getStore() {
  return await load(STORE_FILE, { autoSave: true });
}

export async function getAllTasks(): Promise<Task[]> {
  const store = await getStore();
  const tasks = await store.get<Task[]>(TASKS_KEY);
  return tasks ?? [];
}

export async function saveAllTasks(tasks: Task[]): Promise<void> {
  const store = await getStore();
  await store.set(TASKS_KEY, tasks);
}

export async function addTask(title: string): Promise<Task[]> {
  const tasks = await getAllTasks();
  const newTask: Task = {
    id: crypto.randomUUID(),
    title,
    done: false,
    createdAt: Date.now(),
  };
  const updated = [...tasks, newTask];
  await saveAllTasks(updated);
  return updated;
}

export async function toggleTask(id: string): Promise<Task[]> {
  const tasks = await getAllTasks();
  const updated = tasks.map(t => t.id === id ? { ...t, done: !t.done } : t);
  await saveAllTasks(updated);
  return updated;
}

export async function deleteTask(id: string): Promise<Task[]> {
  const tasks = await getAllTasks();
  const updated = tasks.filter(t => t.id !== id);
  await saveAllTasks(updated);
  return updated;
}