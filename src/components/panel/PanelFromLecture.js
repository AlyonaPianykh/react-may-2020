import React from 'react';
import Chevron from '../../assets/chevron-bottom.png';

import './Panel.scss';

export class PanelFromLecture extends React.Component {
  constructor(props) {
    super(props);

    const { isOpenByDefault } = props;

    this.state = {
      isOpen: isOpenByDefault,
      inputVal: 'test'
    };
  }

  test = 'test';

  onClick = () => {
    console.log('test');

    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  onChange = (event) => {
    debugger
    console.log(event)
    console.log(event.target.value)

    this.setState({
      inputVal: event.target.value
    });
  };

  render () {
    const { children, label } = this.props;
    const {isOpen} = this.state;

    return (
      <div className="may-panel card">

        {/*<input value={this.state.inputVal} onChange={this.onChange}/>*/}
        <div className="may-panel-header card-header">
          <div>{label}</div>
          <div className={`may-panel-header-chevron ${isOpen ? 'up' : ''}`} onClick={this.onClick}>
            <img src={Chevron} alt="chevron arrow"/>
          </div>
        </div>
        {
          isOpen && (
            <div className="card-body">
              { children }
            </div>
          )
        }
      </div>
    );
  }
}