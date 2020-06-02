import React, { Component, createRef } from 'react';

class AddUserForm extends Component {

  firstNameRef = createRef();
  lastNameRef = createRef();
  genderRef = createRef();
  dobRef = createRef();
  phoneRef = createRef();
  websiteRef = createRef();
  _linksRef = createRef();
  emailNameRef = createRef();
  addressRef = createRef();
  // donetodo 1: добавить ref для address

  state = {
    warning: ''
  };

  onSubmit = (e) => {
    // donetodo 1: достать из props функцию добавления пользователя onUserAdd
    const {onUserAdd} = this.props;
    e.preventDefault();

    console.log(this.firstNameRef.current.value);
    console.log(this.lastNameRef.current.value);

    const firstName = this.firstNameRef.current.value;
    const lastName = this.lastNameRef.current.value;
    const gender = this.genderRef.current.value;
    const dob = this.dobRef.current.value;
    const phone = this.phoneRef.current.value;
    const website = this.websiteRef.current.value;
    const _links = this._linksRef.current.value;
    const email = this.addressRef.current.value;
    const address = this.addressRef.current.value;

    const pattern = /\d+/;

    if (pattern.test(firstName) || pattern.test(lastName)) {
      this.setState({
        warning: 'please don\'t put numbers '
      });
      return;
    }

    console.log(firstName, lastName, email);


    // donetodo 1: использовать функцию onUserAdd для создания нового пользователя здесь
    //  у этого объекта должны быть проперти first_name, last_name, address, email
    onUserAdd(firstName, lastName, gender, dob, phone, website, _links, address, email);

    // donetodo 3: зачистить форму, вызвав функцию onReset
    this.onReset();

  };

  // donetodo 3: добавить функцию onReset, которая будет зачищать поля формы
  //  обратите внимание, что тут нет стейта и мы обращаемся к инпутам с помощью ref

  onReset = () => {
    this.firstNameRef.current.value = '';
    this.lastNameRef.current.value = '';
    this.genderRef.current.value = '';
    this.dobRef.current.value = '';
    this.phoneRef.current.value = '';
    this.websiteRef.current.value = '';
    this.addressRef.current.value = '';
    this.emailNameRef.current.value = '';
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
            placeholder="Type in your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastNameInput">Last name:</label>
          <input
            ref={this.lastNameRef}
            type="text"
            className="form-control"
            id="lastNameInput"
            placeholder="Type in your last name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastNameInput">Gender:</label>
          <input
              ref={this.genderRef}
              type="text"
              className="form-control"
              id="lastNameInput"
              placeholder="Type in your gender"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastNameInput">Date of birth:</label>
          <input
              ref={this.dobRef}
              type="text"
              className="form-control"
              id="lastNameInput"
              placeholder="Type in your date of birth"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastNameInput">Phone:</label>
          <input
              ref={this.phoneRef}
              type="text"
              className="form-control"
              id="lastNameInput"
              placeholder="Type in your phone"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastNameInput">Website:</label>
          <input
              ref={this.websiteRef}
              type="text"
              className="form-control"
              id="lastNameInput"
              placeholder="Type in your website"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastNameInput">Address:</label>
          <input
            ref={this.addressRef}
            type="text"
            className="form-control"
            id="lastNameInput"
            placeholder="Type in your address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastNameInput">Email:</label>
          <input
              ref={this.emailNameRef}
              type="text"
              className="form-control"
              id="lastNameInput"
              placeholder="Type in your email"
          />
        </div>

        {/*
        donetodo 1: добавить инпут для ввода адресса
              передать ему атрибут под название ref наш созданный в строке 8 ref
        */}

        <button type='submit' className="btn btn-primary m-2">Add</button>
        <button type='button' className="btn btn-secondary m-2" onClick={this.focusInput}>Focus</button>
        <button type='button' className="btn btn-secondary m-2" onClick={this.onReset}>Reset</button>
      {/*
      dinetodo 3: добавить кнопку, которая по нажатию будет будет вызывать метод onReset
      */}
      </form>
    );
  }
}

export default AddUserForm;