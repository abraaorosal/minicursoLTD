import type { FC } from "react";

const CallToAction: FC = () => (
  <section
    id="inscricoes"
    className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-brand-blue/70 via-brand-purple/60 to-brand-blue/80 px-8 py-12 text-center shadow-lg shadow-brand-blue/20"
  >
    <div className="absolute -right-8 top-0 h-full w-40 rounded-full bg-white/10 blur-3xl" aria-hidden />
    <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-5 text-white">
      <h2 className="text-3xl font-semibold leading-tight">Garanta sua vaga agora mesmo</h2>
      <p className="text-base text-white/80">
        Defina sua disponibilidade, receba o link exclusivo do seu mini-curso e conecte com a comunidade LTD.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#agenda"
          className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/20 px-6 py-3 text-sm font-semibold text-white"
        >
          Consultar agenda completa
        </a>
        <a
          href="https://forms.office.com/r/9z9qy9dbqi"
          className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-blue transition hover:scale-[1.02] hover:text-brand-purple"
        >
          Preencher disponibilidade
          <span aria-hidden className="transition-transform group-hover:translate-x-1">↗</span>
        </a>
      </div>
    </div>
  </section>
);

export default CallToAction;
