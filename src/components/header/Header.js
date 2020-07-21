import React, { Component } from 'react';
import { ViewPortContext } from '../../context/ViewPortContext';
import { Header as DesktopHeader } from './HeaderFromLecture';
import  MobileHeader  from './MobileHeader';
import  {TabletHeader}  from './TabletHeader';
import { viewPorts } from '../detect-view-port-wrapper/DetectViewPortWrapper';

class Header extends Component {
  render() {
    const viewPort = this.context;

    if (viewPort === viewPorts.desktop) {
        return <DesktopHeader/>;
    }

    if (viewPort === viewPorts.tablet) {
      return <TabletHeader/>
    }

    if (viewPort === viewPorts.mobile) {
      return <MobileHeader/>
    }
  }
}

Header.contextType = ViewPortContext;

export default Header;