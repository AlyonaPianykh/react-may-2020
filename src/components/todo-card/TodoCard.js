import React, {Component} from 'react';

class TodoCard extends Component {

    onTodoStatusChange = (event) => {
        const { todo, toggleTodo } = this.props;

        this.setState({
            doneStatus: event.target.checked
        });

        toggleTodo(todo.id, event.target.checked);
    };
    render() {
        const { todo, removeTodo, editTodo} = this.props;

        return (
            <div key={todo.id} className="card m-2">
                <div>{todo.title}</div>
                <div>{todo.body}</div>
                <div>{todo.user}</div>
                {/*// 1: вместо div со статусом  показывать чекбокс
                         при нажатии на чекбокс в сторе должен поменяться статус этой тудушки на противоположное значение
                  */}
                <div>is done? {todo.doneStatus ? 'yes - ' : 'no - '}
                    <input type="checkbox" checked={todo.doneStatus} onChange={this.onTodoStatusChange} />
                </div>
                <button onClick={removeTodo(todo)}>remove todo</button>
                <button onClick={editTodo(todo)}>edit todo</button>
            </div>
        );
    }
}

export default TodoCard;