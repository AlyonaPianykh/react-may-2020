import React, { Component } from 'react';

import { ViewPortContext } from '../../context/ViewPortContext';

export const viewPorts = {
  desktop: 'desktop',
  tablet: 'tablet',
  mobile: 'mobile'
};

const DESKTOP_WIDTH = 1000;
const TABLET_WIDTH = 720;
const MOBILE_WIDTH = 578;

export class DetectViewPortWrapper extends Component {
  state = {
    viewport: viewPorts.desktop,
    user: {},
    localization: 'en'
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateViewPort);
    this.updateViewPort();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateViewPort);
  }

  updateViewPort = () => {
    const width = window.innerWidth;
    let viewport = viewPorts.desktop;

    // console.log(width)
    if (width >= DESKTOP_WIDTH) {
      // debugger
      viewport = viewPorts.desktop;
    } else if (width <= TABLET_WIDTH) {
      viewport = viewPorts.tablet;
    } else if (width <= MOBILE_WIDTH) {
      viewport = viewPorts.mobile;
    }

    this.setState({
      viewport
    });
  };

  render() {
    const { children } = this.props;
    const { viewport } = this.state;

    return (
      <ViewPortContext.Provider value={viewport} children={children} />
    );
  }
}
