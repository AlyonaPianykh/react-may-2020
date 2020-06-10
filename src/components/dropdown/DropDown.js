import React, { Component } from 'react';

import './DropDown.scss';

export class DropDown extends Component {
  state = {
    isOpen: false,
  };

  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  onOptionSelect = (event) => {
    const { onSelect } = this.props;
    const value = event.target.getAttribute('data-value');

    onSelect && onSelect(value)
  };

  render() {
    const { selectedOption, options } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="may-drop-down dropdown">
        <div className="dropdown-toggle" onClick={this.toggle}>{selectedOption}</div>

        {
          isOpen &&  <div className="may-drop-down-options-wrapper dropdown-menu show">
            {
              options.map(option => (
                <div
                  className="may-drop-down-options-wrapper-option dropdown-item"
                  key={option}
                  data-value={option}
                  onClick={this.onOptionSelect}
                >{option}</div>
              ))
            }
          </div>
        }
      </div>
    );
  }
}