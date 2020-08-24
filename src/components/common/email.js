import React from 'react';

const emailStyle = {
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box'
}

class EmailInput extends React.Component{
    render () {
        return (
            <input type="email" style={emailStyle} placeholder={this.props.placeholder} value={this.props.value} onChange={(e)=>this.props.onChange(e.target.value)} />
        )
    }
}

export default EmailInput;
