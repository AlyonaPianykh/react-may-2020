import React from "react";
import {toggleStatusTodo} from "../../actions";

export const TodoItem = (props) => {
    const {removeTodo, editTodo, todo, toggleStatusTodo} = props;
    const { user, title, body, doneStatus, id } = todo;

    return (
        <div key={id} className="card m-2">
            <div>{title}</div>
            <div>{body}</div>
            <div>{user}</div>
            <div>
                <input type="checkbox" onChange={toggleStatusTodo(todo)} checked={doneStatus}/>
            </div>
            <div>is done? {doneStatus ? 'yes' : 'no'}</div>
            <button onClick={removeTodo(todo)}>remove todo</button>
            <button onClick={editTodo(todo)}>edit todo</button>
        </div>
    )
}