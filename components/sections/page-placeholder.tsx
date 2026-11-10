type PagePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

export function PagePlaceholder({ eyebrow, title, description, children }: PagePlaceholderProps) {
  return (
    <div className="mx-auto max-w-7xl px-5 pt-14 pb-20 sm:px-8 sm:pt-20 sm:pb-28 lg:px-12">
      <div className="border-b pb-10 sm:pb-14">
        <p className="mb-5 text-xs font-semibold tracking-[0.16em] text-primary uppercase">{eyebrow}</p>
        <h1 className="text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">{title}<span className="text-primary">.</span></h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
      </div>
      {children}
    </div>
  );
}
