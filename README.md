# about

Portfólio pessoal de João Vinícius Hinkeldey Mota — DevOps Analyst | SRE & Engenharia de Plataforma.

## Stack

- React 19 + TypeScript
- Vite 8 (React Compiler via Babel)
- CSS puro com classes globais e variáveis
- i18n interno via React Context (pt-BR / en-US)
- Deploy no Cloudflare Pages (GitHub Actions)

## Comandos

```bash
pnpm install
pnpm dev       # servidor de desenvolvimento
pnpm build     # type-check + build de produção
pnpm preview   # pré-visualiza o build
pnpm lint      # ESLint
```

## Estrutura

```
src/
  App.tsx            composição das seções
  site.ts            identidade (nome, email, linkedin, localização)
  sections.ts        ids das âncoras das seções
  i18n/
    translations.ts  tipos e conteúdo bilíngue
    index.tsx        I18nProvider + useI18n
  hooks/
    useReveal.ts     animação de entrada ao rolar
  components/
    Section.tsx      shell reutilizável das seções
    Nav.tsx Hero.tsx About.tsx Skills.tsx Experience.tsx Contact.tsx Footer.tsx
```

Ajustes de conteúdo passam por `src/i18n/translations.ts` e `src/site.ts`; o restante é apresentação.
