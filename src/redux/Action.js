export const LEFT_IMG = 'NEXT_IMG';
export const RIGHT_IMG = 'RIGHT_IMG';
export const THUMB_CLICK = 'THUMB_CLICK';

export function leftImg(changeIndex) {
  return {
    type: LEFT_IMG,
    changeIndex,
  };
}

export function rightImg(changeIndex) {
  return {
    type: RIGHT_IMG,
    changeIndex,
  };
}

export function thumbClick(thumbIndex) {
  return {
    type: THUMB_CLICK,
    thumbIndex,
  };
}
