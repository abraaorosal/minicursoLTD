import type { FC } from "react";

const accentLines = [
  { id: 1, gradient: "from-brand-purple/90 via-brand-blue/70 to-brand-purple/50" },
  { id: 2, gradient: "from-brand-blue/70 via-brand-purple/80 to-brand-blue/40" }
];

const Hero: FC = () => (
  <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-brand-dark/70 px-8 pb-20 pt-16 shadow-2xl shadow-brand-blue/10 backdrop-blur">
    <div className="absolute inset-0 -top-32 flex items-center justify-center opacity-70">
      <div className="h-[520px] w-[520px] rounded-full bg-gradient-to-br from-brand-purple/35 via-brand-blue/30 to-brand-blue/10 blur-3xl" />
    </div>

    <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-8 text-center text-slate-100">
      <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm font-medium uppercase tracking-[0.3em] text-white/70">
        Módulo Básico LTD 2025.2
      </span>

      <h1 className="text-balance text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
        Quatro cursos introdutórios para começar sua jornada em tecnologia
      </h1>

      <p className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl">
        De 27 de outubro a 22 de novembro, oferecemos duas trilhas presenciais e duas online, cobrindo front-end e
        Python com apoio do Laboratório de Transformação Digital. Escolha o formato ideal, participe de encontros
        semanais de 1h30 e conclua com um projeto guiado.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          className="group inline-flex items-center gap-2 rounded-full bg-brand-purple px-6 py-3 text-base font-semibold text-white shadow-glow transition hover:scale-[1.02] hover:bg-brand-blue"
          href="#agenda"
        >
          Explorar agenda completa
          <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
        </a>
        <a
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
          href="#inscricoes"
        >
          Reservar minha vaga
        </a>
      </div>
    </div>

    <div className="relative z-10 mt-16 grid gap-3 md:grid-cols-3">
      {accentLines.map((line) => (
        <div
          key={line.id}
          className={`h-1 w-full rounded-full bg-gradient-to-r ${line.gradient} via-50% to-90%`}
          aria-hidden
        />
      ))}
    </div>
  </section>
);

export default Hero;
