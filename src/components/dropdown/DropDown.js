import React, { Component } from 'react';

import './DropDown.scss';

export class DropDown extends Component {
// todo:
//  добавить state, в котором будет булевая пропертя isOpen по умолчанию = false
//  на базе нее будут рендериться или нет опции дропдауна
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }
  }

  toggle = () => {
    // todo: здесь должно быть открывание/закрывание дропдауна с помощью this.setState
    //  сделать так же как в компоненте components/panel/PanelFromLecture в методе onClick
    this.setState({
      isOpen: !this.state.isOpen,
    })
  };

  onOptionSelect = (event) => {
    // todo:
    //  достать из this.props функцию onSelect
    const {renderPosts} = this.props;
    // todo:
    //  объявить переменную value, записать в нее  event.target.getAttribute('data-value');
    const value = event.target.getAttribute('data-value');
    //  вывести console.log(value) и убедиться что в консоли показывается текст выбранной опции
    // Проверка на отсортированость по этому критерию
    // if (this.props.selectedOption === value) return null;
    // todo: вызвать функцию из onSelect с аргументом value
    renderPosts(value);

    // todo: закрыть дропдаун, вызвав this.setState({ isOpen: false })
    this.setState({
      isOpen: false,
    })
  };

  render() {
    // todo:
    //  достать из this.props массив опций options
    //  он должен быть по умолчанию пуст, т.е. = [] (дефолтный параметр при деструктуризации) и
    //  достать также в пропсах selectedOption (выбранная в данный момент опция)
    const {options = [], selectedOption} = this.props;
    // todo:
    //  достать isOpen из this.state
    const {isOpen} = this.state;

    return (
      <div className="may-drop-down dropdown" onClick={this.toggle}>
        {/* todo: показать в строке 45 выбранную опцию selectedOption  и передать в onClick this.toggle
             (нажатие на этот тег должно открывать/закрывать дропдаун)
        */}
        <div className="dropdown-toggle">{selectedOption}</div>

        {
          // todo:
          //  если значение isOpen в this.state = true показываем этот блок ниже (использовать &&)
          isOpen && <div className="may-drop-down-options-wrapper dropdown-menu show">
            {/*
          todo:
            //  рендерим список опций с помощью options.map(option => ....
            //  опция должна быть тегом div и иметь такие пропсы:
            //  должен быть className = "may-drop-down-options-wrapper-option dropdown-item"
            //  key = значению option
            //  атрибут data-value =  значению option
            //  в event listener onClick положить значение this.onOptionSelect
            //  внутри тега показать {option} (как children)*/
              options.map((option) => {
                return(
                    <div className='may-drop-down-options-wrapper-option dropdown-item' key={option} data-value={option}
                    onClick={this.onOptionSelect}>
                      {option}
                    </div>
                )
              })
            }
          </div>
        }
      </div>
/*    <div className="may-drop-down dropdown" onClick={this.toggle}>

      <div className="dropdown-toggle">{selectedOption}</div>

      {

        isOpen && <div className="may-drop-down-options-wrapper dropdown-menu show">
          {
            options.map((option) => {
              return(
                  <div className='may-drop-down-options-wrapper-option dropdown-item' key={option} data-value={option}
                       onClick={this.onOptionSelect}>
                    {option}
                  </div>
              )
            })
          }
        </div>
      }
    </div>*/
    );
  }
}