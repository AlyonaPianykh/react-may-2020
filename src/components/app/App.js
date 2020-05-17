import React from 'react';
import { Header } from '../header/Header';
import { Section } from '../section/Section';

// todo: здесь нужно сделать импорт Footer из '../footer/Footer'

// todo: здесь нужно сделать импорт usersList из '../../constants'
// todo: здесь нужно сделать импорт UserCard из '../user-card/UserCard'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div>content will appear here soon</div>
      {/*  todo: здесь нужно использовать Footer по аналогии с Header */}

      {/*  todo: здесь нужно использовать UserCard по аналогии с Header, как пропсу user передать usersList[0]*/}


      <Section label="Users List">test</Section>
    </div>
  );
}

export default App;
