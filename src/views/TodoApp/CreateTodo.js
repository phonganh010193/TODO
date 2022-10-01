import { useContext, useState } from "react";
import { TodoContext } from "./hook/useContext";

function CreateTodo(props) {
    const {
        hovaten,
        setHoVaTen,
        listTodo,
        setListTodo
    } = useContext(TodoContext);
    return (
        <div>
            <input 
                type={"text"}
                placeholder="Nhap ten"
                value={hovaten}
                onChange={(event) => {
                    setHoVaTen(event.target.value);
                }}
            />
            <button
                className="btn btn-add"
                onClick={(event) => {
                    event.preventDefault();
                    if(!hovaten) {
                        alert('Missing name...!')
                        return;
                    }
                    const object = {
                        id:Math.floor(Math.random() * 1000),
                        hovaten
                    };
                    const copyList = [...listTodo];
                    copyList.push(object);
                    setListTodo(copyList);
                    console.log('listtodo', listTodo);
                    setHoVaTen('');
                    
                }}
            >Add</button>
        </div>
    );
}

export default CreateTodo;
