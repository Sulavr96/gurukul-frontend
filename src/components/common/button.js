import React from 'react';


const btnStyle = {
    border: 'none',
    color: 'white',
    display: 'inline-block',
    cursor: 'pointer',
    backgroundColor: '#22a6b3',
    textAlign: 'center',
    textDecoration: 'none',

};


class StyledButton extends React.Component {
    render () {
        return (
            <button className="label theme-bg text-white f-12" style={btnStyle} onClick={(event) => this.props.handleClick(event)}>{this.props.value} </button>
        )
    }
}

export default StyledButton;
