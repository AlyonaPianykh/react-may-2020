import React from 'react';

function TodoCard(props) {
    const { todo, removeTodo, editTodo, toggleTodo} = props;

    if (!todo) return null;

    const buttonRemove = () =>
    {
        removeTodo();
    }

    const buttonEdit = () =>
    {
        editTodo();
    }

    const onChangeClick = ({target: {checked}}) =>
    {
        toggleTodo();
    }

    const { user, title, body, doneStatus, id } = todo;
    return (
        <div key={id} className="card m-2">
            <div>{title}</div>
            <div>{body}</div>
            <div>{user}</div>
            <div>is done? <input type="checked" value={doneStatus} onChange={onChangeClick}/></div>
            <button onClick={buttonRemove}>remove _todo</button>
            <button onClick={buttonEdit}>edit _todo</button>
        </div>
    );
}

export default TodoCard;