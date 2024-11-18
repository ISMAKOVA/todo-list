import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {useDialog} from "@/hooks/useDialog.ts";

interface Props {
	message: string;
	description: string;
	onConfirm: () => void;
}

export const WarningDialog = ({ onConfirm, message, description}: Props) => {
	const { isOpen, onClose } = useDialog();
	return (
		<AlertDialog open={isOpen} onOpenChange={onClose}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>{message}</AlertDialogTitle>
					<AlertDialogDescription>
						{description}
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel onClick={onClose}>Отменить</AlertDialogCancel>
					<AlertDialogAction onClick={onConfirm}>Продолжить</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}

