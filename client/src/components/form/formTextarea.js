import React from 'react';
const formTextarea = ({ input, label, meta }) => {
    return (<div>
        <label className="form-label">{label}</label><br />
        <span className="orange-text">{meta.touched && meta.error}</span>
        <textarea {...input} style={{ 'minHeight': '240px' }} />

    </div>)
};

export default formTextarea;