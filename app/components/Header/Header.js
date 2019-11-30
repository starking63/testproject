import React from "react";
import PropTypes from 'prop-types';

import './Header.scss';

class Header extends React.Component {
  render() {
    const children = this.props.children;
    return(
      <div className="header-component">
        {this.props.children}
      </div>
    )
  }
}

Header.propTypes = {
  children: PropTypes.string.isRequired
}

Header.defaultProps = {
  title: 'No Title'
}

export default Header;