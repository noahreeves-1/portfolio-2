"use client";

import { useEffect, useState } from "react";

// Noah's working-hours clock (Pacific), not the visitor's browser timezone.
export const AVAILABILITY_TZ = "America/Los_Angeles";

export type AvailabilityKind = "available" | "limited" | "unavailable";

export interface AvailabilityState {
  kind: AvailabilityKind;
  label: string;
  dotColor: string;
  ping: boolean;
}

const CONFIG: Record<AvailabilityKind, Omit<AvailabilityState, "kind">> = {
  available: { label: "Available", dotColor: "var(--v6-current-soft)", ping: true },
  limited: { label: "Limited", dotColor: "var(--v6-sun-soft)", ping: false },
  unavailable: { label: "Unavailable", dotColor: "var(--v6-offline-soft)", ping: false },
};

function localMinutes(at: Date, timeZone: string): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(at);

  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  return hour * 60 + minute;
}

export function getAvailability(at: Date, timeZone: string = AVAILABILITY_TZ): AvailabilityState {
  const mins = localMinutes(at, timeZone);

  let kind: AvailabilityKind;
  if (mins >= 9 * 60 && mins < 17 * 60) kind = "available";
  else if (mins >= 17 * 60 && mins < 21 * 60) kind = "limited";
  else kind = "unavailable";

  return { kind, ...CONFIG[kind] };
}

export function useAvailabilityStatus(timeZone: string = AVAILABILITY_TZ): AvailabilityState {
  const [state, setState] = useState(() => getAvailability(new Date(), timeZone));

  useEffect(() => {
    const tick = () => setState(getAvailability(new Date(), timeZone));
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return state;
}
