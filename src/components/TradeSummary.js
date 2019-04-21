import React, { Component } from 'react';
import './Trade.css';

class TradeSummary extends Component {

    render() {
        
        return (
            <div style={summaryArea}>

                <div style={h2s}>Locked-In Trades</div>

                <div style={tradeSum}>
                
                    <div class='buySum'>
                    <p style={summary}>{this.props.buySumm}</p>
                    <p style={total}>{this.props.buyTotal}</p>
                    <button style={cancelBuy} onClick={this.props.cancelPurchase}>Cancel Purchase</button>
                    </div>

                    <div class='summaryArea'>
                        <div>{this.props.transSumHeader}</div>
                        <div class='summaryAmnt'>{this.props.transactionSummary}</div>
                        <button class='confirm' onMouseOver={this.buttonHandler} onClick={this.props.confirmTrades}>CONFIRM</button>
                    </div>

                    <div class='buySum'>
                    <p style={summary}>{this.props.sellSumm}</p>
                    <p style={total}>{this.props.sellTotal}</p>
                    <button style={cancelBuy} onClick={this.props.cancelSale}>Cancel Sale</button>
                    </div>
                
                </div>
            </div>
        );
    };
};

const summaryArea = {
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'linear-gradient(#1d283a, #223047)',
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    color: 'white',
    margin: '15px',
    borderRadius: '5px'
}

const tradeSum = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    width: '100%',
    height: 'auto'
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
    width: '180px',
    height: '30px',
    border: '1px solid #0f63ff',
    backgroundColor:'#121823',
    fontSize: '20px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '100',
    cursor: 'pointer',
    marginBottom: '10px'
}

export default TradeSummary;