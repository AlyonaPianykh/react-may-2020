import React, { Component, createRef } from 'react';

class AddUserForm extends Component {

  firstNameRef = createRef();
  lastNameRef = createRef();
  emailNameRef = createRef();
  // todo 1: добавить ref для address
  addressNameRef = createRef();
  dobNameRef = createRef();
  phoneNameRef = createRef();





  state = {
    warning: '',
      selected: 'male'
  };

  onSubmit = (e) => {
   const {onUserAdd} =  this.props;
   const {selected} = this.state;
    // todo 1: достать из props функцию добавления пользователя onUserAdd
    e.preventDefault();

    console.log(this.firstNameRef.current.value);
    console.log(this.lastNameRef.current.value);

    const firstName = this.firstNameRef.current.value;
    const lastName = this.lastNameRef.current.value;
    const email = this.emailNameRef.current.value;
    const address = this.addressNameRef.current.value;
    const dob = this.dobNameRef.current.value;
    const phone = this.phoneNameRef.current.value;



    const pattern = /\d+/;

      if (pattern.test(firstName) || pattern.test(lastName))  {
      this.setState({
        warning: 'please don\'t put numbers '
      });
      return;
    }

    console.log(firstName, lastName, email);
    // todo 1: использовать функцию onUserAdd для создания нового пользователя здесь
    //  у этого объекта должны быть проперти first_name, last_name, address, email

      const newUser = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        address: address,
          _links: { avatar: {href:''} },
         dob: dob,
         phone: phone,
         gender: selected
      };
      onUserAdd && onUserAdd(newUser);

      this.onReset()
    // todo 3: зачистить форму, вызвав функцию onReset
  };

  onReset = ()=>{
    this.firstNameRef.current.value = '';
    this.lastNameRef.current.value = '';
    this.emailNameRef.current.value = '';
    this.addressNameRef.current.value = '';
    this.dobNameRef.current.value = '';
    this.phoneNameRef.current.value = '';
  };


  // todo 3: добавить функцию onReset, которая будет зачищать поля формы
  //  обратите внимание, что тут нет стейта и мы обращаемся к инпутам с помощью ref

  focusInput = () => {
    console.log('focused');
    this.lastNameRef.current.focus()
  };
    handleChange = (ev)=>{
   this.setState({
       selected: ev.target.value
   })

    };

  render() {
    return (
      <form onSubmit={this.onSubmit} className='w-25 justify-content-center'>
        {!!this.state.warning && <div>{this.state.warning}</div>}
        <div className="form-group">
          <label htmlFor="firstNameInput">First name:</label>
          <input
            ref={this.firstNameRef}
            type="text"
            className="form-control"
            id="firstNameInput"
            placeholder="John"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastNameInput">Last name:</label>
          <input
            ref={this.lastNameRef}
            type="text"
            className="form-control"
            id="lastNameInput"
            placeholder="Doe"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="emailNameInput">Email:</label>
          <input
            ref={this.emailNameRef}
            type="email"
            className="form-control"
            id="lastNameInput"
            placeholder="email@any.com"
            required
          />
        </div>
        {/*
        todo 1: добавить инпут для ввода адресса
              передать ему атрибут под название ref наш созданный в строке 8 ref
        */}
        <div className="form-group">
          <label htmlFor="addressNameInput">Address:</label>
          <input
              ref={this.addressNameRef}
              type="text"
              className="form-control"
              id="AddressNameInput"
              placeholder=""
          />
        </div>

          <div className="form-group">
              <label htmlFor="dobNameInput">dob:</label>
              <input
                  ref={this.dobNameRef}
                  type="date"
                  className="form-control"
                  id="dobNameInput"
                  placeholder="YYYY-MM-DD"
              />
          </div>
          <div className="form-group">
              <label htmlFor="phoneNameInput">phone:</label>
              <input
                  ref={this.phoneNameRef}
                  type="number"
                  className="form-control"
                  id="phoneNameInput"
                  placeholder="Example input"
                  required
              />
          </div>

          <label htmlFor="genderNameInput">gender:</label>
              <label>
                  <select onChange={this.handleChange}>
                      <option value="male" defaultChecked>male</option>
                      <option value="female">female</option>
                      <option value="other">other</option>
                  </select>
              </label>

        <button type='submit' className="btn btn-primary m-2">Add </button>
        <button type='button' onClick={this.focusInput}>focus</button>

      {/*
      todo 3: добавить кнопку, которая по нажатию будет будет вызывать метод onReset
      */}
      <button type='button' onClick={this.onReset}>Reset</button>
      </form>
    );
  }
}

export default AddUserForm;