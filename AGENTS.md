<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Quickstart

- Framework: Next.js App Router (see [README.md](README.md) for general usage)
- Dev server: `npm run dev`
- Build: `npm run build`
- Start: `npm run start`
- Lint: `npm run lint`

# UI Architecture (Highly Modular)

## Core principles

- Decompose UI into the smallest meaningful components (atomic-level where possible)
- One component = one clear purpose; avoid mixed concerns (UI, logic, state)
- Prefer composition over inheritance and avoid monolithic components
- Reuse existing components before creating new ones
- Keep props minimal, predictable, and typed
- Use functional components only

## Component hierarchy

- Primitives: base UI elements (buttons, inputs, labels)
- Composed: small combinations of primitives
- Feature-level: assembled from composed and primitives

## Styling conventions

- Prefer Tailwind CSS for styling and consistent class composition
- Keep styling at the component boundary; avoid tightly coupled business logic

## Behavior separation

- Keep UI components presentational when possible
- Move data fetching, state, and side effects to route-level or dedicated hooks

# When in doubt

- Link to existing patterns in the codebase rather than duplicating them
- Ask before introducing new shared component folders or design system layers
