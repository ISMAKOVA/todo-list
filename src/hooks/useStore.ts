import {create} from "zustand";
import {IStore} from "@/types.ts";


export const useStore = create<IStore>((set) => ({
	tasks: [],
	createTask: (task) =>
		set((state) => ({
			tasks: [...state.tasks, task],
		})),
	updateTask: (id, updatedText) =>
		set((state) => ({
			tasks: state.tasks.map((task) =>
				task.id === id ? { ...task, text: updatedText } : task
			),
		})),
	deleteTask: (id) =>
		set((state) => ({
			tasks: state.tasks.filter((task) => task.id !== id),
		})),
}));