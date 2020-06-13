import React from 'react';

export const TodoItem = (props) => {
    const { todo, toggleDoneStatusTodo, removeTodo, editTodo } = props;
    const { user, title, body, doneStatus, id } = todo;

    return (
        <div key={id} className="card m-2">
            <div>{title}</div>
            <div>{body}</div>
            <div>{user}</div>
            {/*// dtodo 1: вместо div со статусом  показывать чекбокс
                 при нажатии на чекбокс в сторе должен поменяться статус этой тудушки на противоположное значение
          */}
            <div>
                <input type="checkbox" onChange={toggleDoneStatusTodo(todo)} checked={doneStatus} />
            </div>
            <div>is done? {doneStatus ? 'yes' : 'no'}</div>
            <button onClick={removeTodo(todo)}>remove todo</button>
            <button onClick={editTodo(todo)}>edit todo</button>
        </div>
    );

}