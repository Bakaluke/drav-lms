# 🎓 DravDev LMS - Plataforma de Vídeo Aulas

Sistema de Gestão de Aprendizado (LMS) desenvolvido como MVP para gestão e exibição de cursos e vídeo aulas. O projeto utiliza uma arquitetura moderna Fullstack separando a administração do conteúdo da área de consumo do aluno.

## 🛠 Tecnologias Utilizadas

- **Backend:** Laravel 10 (PHP)
- **Frontend:** React.js + Inertia.js (SPA Monolítico)
- **Admin Panel:** FilamentPHP v3
- **Estilização:** TailwindCSS
- **Infraestrutura:** Docker (Laravel Sail) & MySQL

## ✨ Funcionalidades

- **Painel Administrativo (Instrutores):**
  - CRUD completo de Cursos e Módulos.
  - Upload de Vídeos e Capas de curso.
  - Gestão de status (Publicado/Rascunho).
- **Área do Aluno:**
  - Listagem de cursos disponíveis.
  - Player de vídeo customizado com lista de reprodução lateral.
  - Navegação fluida (SPA) sem recarregamento de página.

## 📸 Screenshots

## 🚀 Como rodar o projeto

1. Clone o repositório:
\`\`\`bash
git clone https://github.com/SEU_USUARIO/drav-lms.git
\`\`\`
2. Suba os containers Docker:
\`\`\`bash
./vendor/bin/sail up -d
\`\`\`
3. Instale as dependências:
\`\`\`bash
./vendor/bin/sail composer install
./vendor/bin/sail npm install && npm run dev
\`\`\`
4. Rode as migrações:
\`\`\`bash
./vendor/bin/sail artisan migrate --seed
\`\`\`