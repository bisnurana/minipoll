import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEmails } from '../../actions';
class EmailsList extends Component {
    componentDidMount() {
        this.props.getEmails();
    }
    render() {
        return (<div>All mail component</div>);
    }
}
function mapStateToProps(state) {
    return { emails: state.emails };
}
export default connect(mapStateToProps, { getEmails })(EmailsList);