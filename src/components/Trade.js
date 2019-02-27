import React, { Component } from 'react';
import TradeSummary from './TradeSummary';

let currentBuyPrice;
let currentSellPrice;

class Trade extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buySummary: 'n/a',
            buyTot: '',
            sellSummary: 'n/a',
            sellTot: ''
        }
        this.buyDetails = this.buyDetails.bind(this);
        this.sellDetails = this.sellDetails.bind(this);
        this.buySymbol = React.createRef();
        this.buyShares = React.createRef();
        this.sellSymbol = React.createRef();
        this.sellShares = React.createRef();
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
            let totalBuy = buyingSha * currentBuyPrice;
            this.setState({ buySummary: 'Buy '+buyingSha+' shares of '+buyingSym+' at $'+currentBuyPrice+' per share.'})
            this.setState({ buyTot: 'TOTAL: $'+totalBuy.toLocaleString('en') })
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
            let totalSell = sellingSha * currentSellPrice;
            this.setState({ sellSummary: 'Sell '+sellingSha+' shares of '+sellingSym+' at $'+currentSellPrice+' per share.'})
            this.setState({ sellTot: 'TOTAL: $'+totalSell.toLocaleString('en') })
        }).catch(err => {
            console.log(err);
        });
        
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
                    />

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
    justifyContent: 'space-evenly'
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
    width: '20%',
    height: '30px',
    border: '1px solid #0f63ff',
    backgroundColor:'#121823',
    fontSize: '20px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '100',
    cursor: 'pointer'
}

export default Trade;