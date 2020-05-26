import React, {Component} from 'react';
import {Header} from '../header/HeaderFromLecture';
import {Footer} from '../footer/Footer';
import {PanelFromLecture} from '../panel/PanelFromLecture';

import {PostCard as Card} from '../post-card/PostCard';
import {allComments, postsList, usersList} from '../../constants';

// done_todo 0) тут мы делаем импорт дропдауна (уже сделан)
import {DropDown} from '../dropdown/DropDown';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


// done_todo 1) вот наши опции сортировки, мы будем их использовать в DropDown (уже объявлены)
const sortingOptions = ['Sort By Default', 'Sort By Author'];

class App extends Component {
    state = {
        posts: [...postsList],
        // done_todo: 2) добавить под ключом selectedOption значение sortingOptions[0] (она будет хранить выбранную в данный моменит опцию)
        selectedOption: sortingOptions[0],
    };

    renderList = () => {
        const res = [];

        for (let i = 0; i < 6; i++) {
            const item = postsList[i];
            res.push(<Card post={item} key={item.id}/>);
        }

        return res;
    };

    // done_todo: 3) обратите внимание на эту функцию, она уже написана,
    //  ее надо использовать в render методе, где кнопки сортировки
    //  передать ее в DropDown как пропсу под названием onSelect (строка 118)
    //  попробуйте продебажить и разобраться как она работает
    onSort = (selectedOption) => {
        // детально про строку 42 тут: https://javascript.info/destructuring-assignment#array-destructuring
        const [option1, option2] = sortingOptions;

        switch (selectedOption) {
            case option1:
                this.onSortByDefault(); // вызываем сортировку по дефолту, если 1 элемент массива sortingOptions
                this.setState({
                    selectedOption: option1 // записываем в стейт выбранную опцию
                });
                break;
            case option2:
                this.onSortByAuthorClick(); // вызываем сортировку по автору, если 2 элемент массива sortingOptions
                this.setState({
                    selectedOption: option2 // записываем в стейт выбранную опцию
                });
                break;
            default:
                break; // ничего неделаем если опция не входит в массив sortingOptions
        }
    };

    onSortByDefault = () => {
        this.setState({
            posts: [...postsList]
        })
    };

    onSortByAuthorClick = () => {
        const res = [...this.state.posts];

        const sorted = res.sort(function (a, b) {
            const authorA = usersList.find(user => user.id === a.user_id);
            const authorB = usersList.find(user => user.id === b.user_id);

            if (authorA.first_name > authorB.first_name) {
                return 1;
            }
            if (authorA.first_name < authorB.first_name) {
                return -1;
            }
            // a должно быть равным b
            return 0;
        });

        this.setState({
            posts: sorted
        });
    };

    render() {
        // done_todo 4) достать также в строке 92 из стейта selectedOption
        const {posts, selectedOption} = this.state;

        return (
            <div className="App">
                <Header/>

                <PanelFromLecture isOpenByDefault={false}>
                    Hello, world!
                </PanelFromLecture>

                <PanelFromLecture label="test">
                    One more panel
                </PanelFromLecture>

                <PanelFromLecture label="Posts">
                    <div className="d-flex">
                        Sorting:
                        <button
                            onClick={this.onSortByAuthorClick}
                            type="button"
                            className="btn btn-secondary">By author
                        </button>
                        <button
                            onClick={this.onSortByDefault}
                            type="button"
                            className="btn btn-secondary">By default
                        </button>

                        {/* done_todo: тут используется дропдаун
                 ему нужно передать в пропсы такие значение:
                 в onSelect положить this.onSort
                 в selectedOption положить selectedOption (из строки 91)
                 в options положить sortingOptions
            */}
                        <DropDown
                            onSelect={this.onSort}
                            selectedOption={selectedOption}
                            options={sortingOptions}
                        />
                    </div>

                    <div className="d-flex posts-container">
                        {
                            posts.map((item, index) => {
                                const user = usersList.find(user => user.id === item.user_id);
                                const author = user ? `${user.first_name} ${user.last_name}` : '';
                                const comments = allComments.filter(comment => comment.post_id === item.id);

                                return <Card
                                    post={item}
                                    key={item.id}
                                    hasImage={index % 2 !== 0}
                                    author={author}
                                    comments={comments}
                                />;
                            })
                        }
                    </div>
                </PanelFromLecture>
                <Footer/>
            </div>
        );
    }
}

export default App;