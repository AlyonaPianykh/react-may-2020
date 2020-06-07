import React, { Component } from 'react';

import './DropDown.scss';

export class DropDown extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    onOptionSelect = (event) => {
        const {onSelect} = this.props


        const value = event.target.getAttribute('data-value');
        console.log(value);

        onSelect(value)

        this.setState({isOpen: false});
    };

    render() {
        const {options = [], selectedOption} = this.props

        const {isOpen} = this.state

        return (
            <div className="may-drop-down dropdown">
                <div className="dropdown-toggle" onClick={this.toggle}>{selectedOption}</div>
                isOpen &&
                <div className="may-drop-down-options-wrapper dropdown-menu show">
                    {
                        options.map(option => {
                            return (
                                <div key={option} className="may-drop-down-options-wrapper-option dropdown-item"
                                     data-value={option} onClick={this.onOptionSelect}>
                                    {option}
                                </div>
                            )
                        })
                    }
                </div>
                }
            </div>
        );
    }
}