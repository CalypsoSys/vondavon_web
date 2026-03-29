# Vondavon Web

Static domain portfolio site designed for direct deployment to Cloudflare Pages.

## Project structure

- `htdocs/` contains the entire deployable static site
- repo root contains project metadata, test configuration, and documentation

## Local preview

Use Live server

## Automated validation

This project uses Node's built-in test runner for lightweight static checks:

```bash
npm test
```

The tests verify required static files, key semantic structure, secure outbound links, and Cloudflare header rules.

## Cloudflare Pages

This repo is configured to deploy as a buildless static site:

- Build command: none
- Build output directory: `htdocs`

