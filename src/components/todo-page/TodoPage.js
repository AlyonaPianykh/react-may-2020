import React, { Component } from 'react';
import { connect } from 'react-redux';
import uniqId from 'uniqid';
import { DropDown } from '../dropdown/DropDown';
import { accessToken } from '../../constants';
import {TodoCard} from "../todo-card/TodoCard";
// d_todo 1: импортнуть в этом файле функцию на toggle статуса тудушки
//         подумайте какие еще шаги нужно выполнить, чтоб все заработало
import { addTodo, removeTodo, updateTodo, toggleStatusTodo} from '../../actions';

class TodoPage extends Component {
  state = {
    users: [], // ['John Smith', 'Jack Sparrow']
    user: '',
    title: '',
    body: '',
    doneStatus: false,
    isEditMode: false
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = async () => {
    let response = await fetch(`https://gorest.co.in/public-api/users?access-token=${accessToken}`);

    if (response.ok) {
      let json = await response.json();

      const { result } = json;

      if (Array.isArray(result)) {
        const usersNames = result.map(user => `${user.first_name} ${user.last_name}`);

        this.setState({
          users: usersNames
        });
      }
    }
  };

  onBodyChange = (event) => {
    const body = event.target.value;

    this.setState({
      body
    });
  };

  onTitleChange = (event) => {
    const title = event.target.value;

    this.setState({
      title
    });
  };

  onUserSelect = (userName) => {
    this.setState({
      user: userName
    });
  };

  onStatusChange = (event) => {
    this.setState({
      doneStatus: event.target.checked
    });
  };

  addTodo = () => {
    const { user, title, body, doneStatus } = this.state;
    const { addTodo } = this.props;

    const newTodo = {
      id: uniqId(),
      user,
      title,
      body,
      doneStatus
    };
    addTodo && addTodo(newTodo);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      user: '',
      title: '',
      body: '',
      doneStatus: false,
      id: ''
    });
  }

  removeTodo = (todo) => {
    const { removeTodo } = this.props;

    return () => {
      debugger
      removeTodo && removeTodo(todo);
    };
  };

  editTodo = (todo) => {
    return () => {
      this.setState({
        isEditMode: true,
        ...todo
      });
    };
  };

  updateTodo = () => {
    const { updateTodo } = this.props;
    const { user, title, body, doneStatus, id } = this.state;

    updateTodo && updateTodo({
      user,
      title,
      body,
      doneStatus,
      id
    });
    this.resetForm();
  };

  toggleStatusTodo = (todo) => {
    const {toggleStatusTodo} = this.props
    return () => {
      toggleStatusTodo && toggleStatusTodo(todo);
    }
  };

  render() {
    const { todos } = this.props;
    const { users, user, title, body, doneStatus, isEditMode } = this.state;

    return (
      <div>
        Add todo form
        <div className="d-flex flex-column m-2">
          <input className="m-2" value={title} onChange={this.onTitleChange} />
          <textarea className="m-2" value={body} onChange={this.onBodyChange} />

          <DropDown className="m-2" options={users} selectedOption={user} onSelect={this.onUserSelect} />

          <div>
            <input type="checkbox" onChange={this.onStatusChange} checked={doneStatus} />
            <span className="m-1">done?</span>
          </div>
          <div className="d-flex">
            {!isEditMode && <button className="btn btn-primary m-2" onClick={this.addTodo}>Add todo</button> }
            {isEditMode && <button className="btn btn-primary m-2" onClick={this.updateTodo}>Update todo</button>}
          </div>
        </div>

        <div className="m-2 d-flex">
          {
            todos.map(todo => {
              return <TodoCard
                  todo={todo}
                  key={todo.id}
                  removeTodo={this.removeTodo}
                  editTodo={this.editTodo}
                  toggleStatusTodo={this.toggleStatusTodo}
              />
            })
          }
        </div>

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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTodo: (todo) => dispatch(addTodo(todo)),
//     removeTodo: (todo) => dispatch(removeTodo(todo))
//   };
// };

const mapDispatchToProps = ({
  addTodo,
  removeTodo,
  updateTodo,
  toggleStatusTodo
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);