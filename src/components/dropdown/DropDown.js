import React, { Component } from 'react';
import { DarkThemeContext } from '../../context/DarkThemeContext';
import './DropDown.scss';


export class DropDown extends Component {
  dropDownRef = React.createRef();
  state = {
    isOpen: false
  };

  static contextType = DarkThemeContext;

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
    const darkThemeContextValue = this.context;
    console.log('dark: ',darkThemeContextValue)
    return (
      <div className={`may-drop-down dropdown ${darkThemeContextValue.isDarkTheme && 'dark'}`} ref={this.dropDownRef}>
        <div className="dropdown-toggle" onClick={this.toggle}>{selectedOption || 'Select'}</div>
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

// Dropdown.contextType = DarkThemeContext;
