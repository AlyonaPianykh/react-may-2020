import React, { Component } from 'react';
import { DarkThemeContext, isDarkTheme } from '../../context/DarkThemeContext';

export class DarkThemeContextWrapper extends Component {
  state = {
    isDarkThemeOn: isDarkTheme
  };

  toggleTheme = () => this.setState({ isDarkThemeOn: !this.state.isDarkThemeOn });

  render() {
    const {children} = this.props;
    return (
      <DarkThemeContext.Provider value={{
        isDarkTheme: this.state.isDarkThemeOn,
        toggleTheme: this.toggleTheme
      }}>
        {children}
      </DarkThemeContext.Provider>
    );
  }
}