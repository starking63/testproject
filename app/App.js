import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './components/Header/Header';
import Body from './components/Body/Body';

import {
  fetchBuckets,
  fetchItems
} from './store/modules/Bucket/actions';
import { REQUEST_SENT } from './store/modules/Common/types';
import Bucket from './components/Bucket/Bucket';

import './App.scss';
import Loader from './components/Loader/Loader';
import Error from './components/Error/Error';

const App = (props) => {
  let { buckets, items, request_status } = props;

  useEffect(() => {
    if (!props.buckets) {
      props.fetchBucketsFromAPI();
      props.fetchItemsFromAPI();
    }
  }, []);

  const getItemsOfBucket = (bucketId) => {
    if (items) {
      const bucketItems = items.filter(item => item.bucketId == bucketId);
      return bucketItems;
    }
    return [];
  }

  return (
    <div className="app-component">
      <Header>InnRoad</Header>
      {
        (() => {
          switch (request_status) {
            case 'request_sent':
              return (
                <Loader />
              );
            case 'request_success':
              return (
                <Body>
                  {
                    buckets &&
                    buckets.map((bucket, index) => {
                      return (
                        <Bucket key={bucket.bucketId} bucket={bucket} items={getItemsOfBucket(bucket.bucketId)}/>
                      )
                    })
                  }
                </Body>
              );
            case 'request_error':
              return (
                <Error />
              );
            default:
              return (
                <Loader />
              );
          }
        })()
      }
    </div>
  );
}

const mapStateToProps = state => ({
  buckets: state.bucket.buckets,
  items: state.bucket.items,
  request_status: state.common.request_status
});

const mapDispatchToProps = dispatch => {
  return {
    fetchBucketsFromAPI : () => dispatch(fetchBuckets()),
    fetchItemsFromAPI : () => dispatch(fetchItems())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
