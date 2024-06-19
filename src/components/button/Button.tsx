import { Utils } from "@/utils";
import Icon from "../icon/Icon";
import StyledButton from "./Button.styled";
import { ButtonProps } from "./Button.types";

export default function Button({
  text,
  icon,
  variant = "primary",
  className,
  ...rest
}: Readonly<ButtonProps>) {
  const classes = Utils.conditionalClass({
    "im-button": true,
    "im-button-icon": !text && !!icon,
    [className ?? ""]: !!className,
  });

  return (
    <StyledButton className={classes} $variant={variant} {...rest}>
      {icon && <Icon icon={icon} variant={variant} weight="bold" />} {text}
    </StyledButton>
  );
}
