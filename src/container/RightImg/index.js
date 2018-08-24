import { connect } from 'react-redux';
import { rightImg } from '../../redux/Action';
import RightButton from '../../component/RightButton';

const mapDispatchToProps = dispatch => ({ changeImg: () => dispatch(rightImg(1)) });

const RightImg = connect(
  null,
  mapDispatchToProps,
)(RightButton);

export default RightImg;
