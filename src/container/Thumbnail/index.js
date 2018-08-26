import { connect } from 'react-redux';
import { thumbClick } from '../../redux/Action';
import Thumbnail from '../../component/Thumbnail';
import { PicUrlList } from '../../pictList';

const mapStateToProps = (state, ownProps) => {
  const { index } = ownProps;
  return { url: PicUrlList[index] };
};

const mapDispatchToProps = (dispatch) => ({
  displayImg: function displayImg(e) {
    dispatch(thumbClick(parseInt(e.target.getAttribute('index'), 10)));
  },
});

const ThumbnailClick = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Thumbnail);

export default ThumbnailClick;
