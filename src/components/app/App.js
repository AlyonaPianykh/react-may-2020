import React from 'react';
import { Header } from '../header/Header';
// todo: здесь нужно сделать импорт Footer из '../footer/Footer'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div>content will appear here soon</div>
    {/*  todo: здесь нужно использовать Footer по аналогии с Header */}
    </div>
  );
}

export default App;
