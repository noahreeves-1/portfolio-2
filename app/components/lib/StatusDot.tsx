import { STATUS_LABELS, type ProjectStatus } from "../../content";

interface StatusDotProps {
  status: ProjectStatus;
}

// Alive/dead marker: a slow-pulsing green dot for what's still running, a flat
// grey dot for what's been shut down. The dot itself is decorative; the label
// ships as screen-reader text so the meaning isn't colour-only.
export function StatusDot({ status }: StatusDotProps) {
  return (
    <>
      <span className={`m-dot m-dot-${status}`} aria-hidden="true" />
      <span className="sr-only">{STATUS_LABELS[status]}. </span>
    </>
  );
}
