import React, { Component } from 'react';
import { Header } from '../header/HeaderFromLecture';
import { Footer } from '../footer/Footer';
import { PanelFromLecture } from '../panel/PanelFromLecture';
import { PostPreview } from '../post-preview/PostPreview';
import TestCard, { PostCard as Card } from '../post-card/PostCard';
import { allComments, postsList, usersList } from '../../constants';

import { DropDown } from '../dropdown/DropDown';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const sortingOptions = ['Sort By Default', 'Sort By Author'];

class App extends Component {
  state = {
    posts: [...postsList],
    // done_todo: 2) добавить под ключом selectedOption значение sortingOptions[0] (она будет хранить выбранную в данный моменит опцию)
    selectedOption: sortingOptions[0]
  };

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
    });
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
    const { posts, selectedOption } = this.state;

    return (
      <div className="App">
        <Header />

        <PanelFromLecture>
          Hello, world!
        </PanelFromLecture>

        <PanelFromLecture label="test" isOpenByDefault>
          <PostPreview posts={posts} />
        </PanelFromLecture>

        <PanelFromLecture label="Posts" >
          <div className="d-flex">
            Sorting:
            <button onClick={this.onSortByAuthorClick}>By author</button>
            <button onClick={this.onSortByDefault}>By default</button>

            <DropDown
                options={sortingOptions}
                onSelect={this.onSort}
                selectedOption={selectedOption}
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
        <Footer />
      </div>
    );
  }
}

export default App;
