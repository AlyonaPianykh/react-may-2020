import React, { Component } from 'react';

import './DropDown.scss';

export class DropDown extends Component {
  state = {
    isOpen: false
  };

  dropDownRef = React.createRef();

  componentDidMount() {
    document.addEventListener('click', this.onClose);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClose);
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  onOptionSelect = (event) => {
    const { onSelect } = this.props;
    const value = event.target.getAttribute('data-value');

    onSelect && onSelect(value);
    this.setState({
      isOpen: false
    });
  };

  onClose = (event) => {
    if (this.dropDownRef && !this.dropDownRef.current.contains(event.target)) {
      this.setState({
        isOpen: false
      });
    }
  };

  render() {
    const { selectedOption, options } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="may-drop-down dropdown" ref={this.dropDownRef}>
        <div className="dropdown-toggle" onClick={this.toggle}>{selectedOption}</div>

        {
          isOpen && <div className="may-drop-down-options-wrapper dropdown-menu show">
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