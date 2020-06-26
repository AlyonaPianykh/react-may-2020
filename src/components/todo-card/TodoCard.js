import React from "react";

export function TodoCard({todo, removeTodo, editTodo, toggleTodo}) {
    const {body, title, user, doneStatus} = todo;

    return (
        <div>
            <div className="card m-2">
                <div>{title}</div>
                <div>{body}</div>
                <div>{user}</div>
                {/*// dtodo 1: вместо div со статусом  показывать чекбокс
                         при нажатии на чекбокс в сторе должен поменяться статус этой тудушки на противоположное значение
                  */}
                <input type="checkbox" checked={doneStatus} onChange={toggleTodo(todo.id)}  className="m-2"/>
                <button onClick={removeTodo(todo)}>remove todo</button>
                <button onClick={editTodo(todo)}>edit todo</button>
            </div>
        </div>
    );
}