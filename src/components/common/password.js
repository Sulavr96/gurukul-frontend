import React from 'react';

const passwordStyle = {
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box'
}

class PasswordInput extends React.Component{
    render () {
        return (
            <input type="password" style={passwordStyle} placeholder={this.props.placeholder} value={this.props.item} onChange={(e)=>this.props.onChange(e.target.value)} />
        )
    }
}

export default PasswordInput;
