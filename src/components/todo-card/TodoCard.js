import React, {Component} from 'react';
import { removeTodo, toggleStatusToDo} from "../../actions";
import {connect} from "react-redux";

class TodoCard extends Component {

    removeTodo = (todo) => {
        const { removeTodo } = this.props;
        return () => {
            removeTodo && removeTodo(todo);
        };
    };

    toggleStatusToDo = (todo) => {
        const { toggleStatusToDo } = this.props;
        return () => {
            toggleStatusToDo && toggleStatusToDo(todo);
        };
    };

    render() {
        const { todo,
                editTodo,
                todo:{user, title, body, doneStatus} } = this.props;

        return (
            <div className="card m-2">
                <div>{title}</div>
                <div>{body}</div>
                <div>{user}</div>
                {/*// ttodo 1: вместо div со статусом  показывать чекбокс
                         при нажатии на чекбокс в сторе должен поменяться статус этой тудушки на противоположное значение
                  */}
                <div>
                    <input type='checkbox' checked={doneStatus} onChange={this.toggleStatusToDo(todo)}/>
                    <span>{doneStatus ? 'done' : 'not done'}</span>
                </div>

                <button className='btn btn-outline-warning m-3'onClick={editTodo(todo)}>edit todo_</button>
                <button className='btn btn-outline-danger m-3' onClick={this.removeTodo(todo)}>remove todo_</button>
            </div>
        );
    }
}
const mapStateToProps = (store) => {
    const { todoReducer: { todos } } = store;
    return {
        todos
    };
};

const mapDispatchToProps = ({
    removeTodo,
    toggleStatusToDo
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoCard);