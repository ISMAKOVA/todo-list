import React, {useState} from "react";
import {Button} from "@/components/ui/button.tsx";
import { Checkbox } from "@/components/ui/checkbox"
import {Pencil, Trash2} from "lucide-react";


interface Props {
	id: string
	onEdit: (id: string) => void;
	onDelete: (id: string) => void;
	children: React.ReactNode;
}

export const ListItem = ({id, onEdit, onDelete, children}: Props) => {
	const [checked, setChecked] = useState(false);
	return (
		<div className={"mt-2 border-b"}>
			<div className={"w-96 flex justify-between items-center mb-2"}>
				<div className={"p-1 w-full flex items-center rounded-md mr-2"}>
					<Checkbox id="item" onClick={() => setChecked(!checked)}/>
					<label
						htmlFor="item"
						className={
							"text-sm font-medium leading-none m-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70" +
							(checked ? " line-through" : "")
						}
					>
						{children}
					</label>
				</div>

				<Button variant="outline" size="icon" className={"w-10 mr-1"} onClick={() => onEdit(id)}>
					<Pencil/>
				</Button>

				<Button variant="outline" size="icon" className={"w-10"} onClick={() => onDelete(id)}>
					<Trash2 className={"text-red-600"}/>
				</Button>
			</div>
		</div>
	)
}