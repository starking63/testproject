import React from 'react';
import PropTypes from 'prop-types';

import './Item.scss';

class Item extends React.Component {
  render() {
    const { item } = this.props;
    return(
      <div className="item-component">
        <div className="item-title">
          { item.itemTitle }
        </div>
        <div className="item-description">
          { item.description }
        </div>
      </div>
    )
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired
}

Item.defaultProps = {
  item: {
    itemTitle: 'No Title',
    description: 'No Description'
  }
}

export default Item;
