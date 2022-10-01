import { useState } from "react";

function useTodo() {
    const [listTodo, setListTodo] = useState([])
    const [editTodo, setEditTodo] = useState({})
    const onDelete = (todo) => {
        console.log('>>>check delete todo', todo);
        const copyList = [...listTodo];
        const newListTodo = copyList.filter(item => item.id != todo.id);
        setListTodo(newListTodo);
    }

    const onEdit = (todo) => {
        console.log('>>>check edit todo', todo);
        const isEmtry = Object.keys(editTodo).length === 0;
        if (isEmtry === false && todo.id === editTodo.id) {
            const copyList = [...listTodo];
            const indexEdit = copyList.findIndex(item => item.id === todo.id)
            copyList[indexEdit].hovaten = editTodo.hovaten
            setListTodo(copyList);
            setEditTodo({});
            return;
        }
        setEditTodo(todo);
        console.log('>>edittodo', editTodo);
    };

    
    return {
        listTodo,
        setListTodo,
        editTodo,
        setEditTodo,
        onDelete,
        onEdit
    }
}

export default useTodo;
