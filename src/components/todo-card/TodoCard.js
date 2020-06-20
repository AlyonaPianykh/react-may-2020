import React from 'react';
import './TodoCard.scss';

function TodoCard(props) {
    const { todo,removeTodo,editTodo,to } = props;

        if (!todo) return null;
        const clickRemove=() =>{
            removeTodo()
        }
    const clickEdit=( ) =>{
        editTodo()
    }
const clickCheckBox=( {target :{checked}}) =>{
    console.log(checked);

}

    const { user, title, body, doneStatus, id } = todo;
    return (
        <div key={id} className="card m-2">
            <div>{title}</div>
            <div>{body}</div>
            <div>{user}</div>
            {/*// todo 1: вместо div со статусом  показывать чекбокс
                         при нажатии на чекбокс в сторе должен поменяться статус этой тудушки на противоположное значение
                  */}
            <div>is done? <input type='checkbox' checked={doneStatus} onChange={clickCheckBox}/></div>
            <button onClick={clickRemove}>remove my_todo</button>
            <button onClick={clickEdit}>edit my_todo</button>
        </div>
    );
}

export default  TodoCard ;