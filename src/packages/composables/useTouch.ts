import { reactive, toRefs } from 'vue';
import { TAP_OFFSET } from '../utils';

function getDirection(x: number, y: number) {
  if (x > y) {
    return 'horizontal';
  }
  if (x < y) {
    return 'vertical';
  }
  return '';
}

export function useTouch() {
  const state = reactive({
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    offsetX: 0,
    offsetY: 0,
    direction: '',
    isTap: true,
    startTime: 0,
    moveTime: 0
  });

  const isVertical = () => state.direction === 'vertical';
  const isHorizontal = () => state.direction === 'horizontal';

  const reset = () => {
    state.deltaX = 0;
    state.deltaY = 0;
    state.offsetX = 0;
    state.offsetY = 0;
    state.direction = '';
    state.isTap = true;
  };

  const start = (event: TouchEvent) => {
    reset();
    state.startX = event.touches[0].clientX;
    state.startY = event.touches[0].clientY;
    state.startTime = Date.now();
  };

  const move = (event: TouchEvent) => {
    const touch = event.touches[0];
    state.deltaX = Math.max(0, touch.clientX) - state.startX;
    state.deltaY = Math.max(0, touch.clientY) - state.startY;
    state.offsetX = Math.abs(state.deltaX);
    state.offsetY = Math.abs(state.deltaY);
    state.direction = getDirection(state.offsetX, state.offsetY);
    state.isTap = state.offsetX < TAP_OFFSET && state.offsetY < TAP_OFFSET;
  };

  const end = () => {
    state.moveTime = Date.now() - state.startTime;
  };

  return {
    ...toRefs(state),
    start,
    move,
    end,
    isVertical,
    isHorizontal
  };
}
