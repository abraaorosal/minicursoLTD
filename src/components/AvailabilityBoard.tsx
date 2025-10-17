import type { FC } from "react";

export interface AvailabilitySlot {
  label: string;
  days: string;
  hours: string;
  focus: string;
}

interface Props {
  title: string;
  slots: AvailabilitySlot[];
}

const AvailabilityBoard: FC<Props> = ({ title, slots }) => (
  <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-brand-dark/75 p-6 shadow-inner shadow-brand-blue/10">
    <div className="flex items-center gap-2 text-white">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-purple/40 font-semibold text-white">
        ⌛
      </span>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>

    <ul className="space-y-4 text-sm text-slate-300">
      {slots.map((slot) => (
        <li
          key={`${title}-${slot.label}`}
          className="rounded-2xl border border-white/10 bg-brand-dark/65 px-4 py-4 transition hover:border-brand-blue/40"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">{slot.label}</p>
          <p className="mt-1 text-sm font-semibold text-white">{slot.days}</p>
          <p className="text-sm text-white/75">{slot.hours}</p>
          <p className="mt-2 text-xs text-white/60">{slot.focus}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default AvailabilityBoard;
