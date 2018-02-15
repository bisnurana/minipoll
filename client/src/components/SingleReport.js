import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SingleMail extends Component {
    state = { isLoading: false }
    componentDidMount() {
        this.props.getSingleReport(this.props.match.params.id, () => {
            this.setState({ isLoading: true });
        });
    }
    renderContent() {
        const { report } = this.props;
        if (this.state.isLoading === false) {
            return (<div><div className="progress">
                <div className="indeterminate blue"></div>
            </div></div>);
        }
        if (this.state.isLoading === true && report !== {}) {
            return (
                <div>
                    <div className="row">
                        <div className="col s12 m10 l10 push-m1 push-l1">
                            <div className="card grey lighten-3">
                                <span className="right email-date">{new Date(report.dateSent).toLocaleString()}</span>
                                <div className="card-content">
                                    <div className="left">
                                        <i className="material-icons medium left grey-text">mail</i>
                                    </div>
                                    <div>
                                        <span className="card-title">{report.title}</span>
                                        <p >Re: {report.subject}</p>
                                        <div className="grey lighten-5 emailbox">{report.body}</div>
                                    </div>

                                </div>
                                <div className="card-action white-text grey darken-2">
                                    <span className="email-status">Recipients: {report.recipientsCount}</span>
                                    <span className="email-status">Opens:{report.open / report.recipientsCount * 100}%</span>
                                    <span className="email-status">Clicks:{report.click / report.recipientsCount * 100}%</span>
                                </div>
                            </div>
                        </div>
                    </div ></div>);
        }
        else {
            return (<div>Draft not found!</div>);
        }
    }
    render() {
        return (
            <div>{this.renderContent()}</div>
        );
    }
};
function mapStateToProps(state) {
    return { report: state.singleReport }
}
export default connect(mapStateToProps, actions)(SingleMail);