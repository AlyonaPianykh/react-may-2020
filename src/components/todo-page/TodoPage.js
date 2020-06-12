import React, { Component } from 'react';
import { connect } from 'react-redux';
import uniqId from 'uniqid';
import { DropDown } from '../dropdown/DropDown';
import { accessToken } from '../../constants';
import {TodoItem} from "./TodoItem";

// dtodo 1: импортнуть в этом файле функцию на toggle статуса тудушки
//         подумайте какие еще шаги нужно выполнить, чтоб все заработало
import { addTodo, removeTodo, updateTodo, toggleDoneStatusTodo } from '../../actions';

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
      let json = await response.json()
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
      id: '',
      isEditMode: false
    });
  }

  removeTodo = (todo) => {
    const { removeTodo } = this.props;

    return () => {
      // debugger
      removeTodo && removeTodo(todo);
    };
  };

  editTodo = (todo) => {
    console.log(todo);
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

  toggleDoneStatusTodo = (todo) => {
    const { toggleDoneStatusTodo } = this.props;
    return () => {
      toggleDoneStatusTodo && toggleDoneStatusTodo(todo);
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
              return (
                  <TodoItem key={todo.id}
                            todo={todo}
                            toggleDoneStatusTodo={this.toggleDoneStatusTodo}
                            removeTodo={this.removeTodo}
                            editTodo={this.editTodo}/>
              );
            })
          }

          {
            //------------------------------------
            // todos.map(todo => {
            //   const { user, title, body, doneStatus, id } = todo;
            //   return (
            //     <div key={id} className="card m-2">
            //       <div>{title}</div>
            //       <div>{body}</div>
            //       <div>{user}</div>
            //       {/*// dtodo 1: вместо div со статусом  показывать чекбокс
            //              при нажатии на чекбокс в сторе должен поменяться статус этой тудушки на противоположное значение
            //       */}
            //       <div>
            //         <input type="checkbox" onChange={this.toggleDoneStatusTodo(todo)} checked={doneStatus} />
            //       </div>
            //       <div>is done? {doneStatus ? 'yes' : 'no'}</div>
            //       <button onClick={this.removeTodo(todo)}>remove todo</button>
            //       <button onClick={this.editTodo(todo)}>edit todo</button>
            //       <TodoItem />
            //     </div>
            //   );
            // })
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
  toggleDoneStatusTodo
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);