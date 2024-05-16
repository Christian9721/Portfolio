import React, { useRef, useCallback } from "react";

interface IProps {
  cb: IntersectionObserverCallback;
  options?: IntersectionObserverInit | undefined;
}
const useIntersectionObserver = (props: IProps) => {
  const { options, cb } = props;
  const observer = useRef<null | IntersectionObserver>(null);

  return useCallback((node: Element | any) => {
    if (!node) {
      if (observer.current) {
        observer.current.disconnect();
      }
      return;
    }
    observer.current = new window.IntersectionObserver(cb, options);
    observer.current.observe(node);
  }, []);
};

export default useIntersectionObserver;
