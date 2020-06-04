import React, { Component, createRef } from 'react';

class AddUserForm extends Component {

  firstNameRef = createRef();
  lastNameRef = createRef();
  emailRef = createRef();
  addressRef = createRef();
  // donetodo 1: добавить ref для address


  state = {
    warning: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    // donetodo 1: достать из props функцию добавления пользователя onUserAdd
    const {onUserAdd} = this.props;

    //получить текущие значения полей input
    const first_name = this.firstNameRef.current.value; //текущее значение input с атрибутом ref={this.firstNameRef}
    const last_name = this.lastNameRef.current.value;
    const email = this.emailRef.current.value;
    const address = this.addressRef.current.value;
    // console.log(first_name, last_name, email, address);

    const pattern = /\d+/;

    if (pattern.test(first_name) || pattern.test(last_name))  {
      this.setState({
        warning: 'please don\'t put numbers '
      });
      return;
    }

    // donetodo 1: использовать функцию onUserAdd для создания нового пользователя здесь
    //  у этого объекта должны быть проперти first_name, last_name, address, email
      const newUser = {
        first_name,
        last_name,
        email,
        address
      };

      if (!first_name.trim() || !last_name.trim() || !email.trim() || !address.trim()) return;

      onUserAdd && onUserAdd(newUser);
      // dtodo 3: зачистить форму, вызвав функцию onReset
      this.onReset();
  };

  // dtodo 3: добавить функцию onReset, которая будет зачищать поля формы
  //  обратите внимание, что тут нет стейта и мы обращаемся к инпутам с помощью ref
  onReset = () => {
    this.firstNameRef.current.value = '';
    this.lastNameRef.current.value = '';
    this.emailRef.current.value = '';
    this.addressRef.current.value = '';
  }

  //set focus input lastName
  // focusInput = () => {
  //   console.log('focused');
  //   this.lastNameRef.current.focus();
  // };

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
            placeholder="First name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastNameInput">Last name:</label>
          <input
            ref={this.lastNameRef}
            type="text"
            className="form-control"
            id="lastNameInput"
            placeholder="Last name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastNameInput">Email:</label>
          <input
            ref={this.emailRef}
            type="text"
            className="form-control"
            id="lastNameInput"
            placeholder="Email"
          />
        </div>

        {/*
        donetodo 1: добавить инпут для ввода адресса
              передать ему атрибут под название ref наш созданный в строке 8 ref
        */}

        <div className="form-group">
          <label htmlFor="addressInput">Address:</label>
          <input
              ref={this.addressRef}
              type="text"
              className="form-control"
              id="addressInput"
              placeholder="Address"
          />
        </div>

        <button type='submit' className="btn btn-primary m-2">Add </button>
        {/*<button type='button' onClick={this.focusInput}>focus</button>*/}

      {/*
      dtodo 3: добавить кнопку, которая по нажатию будет будет вызывать метод onReset
      */}
        <button type='button' className="btn btn-primary m-2" onClick={this.onReset}>Reset</button>
      </form>
    );
  }
}

export default AddUserForm;