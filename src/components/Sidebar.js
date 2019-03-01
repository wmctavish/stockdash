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

export default Sidebar;