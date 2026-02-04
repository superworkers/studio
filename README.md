# nothing-static

A minimal static site build system with clean URLs and template support.

## Architecture

### Path mapping

- `/src/home.html` + `home.css` + `home.js` → `/build/index.html` + `/build/home.css` + `/build/home.js`
- `/src/faq.html` → `/build/faq/index.html`
- `/src/faq/faq.html` + `faq.css` + `faq.js` → `/build/faq/index.html` + `/build/faq/faq.css` + `/build/faq/faq.js`
- `/src/blog/post/post.html` + `post.css` → `/build/blog/post/index.html` + `/build/blog/post/post.css`

### Path rules

- No `index.*` files in src (only generated `index.html` in build)
- CSS/JS files live as siblings to their HTML file
- HTML filename must match folder name when folder exists
- `home.html` at root is special: builds to `/build/index.html` with assets as `home.css`/`home.js`
- Folderless HTML creates folder with `index.html` inside
- Base URL is `/` by default, becomes `/repo/` when CNAME absent and `--dev` not passed

## Features

- **Template system**: All HTML files use `layout.html` with `{template}` replacements
- **Clean URLs**: `page.html` → `index.html`, `colophon.html` → `colophon/index.html`
- **Next.js-style routing**: `app/page.html` → `app/index.html`
- **Global assets**: `global.css` and `global.js` on every page
- **Page-specific assets**: Auto-detect and inject `pagename.css` and `pagename.js`
- **Base path switching**: Different base paths for dev (`/`) vs production (`/nothing-static/`)
- **Watch mode**: Auto-rebuild on file changes

## Usage

```bash
npm run build              # Build for production
npm run dev                # Build for dev with watch mode
npm run watch              # Build for production with watch mode
node build.js              # Build for production
node build.js --dev        # Build for development
node build.js --watch      # Build with watch mode
```

## File Structure

```
src/
  layout.html           # Template with {base}, {title}, {content}, {styles}, {scripts}
  page.html             # Home page → build/index.html
  colophon.html         # → build/colophon/index.html
  app/
    page.html           # → build/app/index.html
  global.css            # Included on every page
  global.js             # Included on every page
  app.css               # Auto-included on app page
  app.js                # Auto-included on app page
```

## Template Variables

- `{base}` - Base path (dev: `/`, prod: `/nothing-static/`)
- `{title}` - Auto-generated from filename
- `{content}` - Page content
- `{styles}` - Auto-injected page-specific styles
- `{scripts}` - Auto-injected page-specific scripts

## Build Output

- `page.html` becomes `index.html`
- `name.html` becomes `name/index.html`
- `app/page.html` becomes `app/index.html`
- All non-HTML files copied as-is

## TODO

### Components

- [ ] app
- [ ] colophon
- [ ] dark mode
- [ ] email capture
- [ ] footer
- [ ] hero
- [ ] applet

### minterface.css

- [ ] Rework heading line-heights
- [ ] Add app vs marketing heading sizes
- [ ] Standardize button styles
- [ ] Consolidate border-radius values (0.5rem, 0.375rem, 50%) into CSS variable

Inspiration

- [base ui](https://base-ui.com)
- [shadcn](https://ui.shadcn.com)
