import { connect } from 'react-redux';
import { leftImg } from '../../redux/Action';
import LeftButton from '../../component/LeftButton';

const mapDispatchToProps = dispatch => ({ changeImg: () => dispatch(leftImg(-1)) });

const LeftImg = connect(
  null,
  mapDispatchToProps,
)(LeftButton);

export default LeftImg;
