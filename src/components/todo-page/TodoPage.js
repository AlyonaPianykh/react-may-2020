import React, { Component } from 'react';
import { connect } from 'react-redux';
import uniqId from 'uniqid';
import { DropDown } from '../dropdown/DropDown';
import TodoCard from '../todo-card/TodoCard';
import { accessToken } from '../../constants';

// ttodo 1: импортнуть в этом файле функцию на toggle статуса тудушки
//         подумайте какие еще шаги нужно выполнить, чтоб все заработало
import { addTodo, removeTodo, updateTodo } from '../../actions';

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
    // let response = await fetch(`https://gorest.co.in/public-api/users?access-token=${accessToken}`);
    //Отримав помилку: No 'Access-Control-Allow-Origin' header is present on the requested resource. ,
      //не зміг розібратись, змінив ресурс...

    let response = await fetch(`https://jsonplaceholder.typicode.com/users`);

    if (response.ok) {
      let json = await response.json();

      // const { result } = json;
      // if (Array.isArray(result)) {
      if (Array.isArray(json)) {
        // const usersNames = result.map(user => `${user.first_name} ${user.last_name}`);
        const usersNames = json.map(user => user.name);

        this.setState({
          users: usersNames
        });
      }}
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

  render() {
    const { todos } = this.props;
    const { users, user, title, body, doneStatus, isEditMode } = this.state;

    return (
      <div>
        Add todo_ form
        <div className="d-flex flex-column m-2">
          <input className="m-2" value={title} onChange={this.onTitleChange} />
          <textarea className="m-2" value={body} onChange={this.onBodyChange} />

          <DropDown className="m-2" options={users} selectedOption={user} onSelect={this.onUserSelect} />

          <div>
            <input type="checkbox" onChange={this.onStatusChange} checked={doneStatus} />
            <span className="m-1">done?</span>
          </div>
          <div className="d-flex">
            {!isEditMode && <button className="btn btn-success m-2" onClick={this.addTodo}>Add todo_</button> }
            {isEditMode && <button className="btn btn-primary m-2" onClick={this.updateTodo}>Update todo_</button>}
          </div>
        </div>

        <div className="m-2 d-flex">

          {todos.map(todo => {
              return (
                  <TodoCard key={todo.id} todo={todo} editTodo={this.editTodo}/>
              );
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
//     addTodo: (todo_) => dispatch(addTodo(todo_)),
//     removeTodo: (todo_) => dispatch(removeTodo(todo_))
//   };
// };

const mapDispatchToProps = ({
  addTodo,
  removeTodo,
  updateTodo
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);