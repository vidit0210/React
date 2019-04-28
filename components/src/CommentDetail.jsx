import React, { Component } from 'react';
import faker from 'faker'

class Comment extends Component {
    state = {}

    constructor(props) {
        super();
        this.props = props;
    }
    render() {
        return (
            <React.Fragment>
                <div className="ui container comments">
                    <div className="comment">
                        <a href="/" className="avatar">
                            <img src={faker.image.avatar()} alt="avatar" />
                        </a>
                        <div className="content">
                            <a href="/" className="author">
                                {this.props.name_of_author}
                            </a>
                            <div className="metadata">
                                <span className="date">
                                    {this.props.timeAgo}
                                </span>
                            </div>
                            <div className="text">
                                {this.props.text}
                            </div>
                        </div>
                    </div>

                </div>

            </React.Fragment>);
    }
}

export default Comment;