import React from 'react';

//todo здесь нужно сделать импорт socialMediaIcons из файла '../../constants'
import {socialMediaIcons} from '../../constants/index';
//todo здесь нужно сделать импорт стилей из './Footer.scss'
import './Footer.scss';
import {author} from "../../constants/index";

const FB =  socialMediaIcons[0];
const Insta =  socialMediaIcons[1];
const Tweet =  socialMediaIcons[2];

const GitHUB = author.gitHub;
const {name} = author;
const {surName} = author;
const {nickName} = author;

export const Footer = () => {
    return (
        <div className={'may-footer'}>
            <div className={"may-footer-content"}>
                <div className={'"may-footer-author'}>
                    <div>{name} {surName} {nickName}</div>
                    <a href={GitHUB}>https://github.com/TarikoDan</a>
                </div>
                <div className={"may-footer-social-media-wrapper"}>
                    <img src={FB.src} className={"may-footer-social-media-icon"} alt={FB.alt}/>
                    <img src={Insta.src} className={"may-footer-social-media-icon"} alt={Insta.alt}/>
                    <img src={Tweet.src} className={"may-footer-social-media-icon"} alt={Tweet.alt}/>
                </div>
            </div>
            <div >All rights reserved. may-app © 2020</div>
        </div>
    )
};
  // todo здесь нужно сделать экспорт функии под названием Footer
  //   она должна вернуть div с классом "may-footer"
  //   в котором будет 2 div блока: 1й с классом "may-footer-content", второй будет без класса но с текстом 'All rights reserved. may-app © 2020'
  //   в первом div блоке должны быть вложены еще 2 блока div: 1й с текстом "Some text about authors"
  //   второй будет иметь класс "may-footer-social-media-wrapper", в него будут вложены 3 блока img в соответствии с socialMediaIcons
  //   каждый img должен иметь класс "may-footer-social-media-icon" и в пропсу src должен быть записан src из соответствующего объекта в socialMediaIcons массиве
  //   и в пропсу alt должен быть записан alt из соответствующего объекта в socialMediaIcons массиве

