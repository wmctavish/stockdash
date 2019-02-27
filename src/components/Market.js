import React, { Component } from 'react';
import Stockstats from './Stockstats';
import Stocksearch from './Stocksearch';

// Alpha Vantage API Key -  X22KEUCYAWJWZLZ2
// https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&interval=5min&apikey=demo

let symbol;

class Market extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
            symbol: '',
            open: '',
            high: '',
            low: '',
            price: '',
            volume: '',
            prevClose: ''
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
        const url = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' + symbol + '&apikey=X22KEUCYAWJWZLZ2'
        let stockData;
        
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            stockData = data['Global Quote'];
        }).then(() => {
            console.log(stockData);
            let open = stockData[Object.keys(stockData)[1]];
            let high = stockData[Object.keys(stockData)[2]];
            let low = stockData[Object.keys(stockData)[3]];
            let price = stockData[Object.keys(stockData)[4]];
            let volume = stockData[Object.keys(stockData)[5]];
            let previousClose = stockData[Object.keys(stockData)[7]];
            const isHidden = this.state.isHidden === true ? false : false;
            this.setState({
                symbol: symbol, 
                open: open, 
                high: high, 
                low: low, 
                price: price,
                volume: volume,
                prevClose: previousClose, 
                isHidden: isHidden })
        }).catch(err => {
            console.log(err);
        });
    }
    }

 

    render() {
        return(
            <div style={mainspace}>
                <div style={stockstats}>
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
                            price={this.state.price} 
                            volume={this.state.volume} 
                            prevClose={this.state.prevClose}
                            />}
                </div>
                
                <Stocksearch />

            </div>
        );
    }

    
}

const mainspace = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '0',
    width: '84%'
}

const stockstats = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '0',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(#1d283a, #223047)',
    width: '100%',
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