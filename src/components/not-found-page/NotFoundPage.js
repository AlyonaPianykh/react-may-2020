import React from "react";
import {Link} from 'react-router-dom';

import './NotFoundPage.scss';

const NotFoundPage = () => {
    return (
        <div>
            <div className='nfp bold'>Page not found</div>
            <br/>
            <div className='nfp-div'>
                <Link to='/home'>
                    <button className='nfp-btn'>back to home page</button>
                </Link>
            </div>
        </div>
    )
};
export  default NotFoundPage;