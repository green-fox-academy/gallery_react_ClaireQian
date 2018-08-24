import React from 'react';
import PropTypes from 'prop-types';

function LeftButton(props) {
  const { changeImg } = props;
  return (
    <div className="Left Selection" onClick={changeImg}>
      <i className="fas fa-chevron-left fa-3x"></i>
    </div>
  );
}


LeftButton.propTypes = {
  changeImg: PropTypes.func.isRequired,
};

export default LeftButton;
