import React from 'react';
import { Header } from '../header/HeaderFromLecture';
import { Footer } from '../footer/Footer';
import { usersList } from '../../constants';
import { UserCard } from '../user-card/UserCard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Header />

            <UserCard user={usersList[0]} />

            <Footer />
        </div>
    );
}

export default App;
