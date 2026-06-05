import type { Metadata } from "next";
import { ProtoSwitcher } from "./ProtoSwitcher";

// Prototypes — keep them out of search + social previews.
export const metadata: Metadata = {
  title: "Hero prototypes — Noah Kim",
  robots: { index: false, follow: false },
};

export default function ProtoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="v2-scope dark min-h-screen bg-zinc-950 text-zinc-100 antialiased">
      {children}
      <ProtoSwitcher />
    </div>
  );
}
