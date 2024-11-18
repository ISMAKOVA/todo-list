
export interface ITask {
	id: string;
	text: string;
}

export interface IStore {
	tasks: ITask[];
	createTask: (task: ITask) => void;
	updateTask: (id: string, updatedText: string) => void;
	deleteTask: (id: string) => void;
}

export interface IDialogProps {
	isOpen: boolean;
	type: string | null;
	data: any;
	onOpen: (type: string, data?: any) => void;
	onClose: () => void;
	setData: (data: any) => void;
}