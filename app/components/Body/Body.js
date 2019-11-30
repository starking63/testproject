import React from 'react';

import './Body.scss';

class Body extends React.Component {
  render() {
    const children = this.props.children;
    return(
      <div className="body-component">
        {this.props.children}
      </div>
    )
  }
}

export default Body;
