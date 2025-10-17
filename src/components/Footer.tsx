import type { FC } from "react";

const Footer: FC = () => (
  <footer className="mt-20 rounded-3xl border border-white/5 bg-brand-dark/80 px-6 py-10 text-sm text-white/60">
    <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/20 bg-white/10 p-1">
          <img src="/logo-estacio.png" alt="Logo LTD Estácio Via Corpvs" className="max-h-full max-w-full object-contain" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white/80">LTD Estácio Via Corpvs</p>
          <p className="text-xs uppercase tracking-[0.25em] text-brand-blue/80">Laboratório de Transformação Digital</p>
        </div>
      </div>
      <p className="text-white/60">© 2025. Mini-curso LTD 2025.2. Todos os direitos reservados.</p>
    </div>
    <p className="mt-4 text-xs text-white/70">Coordenação: Professor Abraão Henrique e Danielle Amorim.</p>
    <p className="mt-4 text-xs text-white/40">
      Atualize os links de inscrição com seus formulários oficiais antes de publicar.
    </p>
  </footer>
);

export default Footer;
