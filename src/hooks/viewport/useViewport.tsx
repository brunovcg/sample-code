import { useEffect, useMemo, useState } from "react";
import Configs from "@/configs";

const getDimensions = () => ({
  width: document.body.clientWidth,
  height: document.body.clientHeight,
});

export default function useViewport() {
  const [windowDimensions, setWindowDimensions] = useState(getDimensions());

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      setWindowDimensions(getDimensions());
    });

    resizeObserver.observe(document.body);

    return () => resizeObserver.disconnect();
  }, []);

  const { width, height } = windowDimensions;

  const isMobile = useMemo(
    () => width <= Number(Configs.mobileBreakpoint),
    [width],
  );

  return { width, height, isMobile };
}
