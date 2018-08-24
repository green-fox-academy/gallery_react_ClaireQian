import React from 'react';
import PropTypes from 'prop-types';

function ThumbNail(props) {
  const { displayImg, url } = props;
  return (
    <div className="thumbnail" onClick={displayImg}>
      <img src={url} />
    </div>
  );
}

ThumbNail.propTypes = {
  displayImg: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

export default ThumbNail;
