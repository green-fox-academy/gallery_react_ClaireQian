import React from 'react';
import PropTypes from 'prop-types';

function ThumbNail(props) {
  const { displayImg, thumbUrl } = props;
  return (
    <div className="thumbnail" onClick={displayImg}>
      <img src={thumbUrl} alt=""/>
    </div>
  );
}

ThumbNail.propTypes = {
  displayImg: PropTypes.func.isRequired,
  thumbUrl: PropTypes.string.isRequired,
};

export default ThumbNail;
