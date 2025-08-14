import "../../styles/ui/button.scss";

export default function Button(
  props: Omit<React.ComponentProps<"button">, "className">
) {
  return <button {...props}>{props.children}</button>;
}
