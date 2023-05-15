// 获得角度
export function getAngle(angx: number, angy: number) {
  return (Math.atan2(angy, angx) * 180) / Math.PI;
}

// 根据起点终 点返回方向 1向上 2向下 3向左 4向右 0未滑动
export function getDirection(startx: number, starty: number, endx: number, endy: number) {
  const angx = endx - startx;
  const angy = endy - starty;
  let result = 0;

  // 如果滑动距离太短
  if (Math.abs(angx) < 5 && Math.abs(angy) < 5) {
    return result;
  }
  const angle = getAngle(angx, angy);
  if (angle >= -135 && angle <= -45) {
    result = 1;
  } else if (angle > 45 && angle < 135) {
    result = 2;
  } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
    result = 3;
  } else if (angle >= -45 && angle <= 45) {
    result = 4;
  }
  return result;
}
