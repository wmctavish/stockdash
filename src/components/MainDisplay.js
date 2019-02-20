import React, { Component } from 'react';
import GraphBox, { PieBox } from './GraphBox';
import GraphSwitch from './GraphSwitch';

// Chart Datasets
const chartData1 = () => {
    return {
        labels:['October','November', 'December', 'January', 'February', 'March', 'April'],
        datasets:[{
            label:'Performance',
            data:[
                80,
                94,
                75,
                83,
                63,
                95,
                88
            ],
            borderColor: '#0f63ff'
        }]
        };
    };

const chartData2 = () => {
    return {
    labels:['October','November', 'December', 'January', 'February', 'March', 'April'],
    datasets:[{
        label:'Growth',
        data:[
            50,
            100,
            75,
            110,
            125,
            96,
            83
        ],
        borderColor: '#0f63ff'
    }]
    };
};

// Pie chart data
const chartData3 = () => {
    return {
    labels:['Pumpkins','Tomacco', 'Animotion', 'Trans-Atlantic Zepplin', "Congreve's Inflammable Powders", 'US Hay'],
    datasets:[{
        label:'Shares',
        data:[
            50,
            100,
            15,
            70,
            30,
            96
        ],
        backgroundColor: [
            '#0f63ff',
            '#4f88ff',
            '#709fff',
            '#87afff',
            '#9bbdff',
            '#bcd3ff'
        ],
        borderColor: '#0f63ff'
    }]
    };
};

const chartData4 = () => {
    return {
        labels:['June','July', 'August', 'September','October','November', 'December', 'January', 'February', 'March', 'April'],
        datasets:[{
            label:'Balance',
            data:[
                5320,
                1080,
                7500,
                8110,
                6425,
                9006,
                8350,
                12300,
                9080,
                13005,
                11238
            ],
            borderColor: '#0f63ff',
            lineTension: 0
        }]
        };
}

// Main display area containing charts/graphs
class MainDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Performance',
            subtitle: 'Portfolio Trends',
            view: chartData1
        }
        this.switchGraph = this.switchGraph.bind(this);
    }

    switchGraph() {
        const otherTitle = this.state.title === 'Performance' ? 'Growth' : 'Performance';
        const otherSub = this.state.subtitle === 'Portfolio Trends' ? 'Overall Health' : 'Portfolio Trends';
        const otherGraph = this.state.view === chartData1 ? chartData2 : chartData1;
        this.setState({view: otherGraph, title: otherTitle, subtitle: otherSub});
    }

    render() {
        return(
            <div style={graphSpace}>
                <div style={mainGraph}> 
                <div style={subName}>{this.state.subtitle}</div>
                    <div style={head}>   
                        <div style={graphName}>{this.state.title}</div>
                        <GraphSwitch onClick={this.switchGraph} />
                    </div>
                    <GraphBox data={this.state.view} />
                </div>

                <div style={subGraph}>
                    <div style={subName}>Share Distribution</div>
                    <div style={graphName}>Portfolio</div>
                    <PieBox data={chartData3} />
                </div>
            
                <div style={subGraph}>
                    <div style={subName}>Account Totals</div>
                    <div style={graphName}>Balance</div>
                    <GraphBox data={chartData4} />
                </div>
                
            </div>
        );
    }
}


// CSS
const head = {
    display: 'flex',
    justifyContent: 'space-between'
}

const graphName = {
    fontSize: '35px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '100'
}

const subName = {
    textAlign: 'left',
    fontSize: '15px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '100'
}

const graphSpace = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '90%',
    height: 'auto' 
}

const mainGraph = {
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

const subGraph = {
    backgroundImage: 'linear-gradient(#1d283a, #223047)',
    width: '45%',
    height: '450px',
    textAlign: 'left',
    color: 'white',
    padding: '15px',
    margin: '15px',
    borderRadius: '5px'
}

export default MainDisplay;