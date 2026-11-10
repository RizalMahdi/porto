"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const accent = "Belajar. Berkarya. Bertumbuh.";

const ShinyText = dynamic(() => import("@/components/reactbits/ShinyText"), {
  loading: () => <span>{accent}</span>,
});

function subscribeToMotionPreference(onChange: () => void) {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  preference.addEventListener("change", onChange);
  return () => preference.removeEventListener("change", onChange);
}

export function HeroAccent() {
  const reducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => true,
  );
  const { resolvedTheme } = useTheme();

  return (
    <span aria-hidden="true" className="text-primary">
      {reducedMotion ? (
        <span>{accent}</span>
      ) : (
        <ShinyText
          text={accent}
          color={resolvedTheme === "dark" ? "#b8d3f4" : "#183b69"}
          shineColor={resolvedTheme === "dark" ? "#edf3fa" : "#426a99"}
          speed={1.8}
          trigger="view"
        />
      )}
    </span>
  );
}
