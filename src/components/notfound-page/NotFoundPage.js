import React from "react";
import {Link} from 'react-router-dom';

const NotFoundPage = () => {
    const styles = {
        color: "white"
    }

    return (
        <div>Page not found
            <br/>
            <button style={{background: "#555555"}}>
                <Link style={styles} to="/home">back to home page</Link>
            </button>

        </div>
    )
};

export default NotFoundPage;