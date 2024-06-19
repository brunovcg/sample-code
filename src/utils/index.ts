export abstract class Utils {
  static filterMap<ArrayType extends unknown[], MapReturn>(
    arr: ArrayType | undefined,
    filterFn: (filterItem: ArrayType[number], ...rest: unknown[]) => boolean,
    mapFn: (
      mapItem: ArrayType[number],
      index?: number,
      array?: ArrayType,
      ...rest: unknown[]
    ) => MapReturn
  ) {
    if (!Array.isArray(arr)) {
      return [];
    }
    const isFunction = (fn: (funcItem: ArrayType) => unknown) =>
      typeof fn === "function";
    return arr.reduce((acc, current, index) => {
      if (isFunction(filterFn) && filterFn(current) === false) return acc;
      const newItem = isFunction(mapFn)
        ? mapFn(current, index, arr as ArrayType)
        : current;
      return [...(acc as unknown[]), newItem];
    }, []) as MapReturn[];
  }

  static conditionalClass(object: object) {
    const keys = Object.keys(object);
    return keys.reduce((acc: string, current: string) => {
      if (object[current as keyof object]) {
        acc += acc ? ` ${current}` : `${current}`;
      }
      return acc;
    }, "");
  }
}

export abstract class TestUtils {
  static fireEventAtPosition(
    element: HTMLElement,
    { clientX, clientY }: { clientX: number; clientY: number }
  ) {
    const clickEvent = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      clientX,
      clientY,
    });
    element.dispatchEvent(clickEvent);
  }
}
