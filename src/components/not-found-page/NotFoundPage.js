import React from "react";
import {Link} from "react-router-dom";

export const NotFoundPage = () => {

    return (
        <div>
            <Link to='/home'>back to home page</Link><br/>
            Page not found
        </div>)
};