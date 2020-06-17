import React from 'react';

export function TodoUserCard(props) {
    const {todo, removeTodo, editTodo, toggleTodo} = props;
    const { user, title, body, doneStatus, id } = todo;

    return (
        <div key={id} className="card m-2">
            <div>{title}</div>
            <div>{body}</div>
            <div>{user}</div>
            {/*// dtodo 1: вместо div со статусом  показывать чекбокс
                         при нажатии на чекбокс в сторе должен поменяться статус этой тудушки на противоположное значение
                  */}
            <div>is done? <input type={'checkbox'} checked={doneStatus} onChange={toggleTodo}/></div>
            <button onClick={removeTodo}>remove todo</button>
            <button onClick={editTodo}>edit todo</button>
        </div>
    );
}
export default TodoUserCard