import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipientsReport from './form/RecipientsReport';
import * as actions from '../actions';

class SingleMail extends Component {
    state = { isLoading: false }
    componentDidMount() {
        this.props.getSingleReport(this.props.match.params.id, () => {
            this.setState({ isLoading: true });
        });
    }
    handleDelete(id) {
        this.props.deleteEmail(id, () => this.props.history.push('/dashboard'));
    }
    renderContent() {
        if (this.state.isLoading === false) {
            return (<div><div className="progress">
                <div className="indeterminate blue"></div>
            </div></div>);
        }
        if (this.state.isLoading === true && this.props.report !== {}) {
            const { recipientsCount, open, click, dateSent, body, recipients, title, subject, _id } = this.props.report;
            let openRate = open / recipientsCount * 100;
            let clickRate = click / recipientsCount * 100;
            return (
                <div>
                    <div className="row">
                        <div className="col s12 m10 l10 push-m1 push-l1">
                            <div className="card grey lighten-3">
                                <a className=" right red-text cursor mr-1" onClick={() => { if (window.confirm(`Delete ${title} ?`)) this.handleDelete(_id) }}>delete</a><br />
                                <span className="right email-date">{new Date(dateSent).toLocaleString()}</span>
                                <div className="card-content">
                                    <div>
                                        <i className="material-icons medium left grey-text">mail</i>
                                    </div>
                                    <div>
                                        <span className="card-title">{title}</span>
                                        <p >Re: {subject}</p>
                                        <div className="grey lighten-5 emailbox">{body}</div>
                                    </div>
                                </div>

                                <div className="card-content">
                                    <div className="outer-bar blue lighten-4">
                                        <div className="inner-bar blue" style={{ width: `${openRate < 10 ? 12 : openRate}%` }}>
                                            <span className="bar-text white-text">Open:{` `}{open}/{recipientsCount}</span>
                                        </div>
                                    </div>
                                    <span className="email-status">Total recipients: {recipientsCount}</span>
                                    <span className="email-status">Opens:{Math.round(openRate)}%</span>
                                    <span className="email-status">Clicks:{Math.round(clickRate)}%</span>
                                </div>

                                <div>
                                    <div className="card-content"><h5>Events</h5><RecipientsReport dateSent={dateSent} recipients={recipients} /></div>
                                </div>

                            </div>
                            <a className="right cursor" onClick={this.props.history.goBack}>go back</a>
                        </div>
                    </div >
                </div>);
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