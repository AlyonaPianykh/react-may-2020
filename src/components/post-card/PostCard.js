import React,{ Component } from 'react';

import { Comment } from '../comment/Comment';
import DefaultImg from '../../assets/default-empty-img.png';
import './PostCard.scss';

// todo: переписать эту компоненту, чтоб она стала классовой
//  в ней должно появиться свойство state
//  в котором будет флажок showComments
//  и будет кнопка, лейба которой будет либо "show comments" либо "hide comments"
const buttonLabel = ['Show COMMENTS','Hide COMMENTS']

export class PostCard extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      showComments: false,
      selectedLabel: buttonLabel[0]
    }
  }

  changeButton = () => {
    const  [ show, hide ] = buttonLabel;

    this.setState({showComments:!this.state.showComments});
    this.state.showComments === false ?
      this.setState({selectedLabel:hide}) :
      this.setState({selectedLabel:show})
  };

  render() {
      const { post, hasImage, comments = [], author } = this.props;
      // console.log('hasImage', hasImage);
      const { title, body } = post;
      const kittyUrl = `https://cataas.com/cat/says/hello%20world!?${Math.random() * 1000}`;
      const { showComments, selectedLabel } = this.state;

      const renderImage = () => {
        return hasImage ? (
            <img src={kittyUrl} />
        ) : (
            <img src={DefaultImg} />
        );
      };

      return (
          <div className="may-post-card card">
            { hasImage && (
                <div className="may-post-card-img" id="my-block" onClick={() => {
                  alert("its fun, isn't it?");
                }}>
                  <img src={ kittyUrl } />
                </div>
            )
            }
            { !hasImage && (
                <div className="may-post-card-img">
                  <img src={ DefaultImg } />
                </div>
            )}

            <div className="card-body">
              <h4 className="card-title title">{ title }</h4>
              <div className="card-text body">
                {body}
              </div>
              <blockquote className="blockquote">
                <footer className="blockquote-footer">Author:
                  <cite title="Source Title">{ author }</cite>
                </footer>
              </blockquote>
            </div>

            { !!comments.length && <button className={ showComments === false ?
                                                                      'btn btn-success' :
                                                                      "btn btn-outline-danger"}
                                           onClick={this.changeButton}>
                                    { selectedLabel }
                                  </button>
            }
            { showComments &&
              comments.map(comment => ( <Comment comment={ comment } key={ comment.id }/> ))
            }
          </div>
      )
  }
}

export default PostCard;
