import { useEffect } from "react";
import { UseOnClickOutsideRef } from "./useOnClickOutside.types";

type Event = MouseEvent | TouchEvent;

const useOnClickOutside = (
  target: UseOnClickOutsideRef,
  handler: (event: Event) => void,
  active = true,
) => {
  useEffect(() => {
    if (active) {
      const listener = (event: Event) => {
        const node = event?.target as Node;
        if (Array.isArray(target)) {
          const elements = target.map((element) => element.current);

          if (!elements.some((element) => element?.contains(node))) {
            handler(event);
          }
        } else {
          const element = target?.current;

          if (!element?.contains(node)) {
            handler(event);
          }
        }
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }
  }, [target, handler, active]);
};

export default useOnClickOutside;
