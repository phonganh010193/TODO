import { createContext, useState } from "react";
import useTodo from "./useTodo";

export const TodoContext = createContext({
    listTodo: [],
    editTodo: {},
    hovaten: '',
    setListTodo: (data) => {},
    setEditTodo: (data) => {},
    onEdit: (data) => {},
    onDelete: (data) => {},
    setHoVaTen: (data) => {}
    
});

function TodoContextProvider({children}) {
    const [hovaten, setHoVaTen] = useState("Pham van Phong");
    const {
        listTodo,
        setListTodo,
        editTodo,
        setEditTodo,
        onEdit,
        onDelete
    } = useTodo()
    const value = {
        listTodo,
        setListTodo,
        editTodo,
        setEditTodo,
        onEdit,
        onDelete,
        hovaten,
        setHoVaTen
    }
    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;
