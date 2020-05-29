import React, {Component} from 'react';

const CN = 'may';
export class PostPreview extends Component {
    constructor(props) {
        super(props);

        const {posts} = props;
        this.state = {
            selectedPost: posts[0]
        }
    }

    render() {
        const {selectedPost} = this.state;
        return (
            <div className={CN}>
                <div className = {}></div>
            </div>
        )
    }
}