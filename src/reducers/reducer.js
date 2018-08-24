import { LEFT_IMG, RIGHT_IMG, THUMB_CLICK } from '../redux/Action';
import { PicUrlList } from '../pictList';

export default function TodoApp(index = 0, action) {
  switch (action.type) {
    case LEFT_IMG:
      return index === 0 ? 0 : index + action.changeIndex;
    case RIGHT_IMG:
      return index === PicUrlList.length - 1 ? index : index + action.changeIndex;
    // case THUMB_CLICK:
    //   return indexOf()
    default:
      return index;
  }
}
