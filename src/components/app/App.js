import React, { Component } from 'react';
import { Header } from '../header/HeaderFromLecture';
import { Footer } from '../footer/Footer';
import { PanelFromLecture } from '../panel/PanelFromLecture';

import { PostCard } from '../post-card/PostCard';
import { allComments, postsList, usersList } from '../../constants';

// todo 0) тут мы делаем импорт дропдауна (уже сделан)
import { DropDown } from '../dropdown/DropDown';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



// todo 1) вот наши опции сортировки, мы будем их использовать в DropDown (уже объявлены)
const sortingOptions = ['Sort By Default', 'Sort By Author', 'Sort By Popular'];
const filteringOptions = ['Filter By Default', 'Filter With Img', 'Filter With Comments'];

class App extends Component {
  state = {
    posts: [...postsList],
    // ++todo: 2) добавить под ключом sortedOption значение sortingOptions[0] (она будет хранить выбранную в данный моменит опцию)
    sortedOption: sortingOptions[0],
    filteredOption: filteringOptions[0]
  };
  // renderArr = [];

  renderPosts = (selectedOption) => {
    // this.renderArr = [...postsList];
    let madeArr;
    if (sortingOptions.includes(selectedOption)) {
      madeArr = this.onSort(selectedOption, this.onFilter(this.state.filteredOption));
    } else if (filteringOptions.includes(selectedOption)) {
      madeArr = this.onSort(this.state.sortedOption, this.onFilter(selectedOption));
    } else {return null}

    this.setState({
      posts: madeArr
    })
  }
  // Просто пример, когда мы вместо рендера после ретьорна, сначала делаем функцию,
  // которая возвращает масив компонентов
  // а после ретёрна просто вызываем эту функцию
  /*renderList = () => {
    const list = [];

    for (let i = 0; i < 6; i++) {
      const item = postsList[i];
      list.push(<Card post={item} key={item.id} />);
    }

    return list;
  };*/


  // todo: 3) обратите внимание на эту функцию, она уже написана,
  //  ее надо использовать в render методе, где кнопки сортировки
  //  передать ее в DropDown как пропсу под названием onSelect (строка 118)
  //  попробуйте продебажить и разобраться как она работает
  onSort = (sortedOption, arr=[...postsList]) => {
    // детально про строку 42 тут: https://javascript.info/destructuring-assignment#array-destructuring
    const [option1, option2, option3] = sortingOptions;
    let sortedArr;

      switch(sortedOption) {
        case option1:
          sortedArr = arr; // return this.onSortByDefault(sortedArr); // вызываем сортировку по дефолту, если 1 элемент массива sortingOptions
          this.setState({
            sortedOption: option1 // записываем в стейт выбранную опцию
          });
          break;
        case option2:
          sortedArr = this.onSortByAuthorClick(arr); // вызываем сортировку по автору, если 2 элемент массива sortingOptions
          this.setState({
            sortedOption: option2 // записываем в стейт выбранную опцию
          });
          break;
        case option3:
          sortedArr = this.onSortByPopularClick(arr); // вызываем сортировку по автору, если 3 элемент массива sortingOptions
          this.setState({
            sortedOption: option3 // записываем в стейт выбранную опцию
          });
          break;
        default:  break; // ничего неделаем если опция не входит в массив sortingOptions
      }
      return sortedArr;
  };

  // ['Filter By Default', 'Filter With Img', 'Filter With Comments']
  onFilter = (filteredOption, arr = [...postsList]) => {
    const [option1, option2, option3] = filteringOptions;
    let sortedArr;

    switch (filteredOption) {
      case option1:
        sortedArr = arr; //this.onFilterByDefault(sortedArr);
        this.setState ({
          filteredOption: option1
        });
        break;
      case option2:
        sortedArr = this.onFilterWithImg(arr);
        this.setState ({
          filteredOption: option2
        });
        break;
      case option3:
        sortedArr = this.onFilterWithComments(arr);
        this.setState ({
          filteredOption: option3
        });
        break;
      default: break;
    }
    return sortedArr;
  }

  // Filter functions
 /* onFilterByDefault = (arr) => {
    this.setState({
      posts: [...this.state.posts]
    })
    console.log(this.state.posts);
  }*/

  onFilterWithImg = (arr) => {
    const filteredPosts = arr.filter((post, index) => post.id % 2 == 0)
    // this.setState({
    //   posts: filteredPosts
    // })
    return filteredPosts;
  }

  onFilterWithComments = (arr) => {
    console.log(arr);
    const filteredPosts = arr.filter((post, index) => {
      const hasComment = allComments.find((comment) => comment.post_id === post.id);
      return hasComment;
    });
    console.log(filteredPosts);
    // this.setState({
    //   posts: filteredPosts
    // })
    return filteredPosts;
  }

  // Select functions

 /* onSortByDefault = (arr) => {
    return arr;
  };*/

  onSortByAuthorClick = (arr) => {
    // const res = [...this.state.posts];

    const sorted = arr.sort(function (a, b) {
      const authorA =  usersList.find(user => user.id === a.user_id);
      const authorB =  usersList.find(user => user.id === b.user_id);

      if (authorA.first_name > authorB.first_name) {
        return 1;
      }
      if (authorA.first_name < authorB.first_name) {
        return -1;
      }
      // a должно быть равным b
      return 0;
    });

    // this.setState({
    //   posts: sorted
    // });
    return sorted;
  };

  onSortByPopularClick = (arr) => {
    // const res = [...this.state.posts];

    const sorted = arr.sort(function (a, b) {
      const lengthOfCommentsA = allComments.filter(comment => comment.post_id === a.id).length;
      const lengthOfCommentsB = allComments.filter(comment => comment.post_id === b.id).length;

      if (lengthOfCommentsA > lengthOfCommentsB) {
        return -1;
      }
      if (lengthOfCommentsA < lengthOfCommentsB) {
        return 1;
      }
      // a должно быть равным b
      return 0;
    });

    // this.setState({
    //   posts: sorted
    // });
    return sorted;
  }

  render() {
    // todo 4) достать также в строке 92 из стейта sortedOption
    const { posts } = this.state;

    return (
      <div className="App">
        <Header />

        <PanelFromLecture isOpenByDefault={false} >
          Hello, world!
        </PanelFromLecture>

        <PanelFromLecture label="test">
          One more panel
        </PanelFromLecture>

        <PanelFromLecture label="Posts">
          <div className="d-flex">
            Sorting:
            {/* todo: тут используется дропдаун
                 ему нужно передать в пропсы такие значение:
                 в onSelect положить this.onSort
                 в sortedOption положить sortedOption (из строки 91)
                 в options положить sortingOptions
            */}

            <DropDown renderPosts={this.renderPosts} onSelect={this.onSort} selectedOption={this.state.sortedOption} options={sortingOptions}/>
            <DropDown renderPosts={this.renderPosts} onSelect={this.onFilter} selectedOption={this.state.filteredOption} options={filteringOptions}/>
          </div>
          <div className="d-flex posts-container">
            {
              posts.map((item, index) => {
                const user = usersList.find(user => user.id === item.user_id);
                const author = user ? `${user.first_name} ${user.last_name}` : '';
                const comments = allComments.filter(comment => comment.post_id === item.id);

                return <PostCard
                  post={item}
                  key={item.id}
                  hasImage={item.id % 2 == 0}
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
