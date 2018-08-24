import { connect } from 'react-redux';
import { thumbClick } from '../../redux/Action';
import Thumbnail from '../../component/Thumbnail';

const mapDispatchToProps = dispatch => ({ changeImg: () => dispatch(thumbClick()) });

const ThumbnailClick = connect(
  null,
  mapDispatchToProps,
)(Thumbnail);

export default ThumbnailClick;
