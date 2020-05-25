import React, { Component } from 'react';

import './DropDown.scss';

export class DropDown extends Component {
  // todo:
  //  добавить state, в котором будет булевая пропертя isOpen по умолчанию = false
  //  на базе нее будут рендериться или нет опции дропдауна
  state = {
    isOpen: false
  }
  toggle = () => {
    // todo: здесь должно быть открывание/закрывание дропдауна с помощью this.setState
    //  сделать так же как в компоненте components/panel/PanelFromLecture в методе onClick
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  onOptionSelect = (event) => {

    const { onSelect } = this.props;
    // todo:
    //  достать из this.props функцию onSelect
    const value = event.target.innerHTML;
    // todo:
    //  объявить переменную value, записать в нее  event.target.getAttribute('data-value');
    //  вывести console.log(value) и убедиться что в консоли показывается текст выбранной опции
    onSelect(value)
    // todo: вызвать функцию из onSelect с аргументом value
    this.setState({
      isOpen: !this.state.isOpen
    })
    // todo: закрыть дропдаун, вызвав this.setState({ isOpen: false })
  };
  render() {
    // todo:
    //  достать из this.props массив опций options
    const { options = [], selectedOption } = this.props;
    const { isOpen } = this.state;
    //  он должен быть по умолчанию пуст, т.е. = [] (дефолтный параметр при деструктуризации) и
    //  достать также в пропсах selectedOption (выбранная в данный момент опция)

    // todo:
    //  достать isOpen из this.state

    return (
        <div
            className="may-drop-down dropdown"
            onClick={this.toggle}>
          {/* todo: показать в строке 45 выбранную опцию selectedOption  и передать в onClick this.toggle
             (нажатие на этот тег должно открывать/закрывать дропдаун)
        */}
          <div className="dropdown-toggle">{selectedOption}</div>
          {isOpen && (
              // todo:
              //  если значение isOpen в this.state = true показываем этот блок ниже (использовать &&)
              <div className="may-drop-down-options-wrapper dropdown-menu show">
                {options.map((option) => {

                  let itemClass = "may-drop-down-options-wrapper-option dropdown-item"
                  if (selectedOption === option) {
                    itemClass += " active"
                  }

                  return (
                      <div
                          className={itemClass}
                          key={option}
                          onClick={this.onOptionSelect}
                      >{option}</div>
                  )
                })
                  /*
              todo:
                //  рендерим список опций с помощью options.map(option => ....
                //  опция должна быть тегом div и иметь такие пропсы:
                //  должен быть className = "may-drop-down-options-wrapper-option dropdown-item"
                //  key = значению option
                //  атрибут data-value =  значению option
                //  в event listener onClick положить значение this.onOptionSelect
                //  внутри тега показать {option} (как children)
              */}
              </div>
          )
          }
        </div>
    );
  }
}