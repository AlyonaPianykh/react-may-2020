import React, {Component} from 'react';
import './PostPreview.scss'


const CN = 'may-post-menu';
class PostMenuList extends Component {
    render() {
        const {posts =[]} = this.props;
        return (
            <ul className={CN}>
                {
                    posts.map((item)=>(<li key={item.id} className='option'>{item.title}</li>))
                }
            </ul>
        );
    }
}

export default PostMenuList;