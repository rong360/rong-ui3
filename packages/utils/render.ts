import { h } from "vue";

export function Render(props: Record<string, unknown>) {
  return typeof props.render === "function" ? props.render(h) : props.render;
}
Render.props = ["render"];
