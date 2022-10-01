import { useContext, useState } from "react";
import CreateTodo from "./CreateTodo";
import { TodoContext } from "./hook/useContext";
import './TodoApp.css';

function TodoApp() {
    const {
        editTodo,
        listTodo,
        setEditTodo,
        onEdit,
        onDelete
    } = useContext(TodoContext);

    const isEmtry = Object.keys(editTodo).length === 0;
    console.log('isEmtry', isEmtry);
    
    return (
        <div>
            <CreateTodo />
            {listTodo.map((item, index) => {
                return (
                    <div key={item.id} className="todo-content">
                        {isEmtry === true ?
                            <p className="todo-children">{index + 1} - {item.hovaten}</p>
                        :
                            <div>
                                {isEmtry === false && item.id === editTodo.id ?
                                    <p>{index + 1} - <input type="text" value={editTodo.hovaten}
                                        onChange={(event) => {
                                            const newEditTodo = {
                                                ...editTodo,
                                                hovaten:event.target.value
                                            }
                                            setEditTodo(newEditTodo);
                                        }}/>
                                    </p>
                                :
                                    <p className="todo-children">{index + 1} - {item.hovaten}</p>
                                }
                                
                            </div>    
                    }
                        <div className="btn btn-all">
                            <button 
                                className="btn btn-edit"
                                onClick={() => onEdit(item)}
                            >{isEmtry === false && item.id === editTodo.id ? "Save" : "Edit"}</button>
                            <button 
                                className="btn btn-delete"
                                onClick={() => onDelete(item)}
                            >Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoApp;
