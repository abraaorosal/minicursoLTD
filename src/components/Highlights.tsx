import type { FC } from "react";

interface Highlight {
  title: string;
  description: string;
}

interface Props {
  items: Highlight[];
}

const Highlights: FC<Props> = ({ items }) => (
  <section className="grid gap-6 md:grid-cols-3">
    {items.map((item) => (
      <div
        key={item.title}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-transparent p-[1px]"
      >
        <div className="h-full rounded-3xl bg-brand-dark/75 p-6 backdrop-blur">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/20 text-brand-blue">
            <span className="text-2xl">✦</span>
          </div>
          <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
          <p className="mt-2 text-sm text-slate-300">{item.description}</p>
        </div>
      </div>
    ))}
  </section>
);

export default Highlights;
