import {
  BUCKET_SET,
  ITEMS_SET
} from './types';

const initialState = {
  buckets: null,
  items: null,
  errorMsg: ''
}

const bucketReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case BUCKET_SET:
      return {
        ...state,
        buckets: action.payload.buckets
      };
    case ITEMS_SET:
      return {
        ...state,
        items: action.payload.items
      };
    default:
      return state;
  }
}

export default bucketReducer;
