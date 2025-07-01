export type ToDoItem = {
    id: string;
    text: string;
    isChecked: boolean;
}

export type InputComponentProps = {
    title:string;
    item: string;
    setItem: (text: string) => void;
};

export type SingleButtonProps = {
    title: string;
    onPress: () => void;
};
export type ListProps = {
    list: ToDoItem[];
};

export type SingleLineProps = {
    id: string;
    text: string;
    isChecked: boolean;
    onCheck: (id: string) => void;
    onDelete: (id: string) => void;
};

