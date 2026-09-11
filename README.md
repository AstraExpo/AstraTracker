# Astra Tracker

A lightweight desktop app for tracking daily tasks, habits, goals, plans, projects, and finances — built with Tauri, React, and TypeScript.

## Features

- ✅ Task tracking with completion status
- 📊 Analytics dashboard for progress over time
- 🔁 Habits, goals, plans, and project tracking (in progress)
- 💰 Finance tracking (planned)
- 🌓 Light/dark theme support
- 💾 Local-first data persistence — your data stays on your machine

## Tech Stack

- [Tauri 2](https://tauri.app/) — native desktop shell
- [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (Base UI)
- [React Router](https://reactrouter.com/) for navigation
- Tauri Store plugin for local persistence

## Development

```bash
pnpm install
pnpm tauri dev
```

## Building

```bash
pnpm tauri build
```

Produces `.deb`, `.rpm`, and `.AppImage` on Linux (see [releases](../../releases) for other platforms).

## License

TBD
