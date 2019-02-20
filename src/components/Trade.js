import React, { Component } from 'react';

class Trade extends Component {
    render() {
        return(
            <div style={mainSpace}>
                <div style={heading}>Trade</div>
            </div>
        );
    }
}

const mainSpace = {
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'linear-gradient(#1d283a, #223047)',
    width: '100%',
    height: '300px',
    textAlign: 'center',
    color: 'white',
    margin: '15px',
    padding: '15px',
    borderRadius: '5px'
}

const heading = {
    textAlign: 'left',
    fontSize: '35px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '100'
}

export default Trade;