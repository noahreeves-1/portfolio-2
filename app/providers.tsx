// app/providers.tsx
"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";
import PostHogPageView from "./PostHogPageView";

// Starts PostHog and records page views. Renders no DOM of its own and takes no
// children: nothing on the page reads the PostHog context, so the provider only
// needs to wrap the page-view tracker.
export function PostHogAnalytics() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN) return;

    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      capture_pageview: false, // Disable automatic pageview capture, as we capture manually
      capture_pageleave: true,
    });
  }, []);

  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <PHProvider client={posthog}>
      <PostHogPageView />
    </PHProvider>
  );
}
