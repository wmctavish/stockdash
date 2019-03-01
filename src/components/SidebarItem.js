import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SidebarItem extends Component {
    getStyle = () => {
            return {
                padding: '15px',
                cursor: 'pointer',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: '100'
            };
        }

    render() {
        return (
            <div style={container}>
                <img style={iconStyle} src={this.props.page.imgsrc}></img>
                <p style={this.getStyle()} onClick={this.props.showView}>{ this.props.page.name }</p>
            </div>
        )
    }
}

const container = {
    display: 'flex',
    borderBottom: '1px solid rgba(255,255,255,0.2)'
}

const iconStyle = {
    marginTop: '18px',
    width: '45px',
    height: '45px'
}

// PropTypes
SidebarItem.propTypes = {
    view: PropTypes.object.isRequired
}


export default SidebarItem;