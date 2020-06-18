import React from 'react';
import queryString from 'query-string';
import {UserCard} from '../user-card/UserCard';
//import {usersList} from '../../constants';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
// import {addUser, inc} from "../../actions";
// import {DECREMENT} from "../../action-types";
// import HomePage from "../home-page/HomePage";

class UsersListPageComponent extends React.Component {

    constructor(props) {
        super(props);

        const {location: {search},usersList} = props;

        const {page} = queryString.parse(search);
        debugger
        this.state = {
            users: usersList,
            page: page || 1
        };
    }

    render() {
        const {users} = this.state;

        return (
            <div className="d-flex">
                {
                    users.map((user, index) => {
                        return <UserCard
                            user={user}
                            key={user.id}
                        />;
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {
        usersReducer: {usersList}
    } = state;
    return {
        usersList
    };
};

export const UsersListPage = connect(mapStateToProps)(withRouter(UsersListPageComponent));

// dtodo: обратите внимание - эти 2 примера mapDispatchToProps равносильны, вы можете использовать любой из них
// dtodo: обратите внимание, ниже mapDispatchToProps это функция
// const mapDispatchToProps = dispatch => {
//     return {
//         increment: () => dispatch(inc()),
//         decrement: () => dispatch({type: DECREMENT, payload: 2}),
//         addUser: (newUser) => dispatch(addUser(newUser))
//     };
// };
// dtodo: обратите внимание, a тут это объект
// const mapDispatchToProps = ({
//   increment: inc,
//   decrement: dec
// });

