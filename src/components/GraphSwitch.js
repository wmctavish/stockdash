import React, { Component } from 'react';

class GraphSwitch extends Component {
    render() {
        return(
            <button onClick={this.props.onClick} style={buttonStyle}>
                Switch View
            </button>
        )
    }
}

const buttonStyle = {
    color: 'white',
    borderRadius: '3px',
    border: '1px solid #0f63ff',
    backgroundColor:'#121823',
    fontSize: '15px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '100',
    cursor: 'pointer'
}

export default GraphSwitch;