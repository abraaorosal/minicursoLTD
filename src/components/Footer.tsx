import type { FC } from "react";

const Footer: FC = () => (
  <footer className="mt-20 rounded-3xl border border-white/5 bg-brand-dark/80 px-6 py-10 text-sm text-white/60">
    <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between">
      <p className="font-semibold text-white/80">LTD • Laboratório de Transformação Digital</p>
      <p>© 2025. Mini-curso LTD 2025.2. Todos os direitos reservados.</p>
    </div>
    <p className="mt-4 text-xs text-white/40">
      Atualize os links de inscrição com seus formulários oficiais antes de publicar.
    </p>
  </footer>
);

export default Footer;
