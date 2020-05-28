import React from "react";

import './LoadingIndicator.css';

const LoadingIndicator = () => {
    return (
        // loading indicator made on css
        <div className="sk-fading-circle">
            <div className="sk-circle1 sk-circle"/>
            <div className="sk-circle2 sk-circle"/>
            <div className="sk-circle3 sk-circle"/>
            <div className="sk-circle4 sk-circle"/>
            <div className="sk-circle5 sk-circle"/>
            <div className="sk-circle6 sk-circle"/>
            <div className="sk-circle7 sk-circle"/>
            <div className="sk-circle8 sk-circle"/>
            <div className="sk-circle9 sk-circle"/>
            <div className="sk-circle10 sk-circle"/>
            <div className="sk-circle11 sk-circle"/>
            <div className="sk-circle12 sk-circle"/>
        </div>

        // loading indicator made on bootstrap
        // <div className="text-center">
        //     <div className="spinner-border text-secondary" role="status" style={{width: "24px", height: "24px"}}>
        //         <span className="sr-only">Loading...</span>
        //     </div>
        // </div>
    );
};

export default LoadingIndicator;