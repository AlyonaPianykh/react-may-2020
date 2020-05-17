import React, { Component } from 'react';
import Chevron from '../../assets/chevron-bottom.png';

import './Section.scss';

export class Section extends Component {
  state = {
    isOpen: false
  };

  toggle = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

  render() {
    const { children, label } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="may-section card">
        <div className="may-section-header card-header" onClick={this.toggle}>
          {label && <div className="may-section-header-label">{label}</div>}
          <div className={`may-section-header-chevron ${isOpen ? 'up' : 'down'}`}>
            <img src={Chevron} alt="chevron arrow" />
          </div>
        </div>
        {
          isOpen &&
            <div className="card-body">
              { children }
            </div>
        }
      </div>
    );
  }
}
