import React, {Component} from "react";
import './loaderStyle.scss'


export class Loader extends Component {

    render() {
        return (
            <div className="spinner-box">
                <div className="circle-border">
                    <div className="circle-core"></div>
                </div>
            </div>
        )
    }

}