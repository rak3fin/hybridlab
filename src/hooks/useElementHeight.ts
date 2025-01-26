"use client";
import { useState, useEffect, useRef, RefObject } from "react";

const useElementHeight = (
  fallback: []
): [number, RefObject<HTMLDivElement | null>] => {
  const [height, setHeight] = useState<number>(0);
  const elementRef = useRef<HTMLDivElement | null>(null); // Ensure this matches your intended HTML element type

  const updateHeight = () => {
    if (elementRef.current) {
      setHeight(elementRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    updateHeight();

    const handleResize = () => {
      updateHeight();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [...fallback]);

  return [height, elementRef];
};

export default useElementHeight;
