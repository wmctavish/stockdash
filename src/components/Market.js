import React, { Component } from 'react';
import Stockstats from './Stockstats';

// Alpha Vantage API Key -  X22KEUCYAWJWZLZ2
// https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&interval=5min&apikey=demo

let symbol;
let currentData;

class Market extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
            symbol: '',
            open: '',
            high: '',
            low: '',
            close: ''
        }
        this.searchStock = this.searchStock.bind(this);
        this.stock = React.createRef();
    }
    
    componentDidMount() {
        this.stock.current.addEventListener("keyup", this.searchStock);
    }

    searchStock(event) {
      if (event.keyCode === 13) {  
        symbol = this.stock.current.value;
        const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + symbol + '&outputsize=compact&interval=5min&apikey=X22KEUCYAWJWZLZ2'
        let stockData;
        
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            stockData = data['Time Series (5min)'];
        }).then(() => {
            currentData = stockData[Object.keys(stockData)[0]];
        }).then(() => {
            let open = currentData['1. open'];
            let high = currentData['2. high'];
            let low = currentData['3. low'];
            let close = currentData['4. close'];
            this.setState({
                symbol: symbol, 
                open: open, 
                high: high, 
                low: low, 
                close: close, 
                isHidden: !this.state.isHidden })
        }).catch(err => {
            console.log(err);
        });
    }
    }

 

    render() {
        return(
            <div style={mainSpace}>
                <div style={title}>
                    <div style={subHeading}>Individual Stock Info At A Glance</div>
                    <div style={heading}>Current Values</div>
                    <div><input ref={this.stock} style={searchBar} placeholder='Enter Symbol...'></input></div>
                </div>

                
                {!this.state.isHidden && <Stockstats 
                        symbol={this.state.symbol} 
                        open={this.state.open} 
                        high={this.state.high} 
                        low={this.state.low} 
                        close={this.state.close} />}
                
            </div>
        );
    }

    
}

const mainSpace = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(#1d283a, #223047)',
    width: '100%',
    height: 'auto',
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

export default Market;