import React from 'react';
import {NavLink} from 'react-router-dom';
import './NotFoundPage.css'

// ttodo 1: вынести эту функцию в отдельную компоненту: сощздать папку, js файл
export const NotFoundPage = () => {
// ttodo 1: добавить кнопку навигации на back to home page
//  подумайте, как для этого надо изменить эту страницу
  return <div className='nfp'>
      <NavLink to={'/home'} activeClassName="active" className="btn btn-primary">back to home page</NavLink>
  </div>
};