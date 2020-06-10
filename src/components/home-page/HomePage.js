import React, { Component } from 'react';
import uniqueId from 'uniqid';

import { PanelFromLecture } from '../panel/PanelFromLecture';
import { PostPreview } from '../post-preview/PostPreview';
import Card from '../post-card/PostCard';
import { allComments, postsList, usersList } from '../../constants';
import AddPostForm from '../post-form/PostForm';
import { DropDown } from '../dropdown/DropDown';

import AddUserForm from '../user-form/AddUserForm';

import './HomePage.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const sortingOptions = ['Sort By Default', 'Sort By Author'];

class HomePage extends Component {
  state = {
    posts: [...postsList],
    selectedOption: sortingOptions[0],
    users: usersList
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

  addPost = (newPost) => {
    this.setState((prevState) => {
      return {
        posts: [{
          ...newPost,
          id: uniqueId(),
        }, ...prevState.posts]
      }
    });
  };

  render() {
    const { posts, selectedOption, users } = this.state;

    return (
      <div className="App">

        <PanelFromLecture label="Users" >
          <AddUserForm/>
        </PanelFromLecture>

        <PanelFromLecture label="test" >
          <PostPreview posts={posts} />
        </PanelFromLecture>

        <PanelFromLecture label="Posts">
          <div className="d-flex">
            Sorting:
            <button className="btn btn-outline-primary m-2" onClick={this.onSortByAuthorClick}>By author</button>
            <button className="btn btn-outline-primary m-2" onClick={this.onSortByDefault}>By default</button>

            <DropDown
              onSelect={this.onSort}
              selectedOption={selectedOption}
              options={sortingOptions}
            />
          </div>
          <div className="d-flex posts-container">

            <AddPostForm onAddPost={this.addPost} users={users} />

            {
              posts.map((item, index) => {
                const user = usersList.find(user => user.id === item.user_id);
                const author = user ? `${user.first_name} ${user.last_name}` : '';
                const comments = allComments.filter(comment => comment.post_id === item.id);

                return <Card
                  post={item}
                  key={item.id}
                  author={author}
                  comments={comments}
                />;
              })
            }
          </div>
        </PanelFromLecture>
      </div>
    );
  }
}

export default HomePage;
