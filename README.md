# SCSS Animation Showcase

A responsive webpage that showcases a collection of SCSS-powered animations.

## Features

- Modern, responsive layout using SCSS
- Multiple animation examples: bounce, typing, slide-in, pulse, spinner, image zoom, gradient shift, glow, and more
- Light and dark theme toggle
- Modular SCSS structure for easy customization

## Folder Structure

```
dist/
  ├── assets/           # Images and other assets
  ├── css/              # Compiled CSS output
  ├── js/               # JavaScript files
  ├── scss/             # SCSS source files
      ├── _variables.scss
      ├── _mixins.scss
      ├── _animations.scss
      ├── _components.scss
      └── main.scss
  └── index.html        # Main HTML file
README.md
```

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/SCSS-Animation-Showcase.git
   ```

2. **Install dependencies (if using a build tool):**
   ```sh
   npm install
   ```

3. **Compile SCSS to CSS:**
   ```sh
   sass dist/scss/main.scss dist/css/main.css
   ```

4. **Open `dist/index.html` in your browser to view the showcase.**

## Usage

- Click the "Light Mode" / "Dark Mode" button to toggle themes.
- Hover or interact with the cards to see various SCSS animations in action.

## Customization

- Edit `dist/scss/_variables.scss` to change colors, fonts, and spacing.
- Add or modify animations in `dist/scss/_animations.scss`.
- Update component styles in `dist/scss/_components.scss`.

## License

MIT License

---
Created by [thatladtemod](https://github.com/thatladtemod)
