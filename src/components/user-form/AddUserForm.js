import React, { Component, createRef } from 'react';
import {DropDown} from '../dropdown/DropDown';

genderOptions: ['Male' , 'Female', 'Others'];

class AddUserForm extends Component {

  firstNameRef = createRef();
  lastNameRef = createRef();
  emailNameRef = createRef();
  addressNameRef = createRef();
  genderNameRef = createRef();
  dobNameRef = createRef();
  phoneNameRef = createRef();




  // oktodo 1: добавить ref для address


  state = {
    warning: '',
      selectedOption: genderOptions[0],
  };



  onSubmit = (e) => {
    // oktodo 1: достать из props функцию добавления пользователя onUserAdd

    e.preventDefault();
    const {onUserAdd} = this.props;
    console.log(this.firstNameRef.current.value);
    console.log(this.lastNameRef.current.value);

    const first_name = this.firstNameRef.current.value;
    const last_name = this.lastNameRef.current.value;
    const email = this.emailNameRef.current.value;
    const address = this.addressNameRef.current.value;
    const gender = this.genderNameRef.current.value;
    const dob = this.dobNameRef.current.value;
    const phone = this.phoneNameRef.current.value;


    const pattern = /\d+/;

    if (pattern.test(first_name) || pattern.test(last_name))  {
      this.setState({
        warning: 'please don\'t put numbers '
      });
      return;
    }

    console.log(first_name, last_name, email);
    // todo 1: использовать функцию onUserAdd для создания нового пользователя здесь
    //  у этого объекта должны быть проперти first_name, last_name, address, email
        onUserAdd && onUserAdd({
            first_name, last_name, address, email , gender , dob , phone
        });
    // todo 3: зачистить форму, вызвав функцию onReset
      this.onReset();
  };

  // todo 3: добавить функцию onReset, которая будет зачищать поля формы
  //  обратите внимание, что тут нет стейта и мы обращаемся к инпутам с помощью ref
        onReset = () => {
            this.firstNameRef.current.value = '';
            this.lastNameRef.current.value = '';
            this.emailNameRef.current.value = '';
            this.addressNameRef.current.value = '';
            this.genderNameRef.current.value = '';
            this.dobNameRef.current.value = '';
            this.phoneNameRef.current.value = '';
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
        oktodo 1: добавить инпут для ввода адресса
              передать ему атрибут под название ref наш созданный в строке 8 ref
        */}
          <div className="form-group">
              <label htmlFor="lastNameInput">Address:</label>
              <input
                  ref={this.addressNameRef}
                  type="text"
                  className="form-control"
                  id="lastNameInput"
                  placeholder="Example input"
              />
          </div>

          <div className="form-group">
              <label htmlFor="genderInput">Gender:</label>
              <input
                  ref={this.genderNameRef}
                  options={this.genderOptions}
                  type="boolean"
                  className="form-control"
                  id="lastNameInput"
                  placeholder="Example input"
              />
          </div>

          <div className="form-group">
              <label htmlFor="dobInput">dob: `DD-MM-YYYY`</label>
              <input
                  ref={this.dobNameRef}
                  type="number"
                  className="form-control"
                  id="lastNameInput"
                  placeholder="Example input"
              />
          </div>

          <div className="form-group">
              <label htmlFor="phoneNameInput">Phone:</label>
              <input
                  ref={this.phoneNameRef}
                  type="number"
                  className="form-control"
                  id="lastNameInput"
                  placeholder="Example input"
              />
          </div>

        <button type='submit' className="btn btn-primary m-2">Add </button>
        <button type='button' onClick={this.focusInput}>focus</button>

          <button type='button' className="btn btn-secondary m-2" onClick={this.onReset}>Reset</button>

      {/*
      todo 3: добавить кнопку, которая по нажатию будет будет вызывать метод onReset
      */}
      </form>
    );
  }
}

export default AddUserForm;