import React, { Component } from 'react';

class Trade extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    someFunction() {
        let thisVar = 1;
        const displayVar = () => {
            console.log(thisVar);
        }

        const changeVar = (newValue) => {
            thisVar = newValue;
        }

        changeVar('and now this')
        displayVar()
    }


    render() {
        return(
            <div style={mainSpace}>
                <div style={heading}>Trade</div>

                <div style={tradeArea}>
                <div style={buySide}>
                    <div>
                        <h3 style={h3s}>Symbol</h3>
                        <input style={inputs}></input>
                    </div>

                    <div>
                        <h3 style={h3s}>Number of Shares</h3>
                        <input style={inputs}></input>
                    </div>

                    <button style={buyButton} onClick={this.someFunction}>BUY</button>
                </div>

                <div style={sellSide}>
                    <div>
                        <h3 style={h3s}>Symbol</h3>
                        <input style={inputs}></input>
                    </div>

                    <div>
                        <h3 style={h3s}>Number of Shares</h3>
                        <input style={inputs}></input>
                    </div>

                    <button style={buyButton} onClick={this.someFunction}>SELL</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mainSpace = {
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'linear-gradient(#1d283a, #223047)',
    width: '100%',
    height: '300px',
    textAlign: 'center',
    color: 'white',
    margin: '15px',
    padding: '15px',
    borderRadius: '5px'
}

const tradeArea = {
    display: 'flex',
    justifyContent: 'space-evenly'
}

const heading = {
    textAlign: 'left',
    fontSize: '35px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '100'
}

const buySide = {
    width: '100%',
    fontFamily: 'Roboto, sans-serif'
}

const sellSide = {
    width: '100%',
    fontFamily: 'Roboto, sans-serif'
}

const h3s = {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '100',
    margin: '5px'
}

const inputs = {
    width: '30%',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '100',
    textAlign: 'center',
    margin: '10px'
}

const buyButton = {
    backgroundImage: 'linear-gradient(#0f63ff, #6399ff)',
    border: '1px solid black',
    borderRadius: '5px',
    boxShadow: '0 0 10px 1px black',
    marginTop: '30px',
    width: '150px',
    height: '60px',
    fontSize: '20px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '300',
    color: 'white',
    cursor: 'pointer'
}

export default Trade;