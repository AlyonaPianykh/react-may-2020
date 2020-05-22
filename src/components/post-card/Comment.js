import React from "react";

export const Comment = ({comment}) => {
    const {name, email, body} = comment;

    return (
        // <div className="card-body">
        //     <h4 className="card-title">{name}</h4>
        //     <a className="card-link" href={email}>{email}</a>
        //     <p className="text-success">{body}</p>
        //     <a href="#" className="btn btn-primary">Go somewhere</a>
        //     <div className="card-footer text-muted">
        //         2 days ago
        //     </div>
        // </div>
    <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <a className="card-link" href={email}>{email}</a>
        <p className="text-success">{body}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        <div className="card-footer text-muted">
            2 days ago
        </div>
    </div>
    );
}

