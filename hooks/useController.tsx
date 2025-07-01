import { ToDoItem, useControlledProps } from "../types";

export default function useController({ list, setList, item, setItem, isChecked, setIsChecked  }: useControlledProps) {
    const handleAddItem = () => {
        if (!item.trim()) {
            alert("Vui lòng nhập nội dung");
            return;
        }
        const newItem: ToDoItem = {
            id: Date.now().toString(),
            text: item,
            isChecked: false,
        };
        // luôn là danh sách mới nhất
        setList((prevList) => [...prevList, newItem]);
        setItem("");
    };

    const handleCheckItem = (itemId: string) => {
        setList(
            list.map((todo) =>
                todo.id === itemId ? { ...todo, isChecked: !todo.isChecked } : todo
            )
        );
    };

    const handleRemoveItem = (itemId: string) => {
        setList(list.filter((i) => i.id !== itemId));
    };

    return { handleAddItem, handleCheckItem, handleRemoveItem };
}
