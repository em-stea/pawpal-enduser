# PawPal — Enduser

App web de PawPal para tutores de mascotas y veterinarios: autenticación, registro por rol e inicio con navegación según el tipo de usuario.

## Stack

| Área | Tecnología |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19 + React Compiler |
| Estilos | Tailwind CSS 4 + CSS variables (design tokens) |
| Componentes | shadcn/ui (Base UI / base-vega) + CVA |
| Formularios | React Hook Form + Zod + next-safe-action |
| Auth | Better Auth (email/password, Google OAuth, passkeys) |
| Base de datos | PostgreSQL + Prisma |
| Mapas / lugares | Google Places (autocomplete + details) |
| Motion | Motion + Embla Carousel |
| Iconos | Lucide + iconos custom en `shared/components/icons` |
| Calidad | ESLint (Next, React, a11y, Prettier, React Compiler) + Prettier |
| Package manager | pnpm |

## Requirements

- Node.js 22+
- [pnpm](https://pnpm.io/) 11+
- PostgreSQL (local o remoto)
- Variables de entorno (ver `.env.example`)

## Getting started

```bash
# 1. Instalar dependencias
pnpm install

# 2. Configurar entorno
cp .env.example .env
# Completar DATABASE_URL, DIRECT_URL, AUTH_* y Google Maps / Places

# 3. Generar Prisma Client y aplicar schema
pnpm exec prisma generate
pnpm exec prisma db push

# 4. Desarrollo (Turbopack)
pnpm dev
```

Abrí [http://localhost:3000](http://localhost:3000).

### Variables de entorno

| Variable | Uso |
| --- | --- |
| `DATABASE_URL` | Conexión Prisma (PostgreSQL) |
| `DIRECT_URL` | URL directa (migraciones / tooling) |
| `AUTH_URL` / `BETTER_AUTH_URL` | Base URL de la app (ej. `http://localhost:3000`) |
| `AUTH_SECRET` / `BETTER_AUTH_SECRET` | Secret de Better Auth |
| `AUTH_GOOGLE_ID` / `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `AUTH_GOOGLE_SECRET` / `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | API key de Google Maps / Places |
| `NEXT_PUBLIC_PLACES_AUTOCOMPLETE_URL` | Endpoint Places Autocomplete (opcional override) |
| `NEXT_PUBLIC_PLACES_DETAILS_URL` | Endpoint Places Details (opcional override) |

Redirect URI de Google OAuth: `{AUTH_URL}/api/auth/callback/google`.

### Scripts

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Servidor de desarrollo con Turbopack |
| `pnpm build` | Build de producción |
| `pnpm start` | Servidor de producción (después de `build`) |
| `pnpm lint` | Lint con cache |
| `pnpm lint:fix` | Lint y auto-fix |

## Estructura

```text
src/
├── app/
│   ├── (auth)/auth/     # login, signup (tutor/vet), forgot/reset password
│   ├── (home)/          # Parallel routes @tutor / @vet + bottom nav
│   └── api/             # Better Auth + Places (autocomplete, details)
├── features/
│   ├── auth/            # Formularios, schemas, hooks, actions, Places
│   └── home/            # Home tutor: mascotas, cards, carousel
└── shared/
    ├── components/      # UI reutilizable
    ├── lib/             # prisma, routes, tw-merge
    └── styles/          # Tokens, foundations, estilos de componentes
```

### TypeScript aliases

| Alias | Path |
| --- | --- |
| `@/*` | `./src/*` |
| `@components/*` | `./src/shared/components/*` |
| `@styles/*` | `./src/shared/styles/*` |
| `@utils/*` | `./src/shared/utils/*` |
| `@types/*` | `./src/types/*` |

### Rutas principales

| Ruta | Descripción |
| --- | --- |
| `/auth/login` | Login |
| `/auth/signup` | Elección de rol |
| `/auth/signup/tutor` | Registro tutor |
| `/auth/signup/vet` | Registro veterinario (stepper) |
| `/auth/forgot-password` | Recuperar contraseña |
| `/` | Home según rol (`@tutor` / `@vet`) |
| `/mis-mascotas`, `/turnos`, `/clinicas`, `/perfil` | Secciones tutor |

## Features

### Auth (`src/features/auth`)

- Login con email/password y Google
- Registro de **tutor** y **veterinario** (formulario multi-step para vet)
- Especialidades, cobertura, modalidad, horarios y Places autocomplete
- Schemas Zod + React Hook Form

### Home (`src/features/home`)

- Parallel routes por rol en `(home)`
- Carousel de mascotas, cards de pet y tratamientos activos
- Bottom navigation compartida

## Design system

### Componentes (`src/shared/components`)

Button, Input, Textarea, Field, Form, Select, Checkbox, Radio Group, Toggle / Toggle Group, Tabs, Card, Badge, Carousel, Progress, Navbar, Bottom Navigation, Logo, Heading / Text, Toast, Spinner, Container, Separator, Icons.

### Tokens (`src/shared/styles`)

- **Foundations** — paleta y fuentes (**DM Sans**, **Manrope**)
- **Semantic tokens** — colores semánticos, tipografía y texto
- **Component styles** — tokens por componente (button, card, badge, etc.)
- **globals.css** — entrada Tailwind + tokens + base

### Next config

- React Compiler habilitado
- `cacheComponents` habilitado
- Logging de fetch con URL completa

### Tooling

- shadcn (`components.json`, estilo `base-vega`, base color `zinc`)
- ESLint con Next, React, hooks, a11y, imports, Prettier y React Compiler
- Prettier + `prettier-plugin-tailwindcss`

## Cómo contribuir en el código

1. Auth y flujos de registro → `src/features/auth/`.
2. Home y UI de mascotas → `src/features/home/`.
3. UI compartida → `@/shared/components` o `@components/...`.
4. Tokens en `src/shared/styles` antes de hardcodear colores o tipografía.
5. Nuevos componentes shadcn: `pnpm dlx shadcn@latest add <component>`.

## License

Private (`private: true` en `package.json`).
