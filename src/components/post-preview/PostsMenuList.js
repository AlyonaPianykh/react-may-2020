import React, { Component } from 'react';

const CN = 'may-posts-menu';

export class PostsMenuList extends Component {

  onSelect = (postId) => {
    const { onSelect } = this.props; // переданный обработчик

    return () => {
      // console.log('current id', postId); // id текущего поста
      onSelect && onSelect(postId); // если обработчик передан то вызвать его
    };
  };

  render() {
    const { posts = [] } = this.props; // // PostsLists [{},{},{},...]

    // console.log('MenuList render')
    return (
        <ul className={CN}>
          {
            posts.map((post) => (
                <li key={post.id} className={`${CN}-option`} onClick={this.onSelect(post.id)}>{post.title}</li>))
          }
        </ul>
    );
  }
}



//-------------------------
// import React, { Component } from 'react';
//
// const CN = 'may-posts-menu';
//
// export class PostsMenuList extends Component {

//   render() {
//     const { posts = []  } = this.props;
//
//     // console.log('MenuList render')
//     return (
//         <ul className={CN}>
//           {
//             posts.map((item) => (
//                 <li key={item.id} className={`${CN}-option`} onClick={() => {this.props.onSelect(item.id)}}>{item.title}</li>))
//           }
//         </ul>
//     );
//   }
// }

















// import React, { Component } from 'react';
//
// const CN = 'may-posts-menu';
//
// export class PostsMenuList extends Component {
//
//   onSelect = (id) => {
//     const { onSelect } = this.props; // переданный обработчик
//
//     return () => {
//       // console.log('current id', id);
//       onSelect && onSelect(id);
//     };
//   };
//
//   render() {
//     const { posts = []  } = this.props;
//
//     // console.log('MenuList render')
//     return (
//       <ul className={CN}>
//         {
//           posts.map((item) => (
//             <li key={item.id} className={`${CN}-option`} onClick={this.onSelect(item.id)}>{item.title}</li>))
//         }
//       </ul>
//     );
//   }
// }
