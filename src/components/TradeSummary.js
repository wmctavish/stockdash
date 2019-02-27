import React, { Component } from 'react';

class TradeSummary extends Component {
    /*
    componentDidMount() {
        this.props.buySumm  === '' ? /* Make confirm button greyed-out  : ''
};   */

    render() {
        return (
            <div style={summaryArea}>

                <div style={h2s}>Locked-In Trades</div>

                <div style={lockedIn}>
                    <div>
                    <p style={summary}>{this.props.buySumm}</p>
                    <p style={total}>{this.props.buyTotal}</p>
                    </div>

                    <div>
                    <p style={summary}>{this.props.sellSumm}</p>
                    <p style={total}>{this.props.sellTotal}</p>
                    </div>
                </div>

                <div><button style={confirm}>CONFIRM</button></div>

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

const confirm = {
    backgroundImage: 'linear-gradient(#0f63ff, #6399ff)',
    border: '1px solid black',
    borderRadius: '5px',
    boxShadow: '0 0 10px 1px black',
    marginTop: '30px',
    width: '210px',
    height: '40px',
    fontSize: '20px',
    fontWeight: '300',
    color: 'white',
    cursor: 'pointer'
}

const lockedIn = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const h2s = {
    fontWeight: '100',
    fontSize: '35px',
    marginBottom: '10px',
    marginTop: '0',
    width: '100%'
}

export default TradeSummary;