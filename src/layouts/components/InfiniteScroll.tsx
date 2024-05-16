import React, { useEffect, useMemo, useRef, useState } from "react";
import "../../styles/infiniteScroll.scss";
import { IconList } from "../../constants/Icons";
//import anime from "animejs/lib/anime.es.js";

interface IProps {
  direction?: "right" | "left";
  orientation?: "vertical" | "horizontal";
  speed?: "fast" | "slow" | "slower";
}

function InfiniteScrollComponent(props: IProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const { direction = "right", orientation="vertical", speed="fast" } = props;

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  function addAnimation() {
    if (!scrollerRef.current) return;
    scrollerRef.current.setAttribute("data-animated", "true");
    const scrollerInner = scrollerRef.current.querySelector(".scroller__inner");
    if (!scrollerInner) return;
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      if (!duplicatedItem) return;
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(duplicatedItem);
    });
  }

  return (
      <div ref={scrollerRef} className={"scroller"} data-speed={speed} data-direction={direction} data-orientation={orientation}>
        <ul className="tag-list scroller__inner">
          <div>
            {IconList.map((i) => (
              <li
                key={`icon-${i.key}`}
                className="rounded-lg bg-theme-light dark:bg-darkmode-theme-light"
              >
                {i.icon}
              </li>
            ))}
          </div>
        </ul>
      </div>
  );
}

export default InfiniteScrollComponent;
