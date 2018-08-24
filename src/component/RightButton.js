import React from 'react';
import PropTypes from 'prop-types';

function RightButton(props) {
  const { changeImg } = props;
  return (
    <div className="Right Selection" onClick={changeImg}>
      <i className="fas fa-chevron-right fa-3x"></i>
    </div>
  );
}

RightButton.propTypes = {
  changeImg: PropTypes.func.isRequired,
};

export default RightButton;
