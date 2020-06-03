import React, { Component, createRef } from 'react';

class AddUserForm extends Component {

  firstNameRef = createRef();
  lastNameRef = createRef();
  emailNameRef = createRef();
  addressRef = createRef();


  state = {
    warning: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { onUserAdd } = this.props;

    console.log(this.firstNameRef.current.value);
    console.log(this.lastNameRef.current.value);

    const firstName = this.firstNameRef.current.value;
    const lastName = this.lastNameRef.current.value;
    const email = this.lastNameRef.current.value;
    const address = this.addressRef.current.value;

    const pattern = /\d+/;

    if (pattern.test(firstName) || pattern.test(lastName))  {
      this.setState({
        warning: 'please don\'t put numbers '
      });
      return;
    }

    console.log(firstName, lastName, email);
    onUserAdd && onUserAdd({
      first_name: firstName,
      last_name: lastName,
      email,
      address
    });

    this.onReset();
  };

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

        <div className="form-group">
          <label htmlFor="addressInput">Address:</label>
          <input
            ref={this.addressRef}
            type="text"
            className="form-control"
            id="addressInput"
            placeholder="Example input"
          />
        </div>

        <button type="button" className="btn btn-secondary m-2">reset</button>
        <button type='submit'>Click me</button>
        <button type='button' className="btn btn-primary m-2" onClick={this.focusInput}>focus</button>
      </form>
    );
  }
}

export default AddUserForm;