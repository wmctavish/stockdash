import React, { Component } from 'react';
import TradeSummary from './TradeSummary';

let currentBuyPrice;
let currentSellPrice;
let totalSell = 0;
let totalBuy = 0;

class Trade extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buySummary: 'n/a',
            buyTot: '',
            sellSummary: 'n/a',
            sellTot: '',
            transSumHeader: '',
            transactionSummary: ''
        }
        this.buyDetails = this.buyDetails.bind(this);
        this.sellDetails = this.sellDetails.bind(this);
        this.cancelPurchase = this.cancelPurchase.bind(this);
        this.cancelSale = this.cancelSale.bind(this);
        this.confirmTrades = this.confirmTrades.bind(this);
        this.buySymbol = React.createRef();
        this.buyShares = React.createRef();
        this.sellSymbol = React.createRef();
        this.sellShares = React.createRef();
        this.tradeConf = React.createRef();
    }

    buyDetails() {
        let buyingSym = this.buySymbol.current.value
        let buyingSha = this.buyShares.current.value

        const url = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' + buyingSym + '&apikey=X22KEUCYAWJWZLZ2';

        let stockData;
        
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            stockData = data['Global Quote'];
        }).then(() => {
            currentBuyPrice = stockData[Object.keys(stockData)[4]];
        }).then(() => {
            totalBuy = buyingSha * currentBuyPrice;
            this.setState({ buySummary: 'Buy '+buyingSha+' shares of '+buyingSym.toUpperCase()+' at $'+currentBuyPrice.toLocaleString('en', {maximumFractionDigits: 2, minimumFractionDigits: 2})+' per share.'})
            this.setState({ buyTot: 'TOTAL: $'+totalBuy.toLocaleString('en', {maximumFractionDigits: 2, minimumFractionDigits: 2}) })
        }).catch(err => {
            console.log(err);
        });
    }

    sellDetails() {
        let sellingSym = this.sellSymbol.current.value
        let sellingSha = this.sellShares.current.value

        const url = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' + sellingSym + '&apikey=X22KEUCYAWJWZLZ2';

        let stockData;
        
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            stockData = data['Global Quote'];
        }).then(() => {
            currentSellPrice = stockData[Object.keys(stockData)[4]];
        }).then(() => {
            totalSell = sellingSha * currentSellPrice;
            this.setState({ sellSummary: 'Sell '+sellingSha+' shares of '+sellingSym.toUpperCase()+' at $'+currentSellPrice.toLocaleString('en', {maximumFractionDigits: 2, minimumFractionDigits: 2})+' per share.'})
            this.setState({ sellTot: 'TOTAL: $'+totalSell.toLocaleString('en', {maximumFractionDigits: 2, minimumFractionDigits: 2}) })
        }).catch(err => {
            console.log(err);
        });
        
    }

    cancelPurchase() {
        this.setState({ buySummary: 'n/a' });
        this.setState({ buyTot: ''});
    };

    cancelSale() {
        this.setState({ sellSummary: 'n/a' });
        this.setState({ sellTot: ''});
    };

    confirmTrades() {
        this.setState({ transSumHeader: 'Trade Totals:'})
        this.setState({ transactionSummary: '$ '+(totalSell - totalBuy).toLocaleString('en', {maximumFractionDigits: 2, minimumFractionDigits: 2}) });
    }

    render() {
        return(
            <div style={section}>
                <div style={heading}>Trade Summary</div>

                <TradeSummary 
                    buySumm={this.state.buySummary} 
                    buyTotal={this.state.buyTot}
                    sellSumm={this.state.sellSummary} 
                    sellTotal={this.state.sellTot}
                    cancelPurchase={this.cancelPurchase}
                    cancelSale={this.cancelSale}
                    confirmTrades={this.confirmTrades}
                    transSumHeader={this.state.transSumHeader}
                    transactionSummary={this.state.transactionSummary}
                />

                <div ref={this.tradeConf} style={tradeConf}>

                </div>

                <div style={tradeArea}>
                <div style={buySide}>
                    <div style={container}>
                        <div style={sideHeading}><h2 style={h2s}>Buy</h2></div>
                        <h3 style={h3s}>Symbol</h3>
                        <input ref={this.buySymbol} style={inputs}></input>
                    </div>

                    <div style={container}>
                        <h3 style={h3s}>Number of Shares</h3>
                        <input ref={this.buyShares} style={inputs}></input>
                    </div>

                    <button style={buyButton} onClick={this.buyDetails}>PROCESS</button>
                </div>

                <div style={sellSide}>
                    <div style={container}>
                    <div style={sideHeading}><h2 style={h2s}>Sell</h2></div>
                        <h3 style={h3s}>Symbol</h3>
                        <input ref={this.sellSymbol} style={inputs}></input>
                    </div>

                    <div style={container}>
                        <h3 style={h3s}>Number of Shares</h3>
                        <input ref={this.sellShares} style={inputs}></input>
                    </div>

                    <button style={buyButton} onClick={this.sellDetails}>PROCESS</button>
                    </div>
                </div>
            </div>
        );
    }
}

const section = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '0',
    width: '100%',
    color: 'white',
    margin: '15px',
    padding: '15px',
    borderRadius: '5px',
    fontFamily: 'Roboto, sans-serif'
}

const tradeArea = {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '15px',
    width: '100%'
}

const heading = {
    textAlign: 'left',
    fontSize: '35px',
    fontWeight: '100'
}

const buySide = {
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'linear-gradient(#1d283a, #223047)',
    width: '100%',
    height: '300px',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    margin: '15px',
    padding: '15px',
    borderRadius: '5px'
}

const sellSide = {
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'linear-gradient(#1d283a, #223047)',
    width: '100%',
    height: '300px',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    margin: '15px',
    padding: '15px',
    borderRadius: '5px'
}

const sideHeading = {
    width: '100%',
    textAlign: 'left'
}

const container = {
    width: '100%'
}

const h2s = {
    fontWeight: '100',
    fontSize: '35px',
    marginBottom: '10px',
    marginTop: '0'
}

const h3s = {
    fontWeight: '100',
    margin: '5px'
}

const inputs = {
    width: '30%',
    fontWeight: '100',
    textAlign: 'center',
    margin: '10px'
}

const buyButton = {
    color: 'white',
    borderRadius: '3px',
    width: '120px',
    height: '30px',
    border: '1px solid #0f63ff',
    backgroundColor:'#121823',
    fontSize: '20px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '100',
    cursor: 'pointer'
}

let tradeConf = {
    display: 'none',
    width: '100%',
    minHeight: '150px',
    margin: '15px',
    backgroundImage: 'linear-gradient(#1d283a, #223047)',
    borderRadius: '5px',
    transition: 'all 0.3s ease-in-out'
}

export default Trade;