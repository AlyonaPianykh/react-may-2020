import React, { Component } from 'react';

import './AddPostForm.scss';

class PostForm extends Component {
  state = {
    title: '',
    body: '',
    user_id: this.props.users[1].id
  };

  onTitleChange = (event) => {
    const title = event.target.value;

    this.setState({
      title
    });
  };

  onBodyChange = (event) => {
    const body = event.target.value;

    if (/\d+/.test(body)) {
      this.setState({
        warning: 'please don\'t put numbers '
      });
      return;
    }

    this.setState({
      body,
      warning: ''
    });
  };

  onUserSelect = (event) => {
    console.log(event.target.value);
    const selectedIndex = event.target.selectedIndex;

    this.setState((prevState, props) => {
      return {
        user_id: props.users[selectedIndex].id
      };
    });

    // another way:
    // const {users} = this.props;
    // this.setState({
    //   user_id: users[selectedIndex].id
    // });
  };

  // tod 2: добавить функцию onReset которая будет очищать форму
  //  подумайте как лучше сделать зачистку данных, если они хранятся  в стейте
  onReset = ()=> {
    this.setState({
      title: '',
      body: '',
    })
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { onAddPost } = this.props;
    const { title, body, user_id } = this.state;
    if (!title.trim() || !body.trim()) return;
    const newPost = {
      title,
      body,
      user_id
    };

    onAddPost && onAddPost(newPost);

    // tod 2: добавить очистку формы с помощью вызова функции onReset
    this.onReset();
  };

  renderUsersSelect = () => {
    const { users } = this.props;
    const { user_id } = this.state;

    const selectedUser = users.find(item => item.id === user_id);
    const selectedFullName = `${selectedUser.first_name} ${selectedUser.last_name}`;

    return (
      <select value={selectedFullName} onChange={this.onUserSelect}>
        {
          users.map(user => {
            const fullName = `${user.first_name} ${user.last_name}`;

            return (
              <option key={user.id} value={fullName}>{fullName}</option>
            );
          })
        }
      </select>
    );
  };

  render() {
    const { title, body, user_id, warning } = this.state;

    return (
      <form className="may-add-post-form" onSubmit={this.onSubmit}>
        {!!warning && <div>{warning}</div>}

        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Example label</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Example input"
            value={title}
            onChange={this.onTitleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Example label</label>
          <textarea
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Example input"
            value={body}
            onChange={this.onBodyChange}
          />
        </div>

        {
          this.renderUsersSelect()
        }
        {/* tod 2: добавить кнопку, по нажатию на которую будет вызываться метод onReset*/}
        <button onClick={this.onReset}>reset</button>
        <div className="m-2">
          <button type="submit" className="btn btn-primary m-2">Add post</button>
        </div>
      </form>
    );
  }
}

export default PostForm;