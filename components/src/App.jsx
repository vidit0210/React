import React, { Component } from 'react';
import Comment from './CommentDetail'
import ApprovalCard from './ApproveCard'


class App extends Component {
    state = {}
    render() {
        return (
            <div>
                {/* Using Prop */}
                <ApprovalCard>
                    <Comment name_of_author="Sam" timeAgo="Today at 5:00PM" text="Good One" />
                </ApprovalCard>
                <ApprovalCard>
                    <Comment name_of_author="Alex" timeAgo="Yesterday at 9:00PM" text="Liked it!" />
                </ApprovalCard>
                <ApprovalCard>
                    <Comment name_of_author="Reen" timeAgo="Wednesday at 11:15AM" text="wow" />
                </ApprovalCard>
            </div>

        );
    }
}

export default App;