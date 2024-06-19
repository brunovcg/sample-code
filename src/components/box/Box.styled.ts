import styled, { css } from "styled-components";
import { StyledBoxProps } from "./Box.types";

const handleGap = (gap: number | [number, number] | [number] | undefined) => {
  if (!gap) return undefined;

  if (Array.isArray(gap)) {
    return gap.map((item) => `${item}px`).join(" ");
  }

  return `${gap}px`;
};

const StyledBox = styled.div<StyledBoxProps>`
  display: flex;

  ${(props) => css`
    flex-direction: ${props.$direction};
    align-items: ${props.$align};
    justify-content: ${props.$justify};
    height: ${props.$height};
    min-height: ${props.$minHeight};
    max-height: ${props.$maxHeight};
    width: ${props.$width};
    min-width: ${props.$width};
    max-width: ${props.$maxHeight};
    gap: ${handleGap(props.$gap)};
    flex-wrap: ${props.$wrap};
    flex: ${props.$flex};
    padding: ${props.$padding};
    margin: ${props.$margin};
  `}
`;

export default StyledBox;
