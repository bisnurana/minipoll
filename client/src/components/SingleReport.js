import React, { Component } from 'react';
class SingleMail extends Component {
    render() {
        console.log(this.props.match.params.id)
        return (
            <div>Single report</div>
        );
    }
};
export default SingleMail;