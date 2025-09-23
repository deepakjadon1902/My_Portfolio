"use client";

import React, { useCallback, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // degrees
  scale?: number; // 1 = no scale
  disabledOnTouch?: boolean; // disable tilt on touch devices
  touchMaxTilt?: number; // fallback tilt for touch when not disabled
  touchScale?: number; // fallback scale for touch when not disabled
};

export const ParallaxTilt: React.FC<Props> = ({
  children,
  className = "",
  maxTilt = 12,
  scale = 1.02,
  disabledOnTouch = true,
  touchMaxTilt = 4,
  touchScale = 1.01,
}) => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect coarse pointer (touch) devices
    const mq = window.matchMedia("(pointer: coarse)");
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = e.currentTarget;
      if (isTouch && disabledOnTouch) {
        el.style.transform = "none";
        return;
      }

      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width; // 0..1
      const py = (e.clientY - rect.top) / rect.height; // 0..1

      const tilt = isTouch ? touchMaxTilt : maxTilt;
      const scl = isTouch ? touchScale : scale;

      const rx = (tilt / 2 - px * tilt).toFixed(2); // rotateY
      const ry = (py * tilt - tilt / 2).toFixed(2); // rotateX

      el.style.transform = `perspective(900px) rotateX(${ry}deg) rotateY(${rx}deg) scale(${scl})`;
      el.style.transition = "transform 70ms ease-out";
    },
    [isTouch, disabledOnTouch, maxTilt, scale, touchMaxTilt, touchScale]
  );

  const handleLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.style.transition = "transform 220ms ease";
    el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`;
  }, []);

  return (
    <div
      className={"[transform-style:preserve-3d] will-change-transform " + className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
};

export default ParallaxTilt;