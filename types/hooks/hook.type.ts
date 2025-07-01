import { ToDoItem } from "../common/component.type";

export type ToDoContextTypes = {
    onCheck: (item: string) => void;
    onDelete: (item: string) => void;
};

export type ToDoProviderProps = {
    children: React.ReactNode;
};

export interface useControlledProps {
    list: ToDoItem[];
    setList: React.Dispatch<React.SetStateAction<ToDoItem[]>>;
    item: string;
    setItem: React.Dispatch<React.SetStateAction<string>>;
    isChecked: boolean;
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}