import React, {Component, createRef} from 'react';

class AddUserForm extends Component {

    firstNameRef = createRef();
    lastNameRef = createRef();
    emailNameRef = createRef();
    addressNameRef = createRef();
    // tod 1: добавить ref для address


    state = {
        warning: ''
    };

    onSubmit = (e) => {
        // tod 1: достать из props функцию добавления пользователя onUserAdd
        const {onUserAdd} = this.props
        e.preventDefault();


        const firstName = this.firstNameRef.current.value;
        const lastName = this.lastNameRef.current.value;
        const email = this.emailNameRef.current.value;
        const address = this.addressNameRef.current.value;

        const pattern = /\d+/;

        if (!firstName){alert('can`t send form without firstName');return;}
        if (!lastName){alert('can`t send form without lastName');return;}
        if (!email){alert('can`t send form without email');return;}
        if (!address){alert('can`t send form without address');return;}

        if (pattern.test(firstName) || pattern.test(lastName)) {
            this.setState({
                warning: 'please don\'t put numbers '
            });
            return;
        }

        // tod 1: использовать функцию onUserAdd для создания нового пользователя здесь
        //  у этого объекта должны быть проперти first_name, last_name, address, email
        const newUser = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            address: address,
        };
        onUserAdd && onUserAdd(newUser);

        // tod 3: зачистить форму, вызвав функцию onReset
        this.onReset();
    };
    onReset = () => {
        this.firstNameRef.current.value = '';
        this.lastNameRef.current.value = '';
        this.emailNameRef.current.value = '';
        this.addressNameRef.current.value = '';
    };
    // tod 3: добавить функцию onReset, которая будет зачищать поля формы
    //  обратите внимание, что тут нет стейта и мы обращаемся к инпутам с помощью ref

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
                    <label htmlFor="adressInput">Adress:</label>
                    <input
                        ref={this.addressNameRef}
                        type="text"
                        className="form-control"
                        id="adressInput"
                        placeholder="Example adress input"
                    />
                </div>
                {/*
        tod 1: добавить инпут для ввода адресса
              передать ему атрибут под название ref наш созданный в строке 8 ref
        */}

                <button type='submit' className="btn btn-primary m-2">Add</button>
                <button type='button' onClick={this.focusInput}>focus</button>
                <button type="button" onClick={this.onReset}>reset form</button>

                {/*
      tod 3: добавить кнопку, которая по нажатию будет будет вызывать метод onReset
      
      */}
            </form>
        );
    }
}

export default AddUserForm;