import React, {Component} from "react";
import './Panel.scss'
import Chevron from '../../assets/chevron-bottom.png'

export class PanelFromLectre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    onClark = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        const {children} = this.props;
        const {isOpen} = this.state;
        return (
            <div className='my-panel card'>
                <div className='my-panel-header card-header'>
                    <div>some label</div>
                    <div className='my-panel-header-chevron' onClick={this.onClark}>
                        <img src={Chevron} alt='#'/>
                    </div>
                </div>
                {
                    isOpen && (<div className='card-body'>{children}</div>)
                }
            </div>
        )
    }
}