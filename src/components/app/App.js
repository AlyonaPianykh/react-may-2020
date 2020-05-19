import React from 'react';
import { Header } from '../header/HeaderFromLecture';
import  {Footer} from '../footer/Footer';
import  {usersList}  from '../../constants';
import  { UserCard } from '../user-card/UserCard';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div className="App">
            <Header />
            <div className='d-flex'>
                {usersList.map((user)=> <UserCard user={user}/>) }
            </div>
            <Footer/>
        </div>
    );
}

export default App;
