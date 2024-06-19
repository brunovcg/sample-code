import StyledIcon from "./Icon.styled";
import Utils from "@/utils";
import { IconProps } from "./Icon.types";
import { icons } from "./Icon.registration";
import Wrapper from "../wrapper/Wrapper";

export default function Icon({
  icon,
  size = "small",
  variant = "primary",
  margin = "0",
  className = "",
  mirrored,
  dataTestId,
  weight = "regular",
  ...rest
}: IconProps) {
  const iconWrapperClasses = Utils.conditionalClass({
    ["im-icon"]: true,
    [`im-icon-${icon}`]: true,
    [`${className}`]: !!className,
  });

  const sizes = {
    small: "14px",
    regular: "18px",
    large: "22px",
  };

  const props = {
    weight,
    size: sizes[size],
    mirrored,
  };

  return (
    <StyledIcon
      $variant={variant}
      $size={size}
      className={iconWrapperClasses}
      $margin={margin}
      data-testid={dataTestId}
      {...rest}
    >
      <Wrapper component={icons[icon]} props={props} />
    </StyledIcon>
  );
}
