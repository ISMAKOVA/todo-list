import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {useDialog} from "@/hooks/useDialog.ts";
import {useStore} from "@/hooks/useStore.ts";
import {ITask} from "@/types.ts";
import {useState} from "react";

interface Props {
	task: ITask;
}
export const EditTaskDialog = ({task}: Props) => {
	const { isOpen, onClose } = useDialog();
	const { updateTask} = useStore();
	const [editedTaskText, setEditedTaskText] = useState(task.text);
	const handleSave = () => {
		updateTask(task.id, editedTaskText);
		onClose();
	}

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Редактировать задачу</DialogTitle>
				</DialogHeader>
				<div>
					<Input
						value={editedTaskText}
						onChange={(e) => setEditedTaskText(e.target.value)}
						className="text-black"
					/>
				</div>
				<DialogFooter>
					<Button type="submit" onClick={handleSave}>Сохранить</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}