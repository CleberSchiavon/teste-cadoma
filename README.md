# Teste Cadoma

Usei de base o boilerplate do Theodorus clarence

- [One-stop Starter to Maximize Efficiency on Next.js & Tailwind CSS Projects](https://theodorusclarence.com/blog/one-stop-starter)

## Features

Esse repositório contém

- ⚡️ Next.js 13
- ⚛️ React 18
- ✨ TypeScript
- 💨 Tailwind CSS 3
- 🃏 Jest
- 🗺 Site Map — Automaticamente é gerado um sitemap.xml (Usado pra consultar as estasticas de indexação do site ou seja se ele tá sendo bem indexado no google ou não)

## Dev Features

- 📈 Absolute Import and Path Alias — Uma alternativa do typescript pra importar arquivos sem precisar de "../../", ao invés disso usamos "@/(pasta)"
- 📏 ESLint — O ESLint serve pra procurar problemas de escrita dentro do código (pode ser personalizado conforme as vontades do usuário)
- 💖 Prettier — Formata o código automaticamente com os padrões definidos do usuário
- 🐶 Husky & Lint Staged — Serve pra rodar uma série de scripts nos arquivos prestes a commitar
- 🤖 Conventional Commit Lint — Serve pra conferir se os commits estão sendo feitos usando Conventional Commit (https://www.conventionalcommits.org/en/v1.0.0/)
- ⏰ Release Please — Gera um changelog automatico a cada build, mostrando todas as mudanças que foram feitas
- 👷 Github Actions — Todo commit passa por uma pipeline que confere clean code antes de deployar (deploy a configurar)
- 👀 Default Open Graph — Awesome open graph generated using [og](https://github.com/theodorusclarence/og), fork it and deploy!

## Getting Started

### 1. Instalar dependências

Nesse projeto o yarn precisa ser utilizado por conta do husky

```bash
yarn install
```

### 2. Rodar a aplicação

Rode a aplicação utilizando

```bash
yarn dev
```

## Sempre lembrar dos conventional commits

Esse projeto utiliza [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), é obrigatório o uso pra commitar

## Expansion Pack 📦

Esse repositório usa o expansion pack do Theodorus [expansion pack](https://github.com/theodorusclarence/expansion-pack).

Com ele é fácil de adicionar novas dependêncais pra dentro desse projeto com apenas uma linha de comando

https://user-images.githubusercontent.com/55318172/146631994-e1cac137-1664-4cfe-950b-a96decc1eaa6.mp4

Link abaixo [expansion pack repository](https://github.com/theodorusclarence/expansion-pack) com os comandos
