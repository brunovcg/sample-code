import { HTMLProps, ReactNode } from 'react';

export type BoxProps = HTMLProps<HTMLDivElement> & {
  children: ReactNode;
  direction?: 'row' | 'column';
  align?: 'center' | 'start' | 'end' | 'space-between' | 'space-evenly' | 'space-around';
  justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-evenly' | 'space-around';
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  gap?: number | [number, number] | [number];
  wrap?: 'wrap' | 'nowrap';
  flex?: string;
  margin?: string;
  padding?: string;
};

export type StyledBoxProps = {
  $direction?: 'row' | 'column';
  $align?: 'center' | 'start' | 'end' | 'space-between' | 'space-evenly' | 'space-around';
  $justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-evenly' | 'space-around';
  $height?: string;
  $minHeight?: string;
  $maxHeight?: string;
  $width?: string;
  $minWidth?: string;
  $maxWidth?: string;
  $gap?: number | [number, number] | [number];
  $wrap?: 'wrap' | 'nowrap';
  $flex?: string;
  $margin?: string;
  $padding?: string;
};
