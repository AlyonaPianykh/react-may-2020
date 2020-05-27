import React, {Component, useState} from 'react';
import { Header } from '../header/HeaderFromLecture';
import { Footer } from '../footer/Footer';
import { PanelFromLecture } from '../panel/PanelFromLecture';
import Search from '../Search/Search';


import TestCard, { PostCard as Card } from '../post-card/PostCard';
import { allComments, postsList, usersList } from '../../constants';


import { DropDown } from '../dropdown/DropDown';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



const sortingOptions = ['Sort By Default', 'Sort By Author'];


class App extends Component {

  state = {
    posts: [...postsList],
    sortingOptions: sortingOptions[0],
    warning : false
  };

  // search on first_name by usersList like: Dibbert or Caitlyn
  search = (event) => {
    const curValue = event.target.elements.input.value
    event.preventDefault()
    const user = usersList.filter((element)=> (curValue === element.first_name))
    if (user[0]) {
      const id = user[0].id
      const filterUser = postsList.filter((element) => (element.user_id === id))
      this.setState({posts:filterUser});
      console.log(user)
    }
    else {
      this.setState({warning:true})

    }
  }
  removeWarning = () => {
    this.setState({warning:false})
  }

  renderList = () => {
    const res = [];

    for (let i = 0; i < 6; i++) {
      const item = postsList[i];
      res.push(<Card post={item} key={item.id} />);
    }

    return res;
  };

  onSort = (selectedOption) => {
    // детально про строку 42 тут: https://javascript.info/destructuring-assignment#array-destructuring
    const [option1, option2] = sortingOptions;

      switch(selectedOption) {
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
        default:  break; // ничего неделаем если опция не входит в массив sortingOptions
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
      const authorA =  usersList.find(user => user.id === a.user_id);
      const authorB =  usersList.find(user => user.id === b.user_id);

      if (authorA.first_name > authorB.first_name) {
        return 1;
      }
      if (authorA.first_name < authorB.first_name) {
        return -1;
      }
      return 0;
    });

    this.setState({
      posts: sorted
    });
  };

  render() {
    const { posts } = this.state;
    const {selectedOption} = this.state

    return (

      <div className="App">
        <Header />

        <PanelFromLecture isOpenByDefault={false}>
          Hello, world!
        </PanelFromLecture>

        <PanelFromLecture label="test">
          One more panel
        </PanelFromLecture>

        <PanelFromLecture label="Posts">
          <div className="d-flex">
            Sorting:
            <button onClick={this.onSortByAuthorClick}>By author</button>
            <button onClick={this.onSortByDefault}>By default</button>


            <DropDown
                onSelect={this.onSort}
                selectedOption={selectedOption}
                options={sortingOptions}
            />
            {/*search*/}
            <Search removeWarning={this.removeWarning} className={this.state.warning && 'warning'} search={this.search} />

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
