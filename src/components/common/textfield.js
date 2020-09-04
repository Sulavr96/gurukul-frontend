import React from "react";

class StyledTextField extends React.Component{
    render(){
        return(
            <textarea className="form-control" placeholder={this.props.placeholder} rows="3"
                      value={this.props.value} onChange={(e)=>this.props.onChange(e.target.value)}/>
        )
    }
}

export default StyledTextField;