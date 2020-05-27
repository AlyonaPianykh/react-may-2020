import React, {Children, Component} from "react";
import Chevron from './../../assets/chevron-bottom.png'

import './Panel.scss'


export class Panel extends Component{
    constructor(props) {
        super(props);

        this.state={
          isOpen : true,
            inputVal: 'test'
        };
    }

    onclick =()=>{
      this.setState(
          {
              isOpen :!this.state.isOpen
          }
      )
    };

    onChange = (event) =>{
        this.setState(
            {
                inputVal: event.target.value
            }
        )
    };

    render() {
        const {children}=this.props;
        const {isOpen} = this.state;
        return(
            <div className='may-panel card'>

                {/*<input value={this.state.inputVal} onChange={this.onChange}/>*/}

                <div className='may-panel-header card-header'>
                    <div>some label</div>
                    <div className={`may-panel-header-chevron ${isOpen ?  'up':''}`} onClick={this.onclick}>
                        <img src={Chevron} alt="chevron"/>
                    </div>
                </div>

                {
                    isOpen &&
                    (
                        <div className='card-body'>
                            {children}
                        </div>
                    )

                }


            </div>
        )
    }

}