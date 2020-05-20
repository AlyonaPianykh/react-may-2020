import React from 'react';
import { Header } from '../header/HeaderFromLecture';
import { Footer } from '../footer/Footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div>content will appear here soon</div>
      <Footer/>
    </div>
  );
}

export default App;
