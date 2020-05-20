import React from 'react';
import {socialMediaIcons} from '../../constants'
import './Footer.scss';
//done здесь нужно сделать импорт socialMediaIcons из файла '../../constants'
//done здесь нужно сделать импорт стилей из './Footer.scss'



  // done здесь нужно сделать экспорт функии под названием Footer
  //   она должна вернуть div с классом "may-footer"
  //   в котором будет 2 div блока: 1й с классом "may-footer-content", второй будет без класса но с текстом 'All rights reserved. may-app © 2020'
  //   в первом div блоке должны быть вложены еще 2 блока div: 1й с текстом "Some text about authors"
  //   второй будет иметь класс "may-footer-social-media-wrapper", в него будут вложены 3 блока img в соответствии с socialMediaIcons
  //   каждый img должен иметь класс "may-footer-social-media-icon" и в пропсу src должен быть записан src из соответствующего объекта в socialMediaIcons массиве
  //   и в пропсу alt должен быть записан alt из соответствующего объекта в socialMediaIcons массиве

export const Footer = () => {
    return(
        <div className='may-footer'>
            <div className='may-footer-content'>
                <div>Some text about author</div>
                <div className='may-footer-social-media-wrapper'>
                    <img src={socialMediaIcons[0].src} alt={socialMediaIcons[0].alt} className='may-footer-social-media-icon'/>
                    <img src={socialMediaIcons[1].src} alt={socialMediaIcons[1].alt} className='may-footer-social-media-icon'/>
                    <img src={socialMediaIcons[2].src} alt={socialMediaIcons[2].alt} className='may-footer-social-media-icon'/>
                </div>
            </div>
            <div>All rights reserved. may-app © 2020</div>
            <socialMediaIcons socialMediaIcons = {socialMediaIcons}/>

        </div>

    );
};
