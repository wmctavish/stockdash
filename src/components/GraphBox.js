import React, { Component } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import '.././index.css';

class GraphBox extends Component {
    render() {
        return (
                <div>
                    <Line 
                        data={this.props.data}
                        width={100}
                        height={250}
                        options={
                            {maintainAspectRatio: false}
                            }/>   
                </div>
        );
    }
}

export class PieBox extends Component {
    render() {
        return (
            <div>
                <Pie
                    data={this.props.data}
                    height={125}
                    options={
                        {cutoutPercentage:20},
                        {legend: {position: 'bottom'}}
                    }
                />
            </div>
        );
    }
}

// CSS

const mainStyle = {
    backgroundImage: 'linear-gradient(#1d283a, #223047)',
    textAlign: 'center',
    color: 'white',
    height: '350px',
    width: '80%',
    margin: '15px',
    borderRadius: '5px'
}

const graphBoxStyle = {
    backgroundImage: 'linear-gradient(#1d283a, #223047)',
    textAlign: 'center',
    color: 'white',
    margin: '15px',
    borderRadius: '5px'
}

export default GraphBox;