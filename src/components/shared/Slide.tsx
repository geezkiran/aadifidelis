import { cn } from "@/lib/utils";

type SlideVariant = "light" | "dark";

interface SlideProps {
  id: string;
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: SlideVariant;
  className?: string;
  contentClassName?: string;
}

export function Slide({
  id,
  children,
  header,
  footer,
  variant = "light",
  className,
  contentClassName,
}: SlideProps) {
  const dark = variant === "dark";

  return (
    <section
      id={id}
      data-slide
      className={cn(
        "relative flex h-full min-h-full w-full shrink-0 snap-start snap-always flex-col overflow-hidden",
        dark ? "bg-surface-dark text-white" : "bg-background text-foreground",
        className
      )}
    >
      <div className="slide-stage">
        <div className="slide-canvas">
          {header ? (
            <div className="absolute left-[20px] top-[16px] z-10 md:left-[56px] md:top-[28px]">
              {header}
            </div>
          ) : null}
          <div
            className={cn(
              "slide-content slide-shell relative flex h-full min-h-0 flex-1 flex-col justify-center py-[28px] md:py-[56px]",
              contentClassName
            )}
          >
            {children}
          </div>
          {footer ? (
            <div
              className={cn(
                "slide-shell absolute inset-x-0 bottom-[12px] md:bottom-[20px]",
                dark ? "text-white/35" : "text-muted-soft"
              )}
            >
              {footer}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function SlideTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "max-w-[640px] text-[26px] font-medium leading-[1.18] tracking-[-0.03em] md:text-[40px] md:leading-[1.2]",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function Body({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "max-w-[640px] text-[15px] leading-[1.55] text-muted md:text-[15px]",
        className
      )}
    >
      {children}
    </p>
  );
}

export function AccentStat({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("min-w-0", className)}>
      <p className="text-[28px] font-medium leading-none tracking-[-0.03em] text-accent md:text-[44px]">
        {value}
      </p>
      <p className="mt-[8px] max-w-[200px] text-[13px] leading-[1.4] text-muted md:mt-[10px] md:max-w-[180px] md:text-[13px]">
        {label}
      </p>
    </div>
  );
}

export function FlowNode({
  label,
  sub,
  accent = false,
  className,
}: {
  label: string;
  sub?: string;
  accent?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex min-h-[52px] w-max shrink-0 flex-col items-start justify-center rounded-[4px] border px-[16px] py-[10px] md:min-h-[58px] md:px-[18px]",
        accent
          ? "border-accent text-accent"
          : "border-border-strong text-foreground",
        className
      )}
    >
      <span className="whitespace-nowrap text-[14px] font-medium leading-[1.25] tracking-[-0.01em] md:text-[14px]">
        {label}
      </span>
      {sub ? (
        <span
          className={cn(
            "mt-[2px] whitespace-nowrap text-[12px] md:text-[11px]",
            accent ? "text-accent/80" : "text-muted"
          )}
        >
          {sub}
        </span>
      ) : null}
    </div>
  );
}

export function FlowArrow({ accent = false }: { accent?: boolean }) {
  return (
    <span
      className={cn(
        "shrink-0 px-[6px] text-[18px] md:px-[8px] md:text-[22px]",
        accent ? "text-accent" : "text-muted-soft"
      )}
      aria-hidden
    >
      →
    </span>
  );
}

export function MockFrame({
  title,
  caption,
  children,
}: {
  title: string;
  caption?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-hidden rounded-[8px] border border-border bg-white/70">
      <div className="flex items-center gap-[8px] border-b border-border px-[14px] py-[10px]">
        <span className="h-[8px] w-[8px] rounded-full bg-border-strong" />
        <span className="h-[8px] w-[8px] rounded-full bg-border-strong" />
        <span className="h-[8px] w-[8px] rounded-full bg-border-strong" />
        <span className="ml-[8px] text-[11px] text-muted-soft md:text-[12px]">{title}</span>
      </div>
      <div className="relative min-h-[180px] p-[16px] md:min-h-[220px] md:p-[20px]">
        {children ?? (
          <div className="grid gap-[10px]">
            <div className="grid grid-cols-4 gap-[8px]">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={cn(
                    "h-[36px] rounded-[4px]",
                    i % 2 === 0 ? "bg-surface" : "bg-accent/25"
                  )}
                />
              ))}
            </div>
            <div className="h-[10px] w-[72%] rounded-full bg-surface" />
            <div className="h-[10px] w-[88%] rounded-full bg-accent/20" />
            <div className="h-[10px] w-[64%] rounded-full bg-surface" />
            <div className="h-[10px] w-[80%] rounded-full bg-accent/15" />
            <div className="mt-[8px] h-[48px] rounded-[4px] bg-surface" />
          </div>
        )}
        {caption ? (
          <p className="absolute bottom-[12px] right-[14px] text-[10px] text-accent md:text-[11px]">
            {caption}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function MockNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-[16px] inline-flex border border-accent px-[10px] py-[6px] text-[11px] text-accent md:text-[12px]">
      {children}
    </p>
  );
}
