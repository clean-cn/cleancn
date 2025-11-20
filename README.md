# Cleancn - Theme Engine

Transform your website with a single prompt. Apply professional design styles instantly with AI-powered theme generation. Works seamlessly with Cursor AI, Claude, and other AI coding assistants.

## Features

- 18 Professional Presets - From Neobrutalism to Glassmorphism
- AI-Optimized Prompts - Detailed prompts designed for Cursor AI and Claude
- Instant Application - See changes in real-time on the landing page
- Accessibility First - WCAG AA compliant color contrast
- Performance Optimized - Smart caps on intensive effects
- Fully Customizable - Extend presets or create from scratch
- Single Page Experience - Everything you need on one page

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the interactive landing page with all themes, components, and prompts.

## Usage

### Try It Live

Visit the landing page to:

- Browse all 18 theme presets
- See live component previews
- Generate themes from prompts
- Copy detailed prompts for AI assistants
- Apply themes instantly

### Apply a Theme Programmatically

```tsx
"use client";

import { useTheme } from "@/lib/theme-provider";
import { themePresets } from "@/lib/theme-presets";

export function MyComponent() {
  const { setTheme } = useTheme();

  const applyTheme = () => {
    const preset = themePresets.find((p) => p.id === "neobrutalism");
    if (preset) setTheme(preset.theme);
  };

  return <button onClick={applyTheme}>Apply Neobrutalism</button>;
}
```

### Generate from Prompt

```tsx
import { parsePrompt } from "@/lib/prompt-mapper";
import { useTheme } from "@/lib/theme-provider";

const { setTheme } = useTheme();
const theme = parsePrompt("minimal, calm, muted, lots of whitespace");
setTheme(theme);
```

### Use with AI Assistants

1. Copy a prompt: Click "Copy Prompt" on any theme preset on the landing page
2. Open your AI assistant: Cursor AI, Claude, GitHub Copilot, or any AI coding assistant
3. Paste and apply: The AI will understand the complete design system and apply it to your components

Each preset includes a detailed prompt with:

- Style overview and characteristics
- Complete color palette specifications
- Typography guidelines
- Component styling examples
- Implementation guidelines

## Available Presets

1. Neobrutalism - Bold, raw design with chunky borders
2. Minimalism - Clean and calm with whitespace
3. Pure Minimalism - Extreme simplicity, monochrome
4. Bold Minimalism - Oversized typography, high contrast
5. Glassmorphism - Frosted glass with soft glow
6. Modern Flat - Clean flat design, crisp edges
7. Claymorphism - Soft 3D clay-like elements
8. Bento Grid - Modular card layout
9. Material You - Dynamic tonal palettes
10. Fluent Design - Microsoft's acrylic surfaces
11. Aurora Mesh - Soft gradient mesh backgrounds
12. Neon Noir - Dark cyberpunk with neon accents
13. Nord Minimal - Cool desaturated palette
14. Duotone - Two-color system, bold contrast
15. Neumorphism - Soft raised cards (use cautiously)
16. Editorial Magazine - Magazine-style layout
17. Premium SaaS - Professional SaaS aesthetic
18. Data-Dense Dashboard - Compact, information-dense

## Prompt Keywords

Combine these keywords to create custom themes:

- Spacing: airy, breathing, spacious, compact, dense
- Shape: round, pill, soft, sharp, angular
- Borders: chunky, brutal, thin, hairline
- Shadows: offset, poster, flat, glow
- Effects: glass, frosted, clay, neon
- Style: muted, vibrant, monochrome, bold

## Project Structure

```text
cleancn/
├── app/
│   ├── page.tsx                 # Interactive landing page
│   └── globals.css              # Global styles
├── components/
│   ├── ui/                      # UI components
│   ├── theme-switcher.tsx      # Theme selector
│   └── prompt-input.tsx        # Prompt interface
├── lib/
│   ├── tokens.ts               # Theme types & defaults
│   ├── theme-provider.tsx      # React context
│   ├── theme-presets.ts        # 18 style presets with detailed prompts
│   ├── prompt-mapper.ts        # Prompt parser
│   └── utils.ts                # Utility functions
└── docs/
    └── migration-guide.md      # Migration docs
```

## Core Libraries

The `lib` folder contains essential utilities:

- `tokens.ts` - Theme configuration types and default theme
- `theme-provider.tsx` - React context for theme management
- `theme-presets.ts` - 18 predefined theme presets with detailed prompts
- `prompt-mapper.ts` - Parses natural language prompts into theme configurations
- `utils.ts` - Shared utility functions (cn helper for className merging)

## Accessibility

All presets aim for WCAG AA compliance. Themes are validated for proper color contrast ratios.

## Performance

Themes with glass/glow effects are capped at safe defaults:

- Glass blur: max 20px
- Glow: max 20px
- Shadow blur: max 40px

Override with caution and test on target devices.

## Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Add your preset/feature
4. Test accessibility (contrast ratios)
5. Submit a pull request

## License

MIT License - see [LICENSE](./LICENSE) for details

## Support

- Documentation: Check the landing page for examples
- Issues: Open a GitHub issue
- Discussions: GitHub Discussions
