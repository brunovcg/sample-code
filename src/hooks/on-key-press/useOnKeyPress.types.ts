import { MutableRefObject, KeyboardEvent } from "react";

export type EventKey = " " | "Escape" | "Tab" | "Enter";

export type UseOnKeyPressProps = {
  keys: EventKey[];
  callback: (e?: KeyboardEvent) => void;
  enabled?: boolean;
  stopPropagation?: boolean;
  preventDefault?: boolean;
  target?: MutableRefObject<Element | null> | null;
  type?: "keydown" | "keyup";
};
