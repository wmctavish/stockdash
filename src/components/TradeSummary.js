import React, { Component } from 'react';
import './Trade.css';

class TradeSummary extends Component {

    render() {
        
        return (
            <div style={summaryArea}>

                <div style={h2s}>Locked-In Trades</div>

                <div style={lockedIn}>
                    <div>
                    <p style={summary}>{this.props.buySumm}</p>
                    <p style={total}>{this.props.buyTotal}</p>
                    <button style={cancelBuy}>Cancel Purchase</button>
                    </div>

                    <div>
                    <p style={summary}>{this.props.sellSumm}</p>
                    <p style={total}>{this.props.sellTotal}</p>
                    <button style={cancelBuy}>Cancel Sale</button>
                    </div>
                </div>

                <div><button class='confirm' onMouseOver={this.buttonHandler} >CONFIRM</button></div>

            </div>
        );
    };
};

const summaryArea = {
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'linear-gradient(#1d283a, #223047)',
    width: '96%',
    height: 'auto',
    alignItems: 'center',
    color: 'white',
    margin: '15px',
    padding: '15px',
    borderRadius: '5px'
}

const summary = {
    fontSize: '20px',
    fontWeight: '100',
}

const total = {
    fontSize: '25px',
    fontWeight: '300',
    textAlign: 'center'
}

const lockedIn = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}

const h2s = {
    fontWeight: '100',
    fontSize: '35px',
    marginBottom: '10px',
    marginTop: '0',
    width: '100%'
}

const cancelBuy = {
    color: 'white',
    borderRadius: '3px',
    width: '100%',
    height: '30px',
    border: '1px solid #0f63ff',
    backgroundColor:'#121823',
    fontSize: '20px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '100',
    cursor: 'pointer'
}

export default TradeSummary;