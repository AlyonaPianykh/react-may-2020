import React from 'react';
import "../Header/header.scss"
import './App.css';
import {Header} from "../Header/header";
import {Footer} from "../footer/Footer";
import {UserCard} from "../UserCard/UserCard";
import {usersList} from "../../Contetnt/Index";

function App() {
  return (
    <div className="App">
        <Header />
          <UserCard user={usersList[0]} />
        <Footer/>
    </div>
  );
}

export default App;
