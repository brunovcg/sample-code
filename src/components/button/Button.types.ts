import { ButtonHTMLAttributes } from "react";
import { IconName } from "@/components";
import { ColorsVariant } from "@/styles";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
  icon?: IconName;
  variant?: ColorsVariant;
  className?: string;
};

export type StyledButtonProps = {
  $variant: ColorsVariant;
};
