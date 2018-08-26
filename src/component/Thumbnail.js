import React from 'react';
import PropTypes from 'prop-types';

function ThumbNail(props) {
  const { displayImg, index, url } = props;
  return (
    <div className="thumbnail" onClick={displayImg}>
      <img className="thumbnail" src={`${url}.jpeg`} index={index} alt=""/>
    </div>
  );
}

ThumbNail.propTypes = {
  displayImg: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default ThumbNail;
