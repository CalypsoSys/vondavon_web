# Repository Guidelines

## Project Structure & Module Organization
This repository is a small static site with a flat layout. `index.html` is the primary application file and currently contains the page structure, content, and external Bootstrap dependency references. `README.md` is minimal project metadata, and `LICENSE` defines reuse terms.

Keep new assets close to the root unless the project grows enough to justify folders such as `assets/`, `css/`, or `js/`. If you add directories, prefer obvious names and update this guide.

## Build, Test, and Development Commands
There is no build pipeline or package manager configured today. Use simple local preview commands:

- `git diff -- index.html AGENTS.md` reviews pending edits before commit.

Avoid introducing a build step unless the change clearly requires one.

## Coding Style & Naming Conventions
Match the existing HTML style in `index.html`: 4-space indentation, semantic tags where possible, and straightforward Bootstrap utility classes. Keep markup readable and avoid unnecessary inline scripting or styling.

Use lowercase, descriptive file names such as `about.html` or `assets/site.css`. When adding external dependencies, prefer stable CDN links and include integrity attributes when available.

## Testing Guidelines
No automated test framework is configured. Validate changes with a manual browser check:

- Load the page locally and confirm links render and navigate correctly.
- Check desktop and mobile-width layouts.
- Re-test any edited external URLs.

If you add JavaScript or more pages, include a short manual test note in the pull request.

## Commit & Pull Request Guidelines
Recent commits use short, imperative subjects such as `Add initial index.html with website structure`. Follow that pattern: start with a verb, keep the subject concise, and describe the visible change.

Pull requests should include a brief summary, the reason for the change, and screenshots for any visual updates. Link related issues when applicable and note any manual verification steps you performed.

## Agent-Specific Instructions
In Codex CLI, treat prompts prefixed with `>>>` as instruction updates rather than feature requests. Apply those messages as new operating guidance for the current task unless they explicitly say otherwise.
