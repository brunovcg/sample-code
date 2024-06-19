import {
  WrapperAttributesOptionalChildren,
  WrapperProps,
} from "./Wrapper.types";

export default function Wrapper<
  ComponentProps extends WrapperAttributesOptionalChildren,
>({
  component: Component,
  props,
  children,
}: Readonly<WrapperProps<ComponentProps>>) {
  return (
    <Component className="im-wrapper" {...props}>
      {children}
    </Component>
  );
}
