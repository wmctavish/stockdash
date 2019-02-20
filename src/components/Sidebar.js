import React, { Component } from 'react';
import SidebarItem from './SidebarItem';
import PropTypes from 'prop-types';


class Sidebar extends Component {

    render() {
        return this.props.pages.map((page) => (
            <div>
                <SidebarItem showView={this.props.showView.bind(this, page)} page={page} />
            </div>
        ));
    }
}

// PropTypes
Sidebar.propTypes = {
    views: PropTypes.array.isRequired
}

const sidebarStyle = {
    backgroundImage: 'linear-gradient(#0f63ff, #2679ff)',
    textAlign: 'left',
    color: 'white',
    height: '80%',
    width: '150px',
    margin: '10px',
    borderRadius: '5px'
}

export default Sidebar;