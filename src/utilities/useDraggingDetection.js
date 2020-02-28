import {useCallback, useRef, useState, useEffect} from 'react';

export default () => {
  const isClient = typeof window === "object";
  const mouseDown = useRef(false);
  const [isDragging, setDragging] = useState(false);

  const handleMouseDown = useCallback(() => {
    mouseDown.current = true;
  }, []);

  const handleMouseUp = useCallback(() => {
    mouseDown.current = false;
    setDragging(false);
  }, []);

  const handleMouseMove = useCallback(() => {
    if (mouseDown.current) {
      setDragging(true);
    }
  }, []);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return isDragging;
};
