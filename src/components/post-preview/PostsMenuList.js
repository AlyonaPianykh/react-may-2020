import React, { Component } from 'react';

const CN = 'may-posts-menu';

export class PostsMenuList extends Component {

  onSelect = (id) => {
    const { onSelect } = this.props;

    return () => {
      console.log('current id', id);
      onSelect && onSelect(id);
    };
  };

  render() {
    const { posts = []  } = this.props;

    console.log('MenuList render')
    return (
      <ul className={CN}>
        {
          posts.map((item) => (
            <li key={item.id} className={`${CN}-option`} onClick={this.onSelect(item.id)}>{item.title}</li>))
        }
      </ul>
    );
  }
}
