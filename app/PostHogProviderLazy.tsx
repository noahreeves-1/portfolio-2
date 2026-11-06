"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// PostHog is loaded after the first render so it never blocks the page.
const PostHogAnalytics = dynamic(() => import("./providers").then((mod) => mod.PostHogAnalytics), {
  ssr: false,
  loading: () => null,
});

export function PostHogProviderLazy({ children }: { children: React.ReactNode }) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Analytics mounts next to the page, never around it. Wrapping `children` in
  // the provider once it loaded changed the tree's shape, so React threw the
  // whole page away and rebuilt it a moment after every load.
  return (
    <>
      {children}
      {shouldLoad && <PostHogAnalytics />}
    </>
  );
}
