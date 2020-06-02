import React, {Component, createRef} from 'react';

class AddUserForm extends Component {

    firstNameRef = createRef();
    lastNameRef = createRef();
    emailNameRef = createRef();
    addressRef = createRef();
    // ttodo 1: добавить ref для address

    state = {
        warning: ''
    };

    onSubmit = (e) => {
        // ttodo 1: достать из props функцию добавления пользователя onUserAdd
        e.preventDefault();
        const {onUserAdd} = this.props;

        // console.log(this.firstNameRef.current.value);
        // console.log(this.lastNameRef.current.value);

        const first_name = this.firstNameRef.current.value;
        const last_name = this.lastNameRef.current.value;
        const email = this.emailNameRef.current.value;
        const address = this.addressRef.current.value;

        const pattern = /\d+/;
        // const patternEmail = /\S+@\S+\.\S+/;

        if (pattern.test(first_name) || pattern.test(last_name)) {
            this.setState({
                warning: 'please don\'t put numbers '
            });
            return;
        }
/*
        if (!patternEmail.test(email)) {
            this.setState({
                warning: 'please, enter correct Email'
            });
            return;
        }
*/

        // console.log(first_name, lastName, email);
        // ttodo 1: использовать функцию onUserAdd для создания нового пользователя здесь
        //  у этого объекта должны быть проперти first_name, last_name, address, email
        onUserAdd && onUserAdd({first_name, last_name, address, email});

        // ttodo 3: зачистить форму, вызвав функцию onReset
        this.onReset(e)
    };

    // ttodo 3: добавить функцию onReset, которая будет зачищать поля формы
    //  обратите внимание, что тут нет стейта и мы обращаемся к инпутам с помощью ref

    onReset = (e) => {
        e.preventDefault();
        this.firstNameRef.current.value = '';
        this.lastNameRef.current.value = '';
        this.emailNameRef.current.value = '';
        this.addressRef.current.value = '';
    };

    focusInput = () => {
        // console.log('focused');
        this.lastNameRef.current.focus()
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                {!!this.state.warning && <div className='text-warning'>{this.state.warning}</div>}
                <div className="form-group">
                    <label htmlFor="firstNameInput">First name:</label>
                    <input
                        ref={this.firstNameRef}
                        type="text"
                        className="form-control"
                        id="firstNameInput"
                        placeholder="Name input"
                        pattern='^(\S).*$'
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
                        placeholder="LastName input"
                        pattern='^(\S).*$'
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="emailInput">Email:</label>
                    <input
                        ref={this.emailNameRef}
                        type="email"
                        className="form-control"
                        id="emailInput"
                        placeholder="Email input"
                        required
                    />
                </div>

                {/*ttodo 1: добавить инпут для ввода адресса
                    передать ему атрибут под название ref наш созданный в строке 8 ref*/}
                <div className='form-group'>
                    <label htmlFor='address'>Address:</label>
                    <input
                        ref={this.addressRef}
                        type="text"
                        className="form-control"
                        id="addressnput"
                        placeholder="Address input"
                        required
                    />
                </div>

                <button type='submit' className="btn btn-primary m-2">Add</button>
                <button type='button' onClick={this.focusInput}>focus</button>

                {/*ttodo 3: добавить кнопку, которая по нажатию будет вызывать метод onReset*/}
                <button onClick={this.onReset} className="btn btn-secondary m-2">Reset</button>
            </form>
        );
    }
}

export default AddUserForm;