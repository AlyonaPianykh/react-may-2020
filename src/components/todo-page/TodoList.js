import React from 'react';

export const TodoList = (props) => {
    const { todo, toggle, removeTodo, editTodo } = props;
    const { user, title, body, doneStatus, id } = todo;

    return (
        <div key={id} className="card m-2">
            <div>{title}</div>
            <div>{body}</div>
            <div>{user}</div>
            <div>
                <input type='checkbox' checked={doneStatus} onClick={toggle(todo)}/>
            </div>
            <div>is done? {doneStatus ? 'yes' : 'no'}</div>
            <button onClick={removeTodo(todo)}>remove todo</button>
            <button onClick={editTodo(todo)}>edit todo</button>
        </div>

    );

}
