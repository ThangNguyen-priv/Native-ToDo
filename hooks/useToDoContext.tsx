import { createContext, useContext } from "react";

import { ToDoContextTypes } from "../types/hooks/hook.type";

const ToDoContext = createContext<ToDoContextTypes | undefined>(undefined);

function useToDoContext() {
    const context = useContext(ToDoContext);
    if (!context) {
        throw new Error("useToDoContext must be used within a ToDoContext Provider");
    }
    return context;
}
export { ToDoContext, useToDoContext };
