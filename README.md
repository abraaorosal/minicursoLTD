# Mini-curso LTD 2025.2

Landing page em React + TypeScript com Tailwind CSS para divulgar os quatro mini-cursos (Python e Front-end, presenciais e online) do Laboratório de Transformação Digital.

## Tecnologias
- React 18 + TypeScript
- Vite como bundler
- Tailwind CSS para o design futurista
- PostCSS + Autoprefixer

## Como iniciar
1. Certifique-se de ter Node.js ≥ 18 instalado.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra `http://localhost:5173` no navegador.

## Estrutura principal
- `src/App.tsx`: Monta a página com todas as seções (hero, agenda, disponibilidade, FAQ).
- `src/data/content.ts`: Conteúdo dos mini-cursos, destaques e perguntas frequentes.
- `src/components/*`: Componentes reutilizáveis para cards, FAQ, CTA e afins.
- `src/styles/index.css`: Estilos globais + utilitários do Tailwind.

## Personalizações
- Atualize os links de inscrição em `src/data/content.ts` e no componente `CallToAction`.
- Ajuste datas/horários dos encontros conforme a agenda oficial.
- Altere cores e fontes no `tailwind.config.ts` caso deseje outra identidade visual.

## Build para produção
```bash
npm run build
npm run preview
```

Boa imersão! 🚀
