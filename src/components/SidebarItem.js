import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SidebarItem extends Component {
    getStyle = () => {
            return {
                padding: '15px',
                cursor: 'pointer',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: '100',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                borderWidth: '80%'
            };
        }

    render() {
        return <p style={this.getStyle()} onClick={this.props.showView}>{ this.props.page.name }</p>
        ;
    }
}

// PropTypes
SidebarItem.propTypes = {
    view: PropTypes.object.isRequired
}


export default SidebarItem;