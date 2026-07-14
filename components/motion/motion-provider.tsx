"use client";

import type { ReactNode } from "react";
import { SmoothScrollProvider } from "./smooth-scroll-provider";
import { ScrollProgress } from "./scroll-progress";
import { CustomCursor } from "./custom-cursor";

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <SmoothScrollProvider>
      <ScrollProgress />
      <CustomCursor />
      {children}
    </SmoothScrollProvider>
  );
}
