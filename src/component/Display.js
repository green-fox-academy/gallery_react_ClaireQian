import React from 'react';
import PropTypes from 'prop-types';

function DisPlay(props) {
  const { url } = props;
  return (
    <div className="displayDiv">
      <img className="displayImg" src={`${url}.jpeg`} alt="" />
    </div>
  );
}

DisPlay.propTypes = {
  url: PropTypes.string.isRequired,
};

export default DisPlay;
