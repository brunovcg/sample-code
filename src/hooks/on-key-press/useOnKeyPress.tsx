import { useEffect, KeyboardEvent } from "react";
import { EventKey, UseOnKeyPressProps } from "./useOnKeyPress.types";

const preventBehavior = (
  event: KeyboardEvent,
  stopPropagation: boolean,
  preventDefault: boolean,
) => {
  if (stopPropagation) {
    event.stopPropagation();
  }
  if (preventDefault) {
    event.preventDefault();
  }
};

export default function useOnKeyPress({
  keys,
  target,
  callback,
  enabled = true,
  stopPropagation = false,
  preventDefault = false,
  type = "keydown",
}: UseOnKeyPressProps) {
  const keydownEvent = (event: KeyboardEvent) => {
    if (keys.includes(event.key as EventKey) && enabled) {
      preventBehavior(event, stopPropagation, preventDefault);
      callback?.(event);
    }
  };

  useEffect(() => {
    if (target) {
      target.current?.addEventListener(
        type,
        keydownEvent as unknown as EventListenerOrEventListenerObject,
      );
    } else {
      document.addEventListener(
        type,
        keydownEvent as unknown as EventListenerOrEventListenerObject,
      );
    }

    return () => {
      if (target?.current) {
        target.current?.removeEventListener(
          type,
          keydownEvent as unknown as EventListenerOrEventListenerObject,
        );
      } else {
        document.removeEventListener(
          type,
          keydownEvent as unknown as EventListenerOrEventListenerObject,
        );
      }
    };
  }, [callback, enabled, target, type]);
}
