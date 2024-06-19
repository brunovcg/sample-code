import styled, { css } from "styled-components";
import { StyledButtonProps } from "./Button.types";
import { COLOR_VARIANTS } from "@/styles";

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  background-color: var(--background-white-color);
  cursor: pointer;
  height: 28px;
  border-radius: var(--container-border-radius);
  font-weight: bold;
  width: fit-content;

  &:hover:not([disabled]) {
    border: 1px solid var(--white-color);
    color: var(--white-color);
    background-color: ${(props) => COLOR_VARIANTS[props.$variant]};

    path {
      color: var(--white-color);
    }
  }

  &[disabled] {
    border: 1px solid var(--disabled-color);
    cursor: not-allowed;
  }

  &.im-button-icon {
    border-radius: 50%;
    width: 28px;
  }

  ${(props) => css`
    border: 1px solid ${COLOR_VARIANTS[props.$variant]};
    color: ${COLOR_VARIANTS[props.$variant]};
  `}
`;

export default StyledButton;
