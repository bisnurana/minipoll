import React from 'react';
const RecipientsReport = ({ recipients }) => {
    const eventReport = recipients.map((event, index) => {
        const urlItem = event.urls.map((url, i) => (<li key={i} className="collection-item event-url">• clicked{` `}{url}</li>));
        return (<ul key={index} className="collection with-header">
            <li className="collection-header grey lighten-2 d-flex">
                <i className="material-icons">person</i>
                <span className="email-status">{event.email}</span>
                {event.open && (<span className="email-status event-font green white-text">opened</span>)}
                {event.click && (<span className="email-status event-font green white-text">clicked</span>)}
                <span className="email-date">Last activity:{` `}{new Date(event.dateActive).toLocaleString()}</span>
            </li>
            {!event.recipients && urlItem}
        </ul>)
    })
    return (<div>{eventReport}</div>);
}
export default RecipientsReport;