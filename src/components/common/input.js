import React from 'react';

const textStyle = {
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box'
}

class StyledInput extends React.Component{
    render () {
        return (
            <input type="text" pattern="[a-zA-Z0-9]+" style={textStyle} placeholder={this.props.placeholder} value={this.props.value} onChange={(e)=>this.props.onChange(e.target.value)} />
        )
    }
}

export default StyledInput;
