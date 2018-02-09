import React from 'react';
const formInput = ({ input, label, type, placeholder, meta }) => {
    return (<div className="my-1">
        <label className="form-label">{label}</label><br />
        <span className="orange-text">{meta.touched && meta.error}</span>
        <input type={type} placeholder={placeholder} {...input} />
    </div>)
};

export default formInput;