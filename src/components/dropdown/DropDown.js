import React, {Component} from 'react';

import './DropDown.scss';

export class DropDown extends Component {
    state = {
        isOpen: false
    };

    toggle = () => {
        // dtodo: здесь должно быть открывание/закрывание дропдауна с помощью this.setState
        //  сделать так же как в компоненте components/panel/PanelFromLecture в методе onClick
        this.setState({isOpen: !this.state.isOpen})
    };

    onOptionSelect = (event) => {
        // dtodo:
        //  достать из this.props функцию onSelect
        const {onSelect} = this.props

        // dtodo:
        //  объявить переменную value, записать в нее  event.target.getAttribute('data-value');
        //  вывести console.log(value) и убедиться что в консоли показывается текст выбранной опции
        const value = event.target.getAttribute('data-value')

        // dtodo: вызвать функцию из onSelect с аргументом value
        onSelect(value)

        // dtodo: закрыть дропдаун, вызвав this.setState({ isOpen: false })
        this.setState({isOpen: false})
    };

    render() {
        // tdodo:
        //  достать из this.props массив опций options
        //  он должен быть по умолчанию пуст, т.е. = [] (дефолтный параметр при деструктуризации) и
        //  достать также в пропсах selectedOption (выбранная в данный момент опция)
        const {options = [], selectedOption} = this.props
        // dtodo:
        //  достать isOpen из this.state
        const {isOpen} = this.state

        return (
            <div className="may-drop-down dropdown">
                {/* tdodo: показать в строке 45 выбранную опцию selectedOption  и передать в onClick this.toggle
             (нажатие на этот тег должно открывать/закрывать дропдаун)
        */}
                <div className="dropdown-toggle" onClick={this.toggle}>{selectedOption}{/* тут будет выбранная опция*/}</div>

                {
                    // toddo:
                    //  если значение isOpen в this.state = true показываем этот блок ниже (использовать &&)
                 isOpen &&  <div className="may-drop-down-options-wrapper dropdown-menu show">
                        {/*
          toddo:
            //  рендерим список опций с помощью options.map(option => ....
            //  опция должна быть тегом div и иметь такие пропсы:
            //  должен быть className = "may-drop-down-options-wrapper-option dropdown-item"
            //  key = значению option
            //  атрибут data-value =  значению option
            //  в event listener onClick положить значение this.onOptionSelect
            //  внутри тега показать {option} (как children)

          */
                        options.map(options => {
                            return (
                                <div
                                    className="may-drop-down-options-wrapper-option dropdown-item"
                                    key={options}
                                    data-value={options}
                                    onClick={this.onOptionSelect}>
                                    {options}
                                </div>
                            )
                        })
                        }
                    </div>
                }
            </div>
        );
    }
}