import { FileText, Radio, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

interface AuthPageLayoutProps {
  children: ReactNode;
}

const featureHighlights = [
  {
    description: "Describe your system, and AI maps it to nodes and edges on a live canvas.",
    icon: Sparkles,
    title: "AI architecture generation",
  },
  {
    description: "Live cursors, presence indicators, and shared node editing across your team.",
    icon: Radio,
    title: "Real-time collaboration",
  },
  {
    description: "Export a complete Markdown technical specification directly from the canvas.",
    icon: FileText,
    title: "Instant spec generation",
  },
];

export function AuthPageLayout({ children }: AuthPageLayoutProps) {
  return (
    <main className="grid min-h-screen md:grid-cols-2">
      <section className="hidden min-h-screen flex-col justify-between border-r border-surface-border bg-surface px-10 py-11 md:flex lg:px-12">
        <div>
          <div className="flex items-center gap-2.5 text-copy-primary">
            <span aria-hidden="true" className="h-6 w-6 rounded-md bg-brand" />
            <span className="text-sm font-semibold tracking-tight">Ghost AI</span>
          </div>

          <div className="mt-[clamp(7rem,19vh,11rem)] max-w-md">
            <h1 className="max-w-sm text-3xl font-semibold leading-tight tracking-tight text-copy-primary lg:text-4xl">
              Design systems at the speed of thought.
            </h1>
            <p className="mt-4 max-w-md text-sm leading-6 text-copy-muted">
              Describe your architecture in plain English. Ghost AI maps it to a shared canvas your whole team can refine in real time.
            </p>

            <ul className="mt-9 space-y-6">
              {featureHighlights.map(({ description, icon: Icon, title }) => (
                <li className="flex gap-3" key={title}>
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-brand/30 bg-accent-dim text-brand">
                    <Icon aria-hidden="true" className="h-3 w-3" />
                  </span>
                  <div>
                    <h2 className="text-sm font-medium text-copy-secondary">{title}</h2>
                    <p className="mt-1 text-xs leading-5 text-copy-muted">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-xs text-copy-faint">© 2026 Ghost AI. All rights reserved.</p>
      </section>

      <section className="flex min-h-screen items-center justify-center bg-base px-5 py-10 sm:px-8">
        <div className="w-full max-w-sm font-sans">{children}</div>
      </section>
    </main>
  );
}
