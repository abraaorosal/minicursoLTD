import type { FC, ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  id?: string;
}

const SectionTitle: FC<Props> = ({ eyebrow, title, description, actions, id }) => (
  <header id={id} className="flex flex-col items-start gap-3 text-left md:flex-row md:items-center md:justify-between">
    <div>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-3xl font-semibold text-white">{title}</h2>
      {description && <p className="mt-2 max-w-2xl text-sm text-slate-300">{description}</p>}
    </div>
    {actions && <div className="flex shrink-0 items-center gap-3">{actions}</div>}
  </header>
);

export default SectionTitle;
