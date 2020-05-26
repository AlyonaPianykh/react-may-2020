import React, { Component } from 'react';

import './DropDown.scss';

export class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
  }
// todo:
//  добавить state, в котором будет булевая пропертя isOpen по умолчанию = false
//  на базе нее будут рендериться или нет опции дропдауна

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    // todo: здесь должно быть открывание/закрывание дропдауна с помощью this.setState
    //  сделать так же как в компоненте components/panel/PanelFromLecture в методе onClick
  };

  onOptionSelect = (event) => {
    const {onSelect} = this.props;
    // todo:
    //  достать из this.props функцию onSelect
    const value = event.target.getAttribute('data-value');
    console.log('value');
    console.log(value);
    // todo:
    //  объявить переменную value, записать в нее  event.target.getAttribute('data-value');
    //  вывести console.log(value) и убедиться что в консоли показывается текст выбранной опции
    onSelect(value);
    // todo: вызвать функцию из onSelect с аргументом value
    this.setState({ isOpen: false })
    // todo: закрыть дропдаун, вызвав this.setState({ isOpen: false })
  };

  render() {
    const {options = [], selectedOption} = this.props;
    // todo:
    //  достать из this.props массив опций options
    //  он должен быть по умолчанию пуст, т.е. = [] (дефолтный параметр при деструктуризации) и
    //  достать также в пропсах selectedOption (выбранная в данный момент опция)
    const {isOpen} = this.state;
    // todo:
    //  достать isOpen из this.state

    return (
      <div className="may-drop-down dropdown"  onClick={this.toggle}>{selectedOption}
        {/* todo: показать в строке 45 выбранную опцию selectedOption  и передать в onClick this.toggle
             (нажатие на этот тег должно открывать/закрывать дропдаун)
        */}
        <div className="dropdown-toggle">{/* тут будет выбранная опция*/}</div>

        {
          // todo:
          //  если значение isOpen в this.state = true показываем этот блок ниже (использовать &&)
          this.state.isOpen && (<div className="may-drop-down-options-wrapper dropdown-menu show">
            {options.map(option => (
              <div className="may-drop-down-options-wrapper-option dropdown-item" data-value={option} onClick={this.onOptionSelect}>
                {option}
              </div>
            ))}
            {/*
          todo:
            //  рендерим список опций с помощью options.map(option => ....
            //  опция должна быть тегом div и иметь такие пропсы:
            //  должен быть className = "may-drop-down-options-wrapper-option dropdown-item"
            //  key = значению option
            //  атрибут data-value =  значению option
            //  в event listener onClick положить значение this.onOptionSelect
            //  внутри тега показать {option} (как children)
          */}
          </div>)
        }
      </div>
    );
  }
}