import React, { Component } from 'react';

class Stockstats extends Component {

    render() {
        return(
            <div style={summary}>
                <div style={statsStyle}>
                    <p style={symbolHeading}>Summary for {this.props.symbol}</p>
                    <p style={subSymbol}>Accurate within 5min or less</p>
                </div>

                <div style={stats}>
                    <div style={detail}>OPEN: <div style={open}>{this.props.open}</div></div>
                    <div style={detail}>HIGH: <div style={high}>{this.props.high}</div></div>
                    <div style={detail}>LOW: <div style={low}>{this.props.low}</div></div>
                    <div style={detail}>CLOSE: <div style={open}>{this.props.close}</div></div>
                </div>
            </div>
        );
    }
}

const summary = {
    width: '100%',
    alignItems: 'center'
}

const stats = {
    marginRight: '30%',
    marginLeft: '30%',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '300'
}

const detail = {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: '20px'
}

const open = {
    marginLeft: '60px'
}

const high = {
    marginLeft: '60px',
    color: 'green'
}

const low = {
    marginLeft: '60px',
    color: 'red'
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