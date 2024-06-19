import { ColorsVariant } from "@/styles";
import { icons } from "./Icon.registration";

export const iconSizes = ["small", "regular", "large"] as const;

export type IconSize = (typeof iconSizes)[number] | undefined;

export type IconName = keyof typeof icons;

export const iconWeight = [
  "duotone",
  "regular",
  "bold",
  "thin",
  "fill",
] as const;

export type IconWeight = (typeof iconWeight)[number];

type ConditionalStyledIconProps =
  | { size?: IconSize; customSize?: never }
  | { size?: never; customSize?: string };

export type StyledIconProps = {
  $size?: IconSize;
  $customSize?: string;
  $variant: ColorsVariant;
  $margin?: string;
  $error?: boolean;
};

export type IconProps = ConditionalStyledIconProps & {
  icon: IconName;
  variant?: ColorsVariant;
  className?: string;
  notifications?: number;
  weight?: IconWeight;
  mirrored?: boolean;
  margin?: string;
  dataTestId?: string;
};
