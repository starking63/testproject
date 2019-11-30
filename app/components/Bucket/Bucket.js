import React from 'react';
import PropTypes from 'prop-types';
import { fetchItems } from '../../utility/api';
import Item from '../Item/Item';

import './Bucket.scss';

class Bucket extends React.Component {

  render() {
    const { items, bucket } = this.props;
    return(
      <div className='bucket-component'>
        <div className="bucket-description">
          {
            bucket &&
            bucket.description
          }
        </div>
        <div className="bucket-items">
          {
            items &&
            items.map(item => {
              return(
                <Item key={item.itemId} item={item}/>
              )
            })
          }
        </div>
      </div>
    )
  }
}

Bucket.propTypes = {
  bucket: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired
}

Bucket.defaultProps = {
  bucket: {
    description: 'No Description'
  },
  items: []
}

export default Bucket;
