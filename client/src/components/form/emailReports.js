import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getReports } from '../../actions'

class EmailReports extends Component {
  componentDidMount() {
    this.props.getReports();
  }
  render() {
    return (<div>Mail Reports component</div>
    );
  }
}
function mapStateToProps(state) {
  return { reports: state.reports };
}
export default connect(mapStateToProps, { getReports })(EmailReports);