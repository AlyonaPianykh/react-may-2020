import React, { Component, createRef } from 'react';

class AddUserForm extends Component {

  firstNameRef = createRef();
  lastNameRef = createRef();
  emailNameRef = createRef();
  // todo 1: добавить ref для address
  addressRef = createRef();

  state = {
    warning: ''
  };

  onSubmit = (e) => {
    // todo 1: достать из props функцию добавления пользователя onUserAdd
    e.preventDefault();
    const { onUserAdd } = this.props;
    console.log(this.firstNameRef.current.value);
    console.log(this.lastNameRef.current.value);

    const firstName = this.firstNameRef.current.value;
    const lastName = this.lastNameRef.current.value;
    const email = this.emailNameRef.current.value;
    const address = this.addressRef.current.value;
    const pattern = /\d+/;

    if (pattern.test(firstName) || pattern.test(lastName))  {
      this.setState({
        warning: 'please don\'t put numbers '
      });
      return;
    }

    // todo 1: использовать функцию onUserAdd для создания нового пользователя здесь
    //  у этого объекта должны быть проперти first_name, last_name, address, email
    onUserAdd && onUserAdd({
      first_name: firstName, last_name: lastName, address, email
    })
    // todo 3: зачистить форму, вызвав функцию onReset
  };

  // todo 3: добавить функцию onReset, которая будет зачищать поля формы
  //  обратите внимание, что тут нет стейта и мы обращаемся к инпутам с помощью ref
 onReset = () => {
 this.firstNameRef.current.value = '';
   this.lastNameRef.current.value = '';
   this.emailNameRef.current.value = '';
   this.addressRef.current.value = '';
 };
  focusInput = () => {
    console.log('focused');
    this.lastNameRef.current.focus()
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {!!this.state.warning && <div>{this.state.warning}</div>}
        <div className="form-group">
          <label htmlFor="firstNameInput">First name:</label>
          <input
            ref={this.firstNameRef}
            type="text"
            className="form-control"
            id="firstNameInput"
            placeholder="Example input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastNameInput">Last name:</label>
          <input
            ref={this.lastNameRef}
            type="text"
            className="form-control"
            id="lastNameInput"
            placeholder="Example input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastNameInput">Email:</label>
          <input
            ref={this.emailNameRef}
            type="text"
            className="form-control"
            id="lastNameInput"
            placeholder="Example input"
          />
        </div>

        {/*
        todo 1: добавить инпут для ввода адресса
              передать ему атрибут под название ref наш созданный в строке 8 ref
        */}
        <div className="form-group">
          <label htmlFor="addressInput">Address:</label>
          <input
              ref={this.addressRef}
              type="text"
              className="form-control"
              id="lastNameInput"
              placeholder="Example input"
          />
        </div>

        <button type='submit' className="btn btn-primary m-2">Add </button>
        <button type='button' onClick={this.focusInput}>focus</button>

      {/*
      todo 3: добавить кнопку, которая по нажатию будет будет вызывать метод onReset
      */}
        <button type='button' onClick={this.onReset}>reset</button>
      </form>
    );
  }
}

export default AddUserForm;