import React from 'react';

import { Comment } from '../comment/Comment';
import DefaultImg from '../../assets/default-empty-img.png';
import './PostCard.scss';

// todo: переписать эту компоненту, чтоб она стала классовой
//  в ней должно появиться свойство state
//  в котором будет флажок showComments
//  и будет кнопка, лейба которой будет либо "show comments" либо "hide comments"

export class PostCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            showComments: 'show comment'
        }
    }

    onClick = () => {
        console.log ('click');
        this.state.isOpen ? this.setState( {
            showComments: 'show comment'
        }) : this.setState( {
            showComments: 'hide comment'
        });
        this.setState( {
            isOpen: !this.state.isOpen
        })
    };
    // toggle2 = () => {
    //     // todo: здесь должно быть открывание/закрывание дропдауна с помощью this.setState
    //     //  сделать так же как в компоненте components/panel/PanelFromLecture в методе onClick
    //     this.setState({ showComments:!this.setState.showComments})
    // };

    render() {
        const {post, hasImage, comments = [], author} = this.props;
        console.log('hasImage', hasImage);
    const {title, body} = post;
    const kittyUrl = `https://cataas.com/cat/says/hello%20world!?${Math.random() * 1000}`;
    const renderImage = () => {
      return hasImage ? (
          <img src={kittyUrl}/>
      ) : (
          <img src={DefaultImg}/>
      );
    };
            const {isOpen} = this.state;
            const {showComments} = this.state;
    return (

        <div className="may-post-card card">

            {/*<div>*/}
            {/*    <input type="checkbox" />*/}
            {/*    <p>Placeholder text here</p>*/}
            {/*</div>*/}
          {hasImage && (
              <div className="may-post-card-img" id="my-block" onClick={() => {
                alert('ghvcdhfvbdfsjvbdf');
              }}>
                <img src={kittyUrl}/>
              </div>
          )
          }
          {!hasImage && (
              <div className="may-post-card-img">
                <img src={DefaultImg}/>
              </div>
          )}

          <div className="card-body">
            <h4 className="card-title title">{title}</h4>
            <div className="card-text body">
              {body}
            </div>
            <blockquote className="blockquote">
              <footer className="blockquote-footer">Author:
                <cite title="Source Title">{author}</cite>
              </footer>
            </blockquote>
              <button onClick={this.onClick}>{showComments}</button>
          </div>

            <div className={`may-post-card  ${isOpen ? 'show' : 'hide'}`}>
                {!!comments.length && <label>Comments:</label>}
                {
                    comments.map(comment => (<Comment comment={comment} key={comment.id}/>))
                }
                <div/>


          {/*{!!comments.length && <label>Comments:</label>}*/}
          {/*{*/}
          {/*  comments.map(comment => (<Comment comment={comment} key={comment.id}/>))*/}
          {/*}*/}

        </div>
        </div>
    );
  }
}
export default PostCard;
