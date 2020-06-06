import React from "react";
import {Link} from "react-router-dom";

export const NotFoundPage = () => {
    
   return (
        <div>Page not found
            <br/>
            <Link to='/home'>Back to home page</Link>
        </div>
    );
};
