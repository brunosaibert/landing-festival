# Festival App

Aplicação web de streaming de festival de música construída com Next.js, React e Chakra UI.

## 🚀 Tecnologias

- **Next.js 16** - Framework React
- **React 19** - Biblioteca JavaScript
- **TypeScript** - Tipagem estática
- **Chakra UI** - Biblioteca de componentes
- **Embla Carousel** - Carrosséis e rails
- **pnpm** - Gerenciador de pacotes

## 📋 Pré-requisitos

- Node.js 20 ou superior
- pnpm (recomendado) ou npm

## 🔧 Instalação

Clone o repositório e instale as dependências:

```bash
# Instalar dependências
pnpm install
```

## ▶️ Como Executar

### Modo de Desenvolvimento

```bash
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Build de Produção

```bash
# Criar build
pnpm build

# Executar build
pnpm start
```

## 🛠️ Scripts Disponíveis

- `pnpm dev` - Inicia servidor de desenvolvimento
- `pnpm build` - Cria build de produção
- `pnpm start` - Executa build de produção
- `pnpm lint` - Executa linter
- `pnpm format` - Formata código com Prettier

## 📁 Estrutura do Projeto

```
src/
├── app/             # Páginas e rotas (App Router)
├── components/      # Componentes React reutilizáveis
├── data/            # Dados mockados
└── theme.ts         # Configuração do tema Chakra UI
```

## 🎨 Recursos

- Carrosséis interativos com Embla
- Cards de artistas, canais ao vivo e conteúdo exclusivo
- Otimizado para performance com React memoization
