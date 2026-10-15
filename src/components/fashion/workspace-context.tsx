import { createContext, useContext, useState, type ReactNode } from 'react';
export type Draft = { id: string; title: string; text: string; createdAt: string; savedMinutes: number };
export type Task = { id: string; title: string; done: boolean; priority: string };
const initialTasks: Task[] = [ { id: '1', title: 'Finalize the spring capsule mood board', done: false, priority: 'Design' }, { id: '2', title: 'Follow up with fabric supplier', done: false, priority: 'Business' }, { id: '3', title: 'Prepare for tomorrow’s client fitting', done: false, priority: 'Client' } ];
const Context = createContext<{ drafts: Draft[]; addDraft: (draft: Draft) => void; tasks: Task[]; setTasks: React.Dispatch<React.SetStateAction<Task[]>> } | null>(null);
export function WorkspaceProvider({ children }: { children: ReactNode }) { const [drafts, setDrafts] = useState<Draft[]>([]); const [tasks, setTasks] = useState(initialTasks); return <Context.Provider value={{ drafts, addDraft: draft => setDrafts(prev => [draft, ...prev]), tasks, setTasks }}>{children}</Context.Provider>; }
export function useWorkspace() { const value = useContext(Context); if (!value) throw new Error('Workspace is unavailable'); return value; }
