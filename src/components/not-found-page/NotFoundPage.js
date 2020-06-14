import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './NotFoundPage.scss'

class NotFoundPage extends Component {
    render() {
        return (
            <div>


                <div className="my-not-found-main-box">
                    <div className="my-not-found-err">404</div>
                    <div className="my-not-found-msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in
                        the first place?<p>Let's go <Link to="/home">home</Link> and try from there.</p></div>
                </div>
            </div>

        );
    }
}

export default NotFoundPage;