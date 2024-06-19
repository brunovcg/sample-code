import StyledBox from './Box.styled';
import { BoxProps } from './Box.types';

export default function Box({
  children,
  direction,
  align,
  justify,
  width,
  margin,
  padding,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  gap,
  wrap = 'wrap',
  flex,
  ...rest
}: Readonly<BoxProps>) {
  return (
    <StyledBox
      $direction={direction}
      $align={align}
      $justify={justify}
      $width={width}
      $minWidth={minWidth}
      $maxWidth={maxWidth}
      $height={height}
      $minHeight={minHeight}
      $maxHeight={maxHeight}
      $gap={gap}
      $wrap={wrap}
      $flex={flex}
      $margin={margin}
      $padding={padding}
      {...rest}
    >
      {children}
    </StyledBox>
  );
}
