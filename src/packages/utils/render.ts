import { h, defineComponent } from 'vue';

export function Render(props: Record<string, unknown>) {
  return typeof props.render === 'function' ? props.render(h) : props.render;
}
Render.props = ['render'];

// render text, the text type is string or vNode
export const RenderText = defineComponent({
  props: {
    text: [String, Object]
  },
  setup(props) {
    return () => props.text;
  }
});
