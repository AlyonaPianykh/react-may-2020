import React from 'react';
import { Header } from '../header/HeaderFromLecture';

// todo: здесь нужно сделать импорт Footer из '../footer/Footer'
import Footer from "../footer/Footer";
import {usersList} from '../../constants';
import {UserCard} from '../user-card/UserCard';


// todo: здесь нужно сделать импорт usersList из '../../constants'
// todo: здесь нужно сделать импорт UserCard из '../user-card/UserCard'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
//       {/*  todo: здесь нужно использовать Footer по аналогии с Header */}
//       {/*  todo: здесь нужно использовать UserCard по аналогии с Header, как пропсу user передать usersList[0]*/}

    return (
        <div className="App">
            <Header/>
            <div>content will appear here soon</div>
            <Footer/>
            <div className="card-group">
                {usersList.map( value => (
                    <UserCard user={value}
                    />
                ))}
            </div>

        </div>
    );
}

export default App;
