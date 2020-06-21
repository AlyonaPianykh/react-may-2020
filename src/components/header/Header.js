import React, { Component } from 'react';
import { ViewPortContext } from '../../context/ViewPortContext';
import { Header as DesktopHeader } from './HeaderFromLecture';
import { MobileHeader } from './MobileHeader';
import { viewPorts } from '../detect-view-port-wrapper/DetectViewPortWrapper';
class Header extends Component {
  render() {
    const viewPort = this.context;

    if (viewPort === viewPorts.desktop) {
        return <DesktopHeader/>;
    }

    if (viewPort === viewPorts.mobile || viewPort === viewPorts.tablet) {
      return <MobileHeader/>
    }
  }
}

Header.contextType = ViewPortContext;

export default Header;