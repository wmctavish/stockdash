import React, { Component } from 'react';

let search;

class Stocksearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestionName: '',
            suggestionSymbol: ''
        }
        this.searchStock = this.searchStock.bind(this);
        this.search = this.search.bind(this);
        this.stock = React.createRef();
        this.suggestions = React.createRef();
    }
    
    componentDidMount() {
        this.stock.current.addEventListener("keydown", this.search);
    }
    
    search(enterKey) {
        if (enterKey.keyCode == 13) {
            this.searchStock();
    }};

    searchStock() {
        search = this.stock.current.value;
        const url = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=' + search + '&apikey=X22KEUCYAWJWZLZ2'
        let stockData;
        let symbol;
        let names;
        //if (enterKey.keyCode == 13) {
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            stockData = data['bestMatches'];
        }).then(() => {
            console.log(stockData);
            symbol = stockData[Object.keys(stockData)[0]];
            names = stockData[Object.keys(stockData)[0]];
            this.setState({
                suggestionName: 'Name: '+names[Object.keys(names)[1]],
                suggestionSymbol: 'Symbol: '+symbol[Object.keys(symbol)[0]] })
        }).catch(err => {
            console.log(err);
        });
    };
    
    render() {
        return (
            <div style={stocksearch}>
                <div style={title}>
                    <div style={subHeading}>Search for best-matching Symbols/Companies</div>
                    <div style={heading}>Search Stocks</div>
                    <div><input ref={this.stock} style={searchBar} placeholder='Search Symbol...'></input>
                    <button style={buttonStyle} onClick={this.searchStock}>Search</button>
                    </div>

                    <div ref={this.suggestions} style={results}>
                        <p style={suggestion}>{this.state.suggestionName}</p>
                        <p style={suggestion}>{this.state.suggestionSymbol}</p>
                    </div>
                </div>
            </div>
        )
    }
}

const stocksearch = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '0',
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

const results = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '0',
    width: '100%',
    height: 'auto',
    fontSize: '30px',
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'center',
    margin: '15px'
}

const suggestion = {
    marginBottom: '5px'
}

const buttonStyle = {
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

export default Stocksearch;