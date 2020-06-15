import React from 'react';

export const TodoCard = props => {
    const {todo, removeTodo, editTodo, toggleStatusTodo} = props;
    const {user, title, body, doneStatus} = todo;
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{user}</h6>
                <p className="card-text">{body}</p>
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <div className="m-1">
                    Is done? {doneStatus ? 'yes' : 'no'}
                </div>
                <div>
                    <input type="checkbox" onChange={toggleStatusTodo(todo)} checked={doneStatus}/>
                </div>
            </div>
            <button onClick={removeTodo(todo)}>remove to-do</button>
            <button onClick={editTodo(todo)}>edit to-do</button>
        </div>
    );
}