import React, { Component } from 'react';
class ApprovalCard extends Component {
    state = {}
    constructor(props) {
        super();
        this.props = props
    }
    render() {
        return (
            <div className="ui card">
                <div className="content">
                    {this.props.children}
                    {/* Children element will be displayed here */}
                    <div className="extra content">
                        <div className="ui two buttons">
                            <div className="ui basic green button">
                                Approve
                            </div>
                            <div className="ui basic red button">
                                Reject
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ApprovalCard;