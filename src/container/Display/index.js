import { connect } from 'react-redux';
import Display from '../../component/Display';
import { PicUrlList } from '../../pictList';

const mapStateToProps = state => ({ url: PicUrlList[state.index] });

const DisplayImg = connect(
  mapStateToProps,
)(Display);

export default DisplayImg;
