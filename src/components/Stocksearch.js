import React, { Component } from 'react';

class Stocksearch extends Component {
    render() {
        return (
            <div style={stocksearch}>
                <div style={title}>
                    <div style={subHeading}>Search for best-matching Symbols/Companies</div>
                    <div style={heading}>Search Stocks</div>
                    <div><input ref={this.stock} style={searchBar} placeholder='Search Symbol...'></input></div>
                </div>
            </div>
        )
    }
}

const stocksearch = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(#1d283a, #223047)',
    width: '100%',
    height: '200px',
    textAlign: 'center',
    color: 'white',
    margin: '15px',
    padding: '15px',
    borderRadius: '5px'
}

const title = {
    width: '100%'
}

const subHeading = {
    textAlign: 'left',
    fontSize: '15px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '100'
}

const heading = {
    width: '100%',
    marginLeft: '0',
    textAlign: 'left',
    fontSize: '35px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '100'
}

const searchBar = {
    width: '70%',
    height: '40px',
    fontSize: '30px',
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'center',
    margin: '15px'
}


export default Stocksearch;