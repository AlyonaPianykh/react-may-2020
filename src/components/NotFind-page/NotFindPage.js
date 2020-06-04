import React, {Component} from "react";
import {withRouter} from "react-router";

// todo 1: добавить кнопку навигации на back to home page
//  подумайте, как для этого надо изменить эту страницу

class NotFindPageComponent extends Component{
    constructor(props) {
        super(props);

    }
  toHomePage = () => {
      const { history } = this.props;
        history.push('/home');
    };


    render() {

        return(
            <div>
                <div>Page not found</div>
                <button type='button' onClick={this.toHomePage}> back to home page </button>

            </div>


        );
    }
}

export const NotFindPage = withRouter(NotFindPageComponent);