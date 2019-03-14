import React, { Component } from 'react';

class Stockstats extends Component {

    render() {
        return(
            <div style={summary}>
                <div style={statsStyle}>
                    <p style={symbolHeading}>Summary for {this.props.symbol}</p>
                    <p style={subSymbol}>Accurate within 1min or less</p>
                </div>

                <div style={stats}>
                    <div style={detail}>OPEN: <div style={open}>{this.props.open}</div></div>
                    <div style={detail}>HIGH: <div style={high}>{this.props.high}</div></div>
                    <div style={detail}>LOW: <div style={low}>{this.props.low}</div></div>
                    <div style={detail}>PRICE: <div style={open}>{this.props.price}</div></div>
                    <div style={detail}>VOLUME: <div style={open}>{this.props.volume}</div></div>
                    <div style={detail}>PREVIOUS CLOSE: <div style={open}>{this.props.prevClose}</div></div>
                </div>
            </div>
        );
    }
}

const summary = {
    width: '100%',
    justifyContent: 'center'
}

const stats = {
    marginRight: '15%',
    marginLeft: '15%',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '300',
    justifyContent: 'center'
}   

const detail = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    textAlign: 'left',
    marginBottom: '20px',
}

const open = {
    width: '100%',
    marginLeft: '0px',
    textAlign: 'right',
}

const high = {
    width: '100%',
    marginLeft: '0px',
    color: 'green',
    textAlign: 'right',
}

const low = {
    width: '100%',
    marginLeft: '0px',
    color: 'red',
    textAlign: 'right',
}

const statsStyle = {
    marginTop: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    textAlign: 'left',
    width: '100%',
    fontSize: '15px'
}

const symbolHeading = {
    fontSize: '25px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '100',
    marginTop: '0',
    marginBottom: '0'
}

const subSymbol = {
    fontSize: '15px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '100',
    marginTop: '0',
    marginBottom: '20px'
}

export default Stockstats;