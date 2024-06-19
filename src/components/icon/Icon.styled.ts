import styled from "styled-components";
import { StyledIconProps } from "./Icon.types";
import { COLOR_VARIANTS } from "@/styles";

const StyledIcon = styled.span<StyledIconProps>`
  margin: ${(props) => props.$margin};
  display: flex;
  align-items: center;

  path {
    color: ${(props) => COLOR_VARIANTS[props.$variant]};
  }
`;

export default StyledIcon;
