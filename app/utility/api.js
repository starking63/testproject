import { apiConifg } from '../config/apiConfig';

const fetchBuckets = async () => {
  try {
    const response = await fetch(apiConifg.API_BASE_URL + 'buckets', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    return {
      type: 'success',
      data: data
    };
  } catch (error) {
    return {
      type: 'failed',
      errorMsg: error
    }
  }
}

const fetchItems = async () => {
  try {
    const response = await fetch(apiConifg.API_BASE_URL + 'items', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    return {
      type: 'success',
      data: data
    };
  } catch (error) {
    return {
      type: 'failed',
      errorMsg: error
    }
  }
}

export {
  fetchBuckets,
  fetchItems
}