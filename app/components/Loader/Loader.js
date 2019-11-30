import React from 'react';

import './Loader.scss';

class Loader extends React.Component {
  render() {
    return(
      <div className="loader-component">
        <img src="/app/assets/imgs/page-loader.svg" alt="loader svg"/>
      </div>
    )
  }
}

export default Loader;
