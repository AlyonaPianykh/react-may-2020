import React from 'react';
import './TodoCard.scss';

function TodoCard(props) {
    const {todo, removeTodo, editTodo, toggleTodo} = props;

    if (!todo) return null;

    const clickRemove = () => {
        removeTodo()
    };
    const clickEdit = () => {
        editTodo()
    };
    const clickChekBox = ({target: {checked}}) => {
        toggleTodo()
    };

    const {user, title, body, doneStatus, id} = todo;
    return (
        <div key={id} className="card m-2">
            <div>{title}</div>
            <div>{body}</div>
            <div>{user}</div>
            {/*// dtodo 1: вместо div со статусом  показывать чекбокс
                         при нажатии на чекбокс в сторе должен поменяться статус этой тудушки на противоположное значение
                  */}
            <div>is done? <input type="checkbox" checked={doneStatus} onChange={clickChekBox}/></div>
            <button onClick={clickRemove}>remove my_Todo</button>
            <button onClick={clickEdit}>edit my_Todo</button>
        </div>
    );
}

export default TodoCard;