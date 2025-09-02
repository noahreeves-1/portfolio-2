"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Lazy load PostHog components
const PostHogProviderInner = dynamic(
  () => import("./providers").then((mod) => mod.PostHogProvider),
  {
    ssr: false,
    loading: () => null,
  }
);

export function PostHogProviderLazy({ children }: { children: React.ReactNode }) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Only load PostHog after initial render
    // This prevents it from blocking the initial page load
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldLoad) {
    return <>{children}</>;
  }

  return <PostHogProviderInner>{children}</PostHogProviderInner>;
}