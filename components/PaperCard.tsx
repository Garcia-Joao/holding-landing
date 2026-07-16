"use client";

import { useLayoutEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import styles from "./PaperCard.module.css";

type PaperCardProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  style?: CSSProperties;

  topMask?: string;
  bottomMask?: string;
  leftMask?: string;
  rightMask?: string;
};

function BackTornEdges() {
  return (
    <>
      <span className={`${styles.paperTornEdge} ${styles.paperTornTop}`} />
      <span className={`${styles.paperTornEdge} ${styles.paperTornBottom}`} />
      <span className={`${styles.paperTornEdge} ${styles.paperTornLeft}`} />
      <span className={`${styles.paperTornEdge} ${styles.paperTornRight}`} />
    </>
  );
}

function MainTornEdges() {
  return (
    <>
      <span className={`${styles.mainTornEdge} ${styles.mainTornTop}`} />
      <span className={`${styles.mainTornEdge} ${styles.mainTornBottom}`} />
      <span className={`${styles.mainTornEdge} ${styles.mainTornLeft}`} />
      <span className={`${styles.mainTornEdge} ${styles.mainTornRight}`} />
    </>
  );
}

export function PaperCard({
  children,
  className = "",
  innerClassName = "",
  style,
  topMask = "/masks/torn-01.png",
  bottomMask = "/masks/torn-02.png",
  leftMask = "/masks/torn-07.png",
  rightMask = "/masks/torn-04.png",
}: PaperCardProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const element = rootRef.current;

    if (!element) return;

    const updateHeight = () => {
      element.style.setProperty("--paper-card-height", `${element.offsetHeight}px`);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={`${styles.paperCardComponent} ${className}`}
      style={
        {
          ...style,
          "--paper-mask-top": `url("${topMask}")`,
          "--paper-mask-bottom": `url("${bottomMask}")`,
          "--paper-mask-left": `url("${leftMask}")`,
          "--paper-mask-right": `url("${rightMask}")`,
        } as CSSProperties
      }
    >
      <div className={styles.paperBackLayer} aria-hidden="true">
        <BackTornEdges />
      </div>

      <div className={`${styles.paperCardSurface} ${innerClassName}`}>
        <div className={styles.paperMainLayer} aria-hidden="true">
          <div className={styles.paperMainCore} />
          <MainTornEdges />
        </div>

        <div className={styles.paperCardContent}>{children}</div>
      </div>
    </div>
  );
}