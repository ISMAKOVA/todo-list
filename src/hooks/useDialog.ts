import {create} from "zustand";
import {IDialogProps} from "@/types.ts";

export const useDialog = create<IDialogProps>((set) => ({
	isOpen: false,
	type: null,
	data: {},
	onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
	onClose: () => set({ isOpen: false, type: null, data: {} }),
	setData: (data) => set({ data }),
}));