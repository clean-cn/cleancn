import { ThemeConfig } from "./tokens";

export interface StylePreset {
  id: string;
  name: string;
  description: string;
  prompt: string;
  theme: ThemeConfig;
}

export const themePresets: StylePreset[] = [
  {
    id: "neobrutalism",
    name: "Neobrutalism",
    description: "Bold, raw design with thick black borders, hard shadows, and bright high-contrast colors",
    prompt: `Transform my website to use the Neobrutalism design style.

## Style Overview
A bold, unapologetic design style featuring thick borders, hard shadows, and high-contrast colors inspired by Brutalist architecture.

## Key Characteristics
- Thick black borders (4px solid)
- Hard drop shadows with NO blur (4px 4px 0 black)
- NO rounded corners - sharp, angular edges only
- Bold, uppercase typography with tight letter spacing
- High contrast color combinations (bright yellows, pinks, cyan with pure black)
- Visible grids and structure
- Flat, solid colors - no gradients

## Color Palette
- Primary: Pure black (#000000) for text and borders
- Backgrounds: White (#FFFFFF) or bright yellow (#FDE047)
- Accent 1: Hot pink (#F472B6)
- Accent 2: Cyan (#22D3EE)
- Secondary: Bright purple (#A855F7)
- All borders: Pure black

## Typography
- Font weight: Black/900 for headings
- Text transform: UPPERCASE for emphasis
- Letter spacing: Tight (-0.02em to 0.05em)
- Font family: Sans-serif (Inter, Arial, Helvetica)
- Line height: Tight (1.1-1.3)

## Component Styling Examples

### Buttons
- Background: Bright yellow or pink
- Border: 4px solid black
- Shadow: 4px 4px 0 black
- Text: Uppercase, bold (900 weight)
- Padding: 12px 24px
- On hover: Shift shadow to 2px 2px 0 black and translate element

### Cards
- Background: White
- Border: 4px solid black
- Shadow: 8px 8px 0 black
- NO border radius
- Content padding: 24px

### Inputs
- Background: White
- Border: 3px solid black
- Shadow: 3px 3px 0 black
- NO border radius
- Focus: Thicker border (4px) with cyan shadow

## Implementation Guidelines
- Remove ALL border-radius values (0px everywhere)
- Use box-shadow format: Xpx Ypx 0 #000000 (no blur)
- High contrast ratios (WCAG AAA where possible)
- Bold, geometric layouts
- Visible structure and grid
- No subtle effects - everything is bold and visible`,
    theme: {
      name: "neobrutalism",
      colors: {
        primary: "oklch(0 0 0)",
        primaryForeground: "oklch(1 0 0)",
        surface: "oklch(1 0 0)",
        surfaceAlt: "oklch(0.94 0.11 90)",
        foreground: "oklch(0 0 0)",
        muted: "oklch(0.94 0.11 90)",
        mutedForeground: "oklch(0 0 0)",
        accent: "oklch(0.78 0.20 330)",
        accentForeground: "oklch(0 0 0)",
        border: "oklch(0 0 0)",
        input: "oklch(0 0 0)",
        ring: "oklch(0.70 0.20 195)",
        destructive: "oklch(0.70 0.28 25)",
        destructiveForeground: "oklch(0 0 0)",
        card: "oklch(1 0 0)",
        cardForeground: "oklch(0 0 0)",
        popover: "oklch(0.94 0.11 90)",
        popoverForeground: "oklch(0 0 0)",
        secondary: "oklch(0.70 0.26 305)",
        secondaryForeground: "oklch(0 0 0)",
      },
      radius: "none",
      spacingScale: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128],
      typeScale: {
        base: 16,
        h1: 64,
        h2: 48,
        h3: 36,
        h4: 28,
        h5: 22,
        h6: 18,
        leading: { tight: 1.1, normal: 1.3, relaxed: 1.4, loose: 1.5 },
      },
      border: { weight: 4, style: "solid", contrast: 2 },
      shadow: { strength: 1, blur: 0, yOffset: 4, xOffset: 4, inner: false, color: "oklch(0 0 0)" },
      effects: { glassAlpha: 0, glassBlur: 0, grain: 0, saturation: 1.3, contrast: 1.2, glow: 0 },
      layout: { cardDensity: "normal", gridStyle: "standard", gapScale: 1.5 },
    },
  },
  {
    id: "minimalism",
    name: "Minimalism",
    description: "Clean and calm with lots of whitespace",
    prompt: `Transform my website to use Minimalism design principles.

## Style Overview
A design philosophy that emphasizes simplicity, clarity, and intentional use of space. Every element serves a purpose.

## Key Characteristics
- Generous whitespace and breathing room between elements
- Subtle, muted color palette with low saturation
- Soft shadows with minimal contrast
- Medium border radius for gentle, approachable feel
- Clean typography with comfortable line heights
- Focus on content hierarchy and readability

## Color Palette
- Backgrounds: Off-white (#FCFCFC) or pure white
- Text: Dark gray (#333333) instead of pure black
- Muted accents: Soft grays (#EBEBEB, #F5F5F5)
- Minimal color: One subtle accent color if needed
- High readability with WCAG AA+ contrast

## Typography
- Font family: Clean sans-serif (Inter, SF Pro, Helvetica)
- Font weights: Regular (400) for body, Semibold (600) for headings
- Line height: Generous (1.6-1.8 for body text)
- Letter spacing: Normal to slightly loose
- Hierarchy through size and weight, not color

## Component Styling Examples

### Buttons
- Background: Subtle gray or minimal border
- Padding: Comfortable (12px 24px)
- Border radius: 6-8px
- Hover: Slight background darkening
- No heavy shadows

### Cards
- Background: White or off-white
- Border: 1px solid light gray
- Subtle shadow: 0 1px 3px rgba(0,0,0,0.05)
- Border radius: 8px
- Generous padding: 24-32px

### Spacing
- Use consistent 8px grid system
- Generous margins between sections (64px+)
- Comfortable padding within containers
- Let content breathe

## Implementation Guidelines
- Remove clutter and unnecessary elements
- Use whitespace intentionally as a design element
- Keep color palette limited (2-3 colors max)
- Ensure excellent readability with proper contrast
- Maintain consistent spacing rhythm
- Prioritize content over decoration`,
    theme: {
      name: "minimalism",
      colors: {
        primary: "oklch(0.25 0 0)",
        primaryForeground: "oklch(0.98 0 0)",
        surface: "oklch(0.99 0 0)",
        surfaceAlt: "oklch(0.96 0 0)",
        foreground: "oklch(0.20 0 0)",
        muted: "oklch(0.94 0 0)",
        mutedForeground: "oklch(0.50 0 0)",
        accent: "oklch(0.92 0 0)",
        accentForeground: "oklch(0.25 0 0)",
        border: "oklch(0.88 0 0)",
        input: "oklch(0.88 0 0)",
        ring: "oklch(0.70 0 0)",
        destructive: "oklch(0.55 0.20 25)",
        destructiveForeground: "oklch(0.98 0 0)",
        card: "oklch(0.99 0 0)",
        cardForeground: "oklch(0.20 0 0)",
        popover: "oklch(0.99 0 0)",
        popoverForeground: "oklch(0.20 0 0)",
        secondary: "oklch(0.94 0 0)",
        secondaryForeground: "oklch(0.25 0 0)",
      },
      radius: "md",
      spacingScale: [8, 16, 24, 32, 48, 64, 96, 128, 192, 256],
      typeScale: {
        base: 16,
        h1: 42,
        h2: 32,
        h3: 26,
        h4: 22,
        h5: 18,
        h6: 16,
        leading: { tight: 1.3, normal: 1.6, relaxed: 1.8, loose: 2.2 },
      },
      border: { weight: 1, style: "solid", contrast: 0.8 },
      shadow: { strength: 0.05, blur: 12, yOffset: 2, xOffset: 0, inner: false },
      effects: { glassAlpha: 0, glassBlur: 0, grain: 0, saturation: 0.85, contrast: 0.95, glow: 0 },
      layout: { cardDensity: "spacious", gridStyle: "standard", gapScale: 1.5 },
    },
  },
  {
    id: "pure-minimalism",
    name: "Pure Minimalism",
    description: "Extreme simplicity with monochrome palette",
    prompt: `Transform my website to use Pure Minimalism design principles.

## Style Overview
An extreme form of minimalism that strips away all non-essential elements. Focuses on pure form, monochrome color, and maximum whitespace. Every element must serve a clear purpose.

## Key Characteristics
- Strict monochrome color palette (black, white, grays only)
- Zero shadows or depth effects
- Ultra-thin borders (0.5px) or hairline separators
- Maximum whitespace and breathing room
- Minimal typography with generous line spacing
- No decorative elements whatsoever
- Clean, geometric layouts

## Color Palette
- Background: Pure white (#FFFFFF)
- Text: Very dark gray (#262626) - not pure black for softer feel
- Borders: Light gray (#E8E8E8) with 0.5px weight
- Accents: None - pure monochrome
- Muted elements: Medium gray (#737373)

## Typography
- Font family: Clean sans-serif (Inter, Helvetica, Arial)
- Font weights: Regular (400) for body, Medium (500) for headings
- Line height: Very generous (1.75-2.5 for body text)
- Letter spacing: Normal to slightly loose
- Font sizes: Modest, readable hierarchy

## Component Styling Examples

### Buttons
- Background: Transparent or white
- Border: 0.5px solid light gray
- Padding: Generous (16px 32px)
- Hover: Subtle border darkening only
- No shadows, no fills, no effects

### Cards
- Background: White
- Border: 0.5px solid light gray
- NO shadows
- Generous padding: 32-48px
- Minimal border radius: 2-4px

### Inputs
- Background: White
- Border: 0.5px solid light gray
- Focus: Border darkens slightly
- NO focus rings or shadows
- Clean, minimal appearance

### Spacing
- Use 8px or 12px base grid
- Generous margins: 64px+ between sections
- Comfortable padding: 24-48px within containers
- Let whitespace be the primary design element

## Implementation Guidelines
- Remove ALL shadows (box-shadow: none)
- Use hairline borders (0.5px or 1px max)
- Limit color palette to grayscale only
- Maximize whitespace - don't be afraid of empty space
- Keep typography simple and readable
- No gradients, no effects, no decorations
- Focus on content hierarchy through size and spacing
- Ensure excellent readability with proper contrast`,
    theme: {
      name: "pure-minimalism",
      colors: {
        primary: "oklch(0.15 0 0)",
        primaryForeground: "oklch(0.99 0 0)",
        surface: "oklch(1 0 0)",
        surfaceAlt: "oklch(0.98 0 0)",
        foreground: "oklch(0.15 0 0)",
        muted: "oklch(0.96 0 0)",
        mutedForeground: "oklch(0.55 0 0)",
        accent: "oklch(0.94 0 0)",
        accentForeground: "oklch(0.15 0 0)",
        border: "oklch(0.92 0 0)",
        input: "oklch(0.92 0 0)",
        ring: "oklch(0.75 0 0)",
        destructive: "oklch(0.50 0.15 20)",
        destructiveForeground: "oklch(0.99 0 0)",
        card: "oklch(1 0 0)",
        cardForeground: "oklch(0.15 0 0)",
        popover: "oklch(1 0 0)",
        popoverForeground: "oklch(0.15 0 0)",
        secondary: "oklch(0.96 0 0)",
        secondaryForeground: "oklch(0.15 0 0)",
      },
      radius: "sm",
      spacingScale: [12, 24, 36, 48, 72, 96, 144, 192, 288, 384],
      typeScale: {
        base: 16,
        h1: 38,
        h2: 28,
        h3: 22,
        h4: 18,
        h5: 16,
        h6: 14,
        leading: { tight: 1.4, normal: 1.75, relaxed: 2, loose: 2.5 },
      },
      border: { weight: 0.5, style: "solid", contrast: 0.6 },
      shadow: { strength: 0, blur: 0, yOffset: 0, xOffset: 0, inner: false },
      effects: { glassAlpha: 0, glassBlur: 0, grain: 0, saturation: 0.7, contrast: 0.9, glow: 0 },
      layout: { cardDensity: "spacious", gridStyle: "standard", gapScale: 2 },
    },
  },
  {
    id: "bold-minimalism",
    name: "Bold Minimalism",
    description: "Minimal with oversized typography and high contrast",
    prompt: `Transform my website to use Bold Minimalism design style.

## Style Overview
A minimalist approach that uses oversized typography and high contrast to create impact. Combines the simplicity of minimalism with bold, statement-making typography.

## Key Characteristics
- Extremely large, oversized headings (72px+ for H1)
- High contrast between text and background
- Single accent color used sparingly
- Generous whitespace around typography
- Minimal decorative elements
- Strong visual hierarchy through size
- Clean, geometric layouts

## Color Palette
- Background: Pure white or off-white (#FAFAFA)
- Text: Very dark, near-black (#0A0A0A)
- Single accent: One vibrant color (orange, blue, or brand color)
- Muted: Light gray for secondary text
- High contrast ratios (WCAG AAA where possible)

## Typography
- Font family: Bold sans-serif (Inter Bold, Helvetica Bold)
- Font weights: Bold (700) for headings, Regular (400) for body
- H1 size: 72-96px (oversized)
- H2 size: 48-56px
- H3 size: 32-40px
- Line height: Tight for headings (1.1-1.2), normal for body (1.4-1.6)
- Letter spacing: Slightly tight for headings

## Component Styling Examples

### Buttons
- Background: Single accent color or dark
- Text: White or high contrast
- Padding: Generous (16px 32px)
- Border radius: Minimal (4-6px)
- Typography: Bold, uppercase optional
- Hover: Slight darkening

### Cards
- Background: White
- Border: 1px solid light gray (optional)
- Minimal shadow: 0 1px 3px rgba(0,0,0,0.05)
- Generous padding: 32-48px
- Focus on content, not decoration

### Headings
- H1: 72-96px, bold, high contrast
- Use single accent color for emphasis
- Generous spacing above and below
- Let typography be the hero

### Spacing
- Large gaps between sections (96px+)
- Generous padding around typography
- Use whitespace to emphasize content
- Don't crowd the oversized text

## Implementation Guidelines
- Make typography the primary design element
- Use size hierarchy to create visual interest
- Limit color palette to 2-3 colors max
- Ensure excellent readability with high contrast
- Keep decorative elements minimal
- Let whitespace frame the bold typography
- Use single accent color strategically for emphasis`,
    theme: {
      name: "bold-minimalism",
      colors: {
        primary: "oklch(0.12 0 0)",
        primaryForeground: "oklch(0.99 0 0)",
        surface: "oklch(0.99 0 0)",
        surfaceAlt: "oklch(0.96 0 0)",
        foreground: "oklch(0.10 0 0)",
        muted: "oklch(0.94 0 0)",
        mutedForeground: "oklch(0.48 0 0)",
        accent: "oklch(0.70 0.28 28)",
        accentForeground: "oklch(0.99 0 0)",
        border: "oklch(0.90 0 0)",
        input: "oklch(0.90 0 0)",
        ring: "oklch(0.70 0.28 28)",
        destructive: "oklch(0.58 0.25 25)",
        destructiveForeground: "oklch(0.99 0 0)",
        card: "oklch(0.99 0 0)",
        cardForeground: "oklch(0.10 0 0)",
        popover: "oklch(0.99 0 0)",
        popoverForeground: "oklch(0.10 0 0)",
        secondary: "oklch(0.94 0 0)",
        secondaryForeground: "oklch(0.12 0 0)",
      },
      radius: "sm",
      spacingScale: [8, 16, 24, 32, 48, 64, 96, 128, 192, 256],
      typeScale: {
        base: 18,
        h1: 72,
        h2: 52,
        h3: 38,
        h4: 28,
        h5: 22,
        h6: 18,
        leading: { tight: 1, normal: 1.4, relaxed: 1.6, loose: 1.8 },
      },
      border: { weight: 1, style: "solid", contrast: 1 },
      shadow: { strength: 0.03, blur: 8, yOffset: 1, xOffset: 0, inner: false },
      effects: { glassAlpha: 0, glassBlur: 0, grain: 0, saturation: 1, contrast: 1.15, glow: 0 },
      layout: { cardDensity: "spacious", gridStyle: "standard", gapScale: 1.8 },
    },
  },
  {
    id: "glassmorphism",
    name: "Glassmorphism",
    description: "Frosted glass with translucent surfaces and soft glow",
    prompt: `Transform my website to use Glassmorphism design style.

## Style Overview
A modern design trend featuring frosted-glass effect with transparency, blur, and depth. Creates a sense of hierarchy through layering. Elements appear as translucent glass panels floating above colorful backgrounds.

## Key Characteristics
- Semi-transparent backgrounds with backdrop blur (backdrop-filter: blur())
- Light borders with low opacity (white/light with 20-30% opacity)
- Soft, colorful shadows with subtle glow
- Large border radius (16-24px) for smooth, modern feel
- Layered depth with z-index hierarchy
- Vibrant, colorful backgrounds behind glass elements
- High contrast text for readability

## Color Palette
- Background: Vibrant gradient or colorful solid (purple, blue, pink gradients)
- Glass surfaces: Semi-transparent white/light (rgba(255, 255, 255, 0.1-0.25))
- Borders: White with 20-30% opacity (rgba(255, 255, 255, 0.2-0.3))
- Shadows: Colored shadows matching accent colors with low opacity
- Accents: Vibrant purples, blues, pinks, cyans
- Text: Dark, high contrast for readability on glass

## Effects & Properties
- backdrop-filter: blur(20px) saturate(180%)
- background: rgba(255, 255, 255, 0.1-0.25) - very low opacity
- border: 1px solid rgba(255, 255, 255, 0.2-0.3)
- box-shadow: 0 8px 32px rgba(accent-color, 0.15-0.25)
- Border radius: 16-24px (large, rounded)

## Component Styling Examples

### Cards (Glass Effect)
- Background: rgba(255, 255, 255, 0.15) - very transparent
- Backdrop filter: blur(20px) saturate(180%)
- Border: 1px solid rgba(255, 255, 255, 0.25)
- Shadow: 0 8px 32px rgba(accent-color, 0.2)
- Border radius: 20px
- Background behind must be colorful/vibrant

### Buttons
- Semi-transparent background: rgba(255, 255, 255, 0.2)
- Backdrop blur: blur(10px)
- Border: 1px solid rgba(255, 255, 255, 0.3)
- Hover: Slightly more opaque, increased blur
- Smooth transitions (300ms)

### Navigation
- Sticky position with glass effect
- Background: rgba(255, 255, 255, 0.1)
- Backdrop blur: blur(20px)
- Border bottom: 1px solid rgba(255, 255, 255, 0.2)
- Blur increases on scroll

### Background Requirements
- MUST have colorful/vibrant background behind glass elements
- Use gradients: purple to blue, pink to cyan, etc.
- Glass effect is only visible against colorful backgrounds
- Without colorful background, glassmorphism doesn't work

## Implementation Guidelines
- Use backdrop-filter: blur(20px) saturate(180%) for frosted effect
- Background opacity: 0.1-0.25 (very low, not 0.6-0.7)
- Layer elements with proper z-index
- Ensure colorful background behind glass elements
- Add subtle colored shadows matching accent colors
- Use CSS will-change: transform for performance
- Test on different backgrounds
- Provide fallback solid background for unsupported browsers
- Keep blur radius 16-24px for optimal effect
- Text must have high contrast (dark on light glass)`,
    theme: {
      name: "glassmorphism",
      colors: {
        primary: "oklch(0.50 0.02 0)",
        primaryForeground: "oklch(0.99 0 0)",
        surface: "oklch(0.98 0 0)",
        surfaceAlt: "oklch(0.95 0.01 0)",
        foreground: "oklch(0.15 0 0)",
        muted: "oklch(1 0 0 / 0.15)",
        mutedForeground: "oklch(0.15 0 0)",
        accent: "oklch(0.55 0.02 0)",
        accentForeground: "oklch(0.99 0 0)",
        border: "oklch(1 0 0 / 0.25)",
        input: "oklch(1 0 0 / 0.2)",
        ring: "oklch(0.50 0.02 0)",
        destructive: "oklch(0.65 0.24 25)",
        destructiveForeground: "oklch(0.99 0 0)",
        card: "oklch(1 0 0 / 0.15)",
        cardForeground: "oklch(0.15 0 0)",
        popover: "oklch(1 0 0 / 0.15)",
        popoverForeground: "oklch(0.15 0 0)",
        secondary: "oklch(1 0 0 / 0.2)",
        secondaryForeground: "oklch(0.15 0 0)",
      },
      radius: "xl",
      spacingScale: [6, 12, 18, 24, 36, 48, 72, 96, 144, 192],
      typeScale: {
        base: 16,
        h1: 48,
        h2: 36,
        h3: 28,
        h4: 22,
        h5: 18,
        h6: 16,
        leading: { tight: 1.25, normal: 1.5, relaxed: 1.75, loose: 2 },
      },
      border: { weight: 1, style: "solid", contrast: 0.3 },
      shadow: {
        strength: 0.1,
        blur: 32,
        yOffset: 8,
        xOffset: 0,
        inner: true,
        color: "oklch(0 0 0 / 0.1)",
      },
      effects: { glassAlpha: 0.15, glassBlur: 19, grain: 0, saturation: 1.2, contrast: 1.1, glow: 0 },
      layout: { cardDensity: "normal", gridStyle: "standard", gapScale: 1.3 },
    },
  },
  {
    id: "modern-flat",
    name: "Modern Flat",
    description: "Clean flat design with crisp edges and no gradients",
    prompt: `Transform my website to use Modern Flat design principles.

## Style Overview
A clean, contemporary flat design style that emphasizes solid colors, crisp edges, and clear hierarchy. No gradients, no shadows, just pure flat design with excellent usability.

## Key Characteristics
- Flat, solid colors only - no gradients
- Crisp, clean edges with medium border radius
- Minimal shadows (very subtle if any)
- Clear visual hierarchy through color and size
- Modern, approachable aesthetic
- Excellent readability and usability
- Clean typography

## Color Palette
- Backgrounds: Clean whites and light grays
- Primary: Vibrant, saturated brand color
- Secondary: Complementary accent colors
- Text: Dark gray for readability
- Borders: Light gray for subtle separation
- High contrast for accessibility

## Typography
- Font family: Modern sans-serif (Inter, SF Pro, Roboto)
- Font weights: Regular (400) for body, Semibold (600) for headings
- Line height: Comfortable (1.5-1.6)
- Letter spacing: Normal
- Clear hierarchy through size

## Component Styling Examples

### Buttons
- Background: Solid primary color
- Text: White or high contrast
- Border radius: 6-8px (medium)
- Padding: 12px 24px
- NO gradients, NO shadows
- Hover: Slightly darker shade

### Cards
- Background: White or light gray
- Border: 1px solid light gray (optional)
- Minimal shadow: 0 1px 2px rgba(0,0,0,0.05) or none
- Border radius: 8px
- Padding: 24px

### Inputs
- Background: White
- Border: 1px solid light gray
- Border radius: 6px
- Focus: Border color changes to primary
- Clean, flat appearance

### Icons & Graphics
- Flat icon style
- Solid colors only
- No gradients or 3D effects
- Simple, recognizable shapes

## Implementation Guidelines
- Use solid colors exclusively - no gradients
- Keep shadows minimal or remove entirely
- Use color and size for hierarchy, not depth
- Ensure excellent contrast for readability
- Maintain consistent border radius (6-8px)
- Keep design clean and uncluttered
- Focus on usability and clarity`,
    theme: {
      name: "modern-flat",
      colors: {
        primary: "oklch(0.55 0.22 262)",
        primaryForeground: "oklch(0.99 0 0)",
        surface: "oklch(0.98 0 0)",
        surfaceAlt: "oklch(0.94 0 0)",
        foreground: "oklch(0.22 0 0)",
        muted: "oklch(0.92 0 0)",
        mutedForeground: "oklch(0.52 0 0)",
        accent: "oklch(0.65 0.20 180)",
        accentForeground: "oklch(0.99 0 0)",
        border: "oklch(0.86 0 0)",
        input: "oklch(0.86 0 0)",
        ring: "oklch(0.55 0.22 262)",
        destructive: "oklch(0.58 0.24 25)",
        destructiveForeground: "oklch(0.99 0 0)",
        card: "oklch(0.99 0 0)",
        cardForeground: "oklch(0.22 0 0)",
        popover: "oklch(0.99 0 0)",
        popoverForeground: "oklch(0.22 0 0)",
        secondary: "oklch(0.75 0.12 85)",
        secondaryForeground: "oklch(0.22 0 0)",
      },
      radius: "md",
      spacingScale: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128],
      typeScale: {
        base: 16,
        h1: 44,
        h2: 34,
        h3: 26,
        h4: 22,
        h5: 18,
        h6: 16,
        leading: { tight: 1.25, normal: 1.5, relaxed: 1.7, loose: 1.9 },
      },
      border: { weight: 1, style: "solid", contrast: 1 },
      shadow: { strength: 0.02, blur: 4, yOffset: 1, xOffset: 0, inner: false },
      effects: { glassAlpha: 0, glassBlur: 0, grain: 0, saturation: 1.1, contrast: 1, glow: 0 },
      layout: { cardDensity: "normal", gridStyle: "standard", gapScale: 1 },
    },
  },
  {
    id: "claymorphism",
    name: "Claymorphism",
    description: "Soft 3D clay-like elements with inner and outer shadows",
    prompt: `Transform my website to use Claymorphism design style.

## Style Overview
A soft, tactile design style that mimics clay or soft putty. Elements appear to be made of soft material with gentle depth created through inner and outer shadows. Creates a warm, approachable, and modern aesthetic.

## Key Characteristics
- Soft, rounded corners (large border radius)
- Dual shadows: inner highlight and outer shadow
- Pastel, muted color palette
- Soft, tactile appearance
- Gentle depth without harsh edges
- Warm, friendly aesthetic
- Subtle texture or grain

## Color Palette
- Backgrounds: Soft pastels (light beige, cream, soft pink, lavender)
- Surfaces: Slightly lighter pastels
- Text: Dark but softened (not pure black)
- Accents: Muted, desaturated colors
- Borders: Very subtle or none
- Low saturation overall

## Shadow System
- Outer shadow: Soft, diffused (0 8px 20px rgba(0,0,0,0.12))
- Inner highlight: Lighter top-left (inset 0 2px 4px rgba(255,255,255,0.5))
- Creates soft raised effect
- No harsh edges or sharp shadows

## Component Styling Examples

### Cards (Clay Effect)
- Background: Soft pastel color
- Border radius: 20-24px (very rounded)
- Dual shadows: Outer shadow + inner highlight
- NO borders
- Padding: 24-32px
- Appears soft and raised

### Buttons
- Background: Soft pastel
- Border radius: 16-20px
- Dual shadow system
- Hover: Slight shadow increase
- Text: Dark but readable
- Soft, pressable appearance

### Inputs
- Background: Soft pastel
- Border: None or very subtle
- Border radius: 12-16px
- Dual shadows for depth
- Focus: Slight shadow increase

### Surfaces
- Multiple layers with soft shadows
- Each layer slightly elevated
- Creates gentle depth hierarchy
- Warm, inviting appearance

## Typography
- Font family: Friendly sans-serif (Inter, Poppins)
- Font weights: Regular to Medium
- Line height: Comfortable (1.6-1.8)
- Soft, approachable feel

## Effects
- Subtle grain texture (optional, 0.01-0.02 opacity)
- Soft shadows only
- No harsh lines or edges
- Gentle transitions

## Implementation Guidelines
- Use large border radius (20px+)
- Implement dual shadow system (inner + outer)
- Keep colors muted and pastel
- Remove or minimize borders
- Add subtle grain for texture
- Ensure good contrast for readability
- Create soft, tactile feel throughout
- Use gentle animations (300ms ease)`,
    theme: {
      name: "claymorphism",
      colors: {
        primary: "oklch(0.65 0.12 262)",
        primaryForeground: "oklch(0.99 0 0)",
        surface: "oklch(0.94 0.04 85)",
        surfaceAlt: "oklch(0.90 0.05 85)",
        foreground: "oklch(0.30 0.02 85)",
        muted: "oklch(0.88 0.04 85)",
        mutedForeground: "oklch(0.50 0.02 85)",
        accent: "oklch(0.70 0.15 320)",
        accentForeground: "oklch(0.99 0 0)",
        border: "oklch(0.82 0.04 85)",
        input: "oklch(0.82 0.04 85)",
        ring: "oklch(0.65 0.12 262)",
        destructive: "oklch(0.65 0.18 25)",
        destructiveForeground: "oklch(0.99 0 0)",
        card: "oklch(0.92 0.04 85)",
        cardForeground: "oklch(0.30 0.02 85)",
        popover: "oklch(0.92 0.04 85)",
        popoverForeground: "oklch(0.30 0.02 85)",
        secondary: "oklch(0.78 0.10 180)",
        secondaryForeground: "oklch(0.30 0.02 85)",
      },
      radius: "xl",
      spacingScale: [6, 12, 18, 24, 36, 48, 72, 96, 144, 192],
      typeScale: {
        base: 16,
        h1: 46,
        h2: 36,
        h3: 28,
        h4: 22,
        h5: 18,
        h6: 16,
        leading: { tight: 1.3, normal: 1.6, relaxed: 1.8, loose: 2 },
      },
      border: { weight: 0, style: "solid", contrast: 0.8 },
      shadow: { strength: 0.12, blur: 20, yOffset: 8, xOffset: 0, inner: true },
      effects: { glassAlpha: 0, glassBlur: 0, grain: 0.02, saturation: 0.95, contrast: 0.95, glow: 0 },
      layout: { cardDensity: "normal", gridStyle: "standard", gapScale: 1.2 },
    },
  },
  {
    id: "bento-grid",
    name: "Bento Grid",
    description: "Modular card layout inspired by Japanese bento boxes",
    prompt: `Transform my website to use Bento Grid design layout.

## Style Overview
A modular grid layout inspired by Japanese bento boxes. Features varied card sizes arranged in an asymmetric grid, with generous spacing and rounded corners. Creates visual interest through size variation while maintaining organization.

## Key Characteristics
- Asymmetric grid with varied card sizes
- Generous gaps between cards (24-32px)
- Rounded corners on all cards
- Modular, tile-like appearance
- Clean, organized layout
- Visual hierarchy through size variation
- Modern, playful aesthetic

## Grid System
- Base grid: 12-column or flexible grid
- Cards span multiple columns/rows
- Varied sizes: 1x1, 2x1, 1x2, 2x2, 3x1, etc.
- Generous gaps: 24-32px between cards
- Responsive: Adapts to screen size

## Color Palette
- Background: Light neutral (off-white, light gray)
- Cards: White or light colored backgrounds
- Accents: Subtle, varied colors per card
- Text: Dark for readability
- Borders: Light gray or none

## Component Styling Examples

### Cards (Bento Tiles)
- Background: White or light color
- Border radius: 12-16px (rounded)
- Border: 1px solid light gray (optional)
- Shadow: Subtle (0 2px 8px rgba(0,0,0,0.08))
- Padding: 24-32px
- Varied sizes based on content

### Grid Layout
- Display: CSS Grid or Flexbox
- Gap: 24-32px between items
- Responsive breakpoints
- Cards span multiple grid cells
- Asymmetric but balanced

### Typography
- Font family: Clean sans-serif
- Headings: Bold, clear hierarchy
- Body: Readable, comfortable line height
- Size varies with card importance

## Spacing
- Generous gaps: 24-32px minimum
- Card padding: 24-32px
- Section spacing: 48-64px
- Let cards breathe

## Implementation Guidelines
- Use CSS Grid for layout
- Create varied card sizes for interest
- Maintain generous spacing
- Keep rounded corners consistent
- Use subtle shadows for depth
- Ensure responsive behavior
- Balance asymmetric layout
- Group related content in cards
- Use size to indicate importance`,
    theme: {
      name: "bento-grid",
      colors: {
        primary: "oklch(0.45 0.18 262)",
        primaryForeground: "oklch(0.99 0 0)",
        surface: "oklch(0.97 0 0)",
        surfaceAlt: "oklch(0.93 0 0)",
        foreground: "oklch(0.25 0 0)",
        muted: "oklch(0.91 0 0)",
        mutedForeground: "oklch(0.52 0 0)",
        accent: "oklch(0.60 0.20 85)",
        accentForeground: "oklch(0.99 0 0)",
        border: "oklch(0.88 0 0)",
        input: "oklch(0.88 0 0)",
        ring: "oklch(0.45 0.18 262)",
        destructive: "oklch(0.58 0.24 25)",
        destructiveForeground: "oklch(0.99 0 0)",
        card: "oklch(0.99 0 0)",
        cardForeground: "oklch(0.25 0 0)",
        popover: "oklch(0.99 0 0)",
        popoverForeground: "oklch(0.25 0 0)",
        secondary: "oklch(0.85 0.08 180)",
        secondaryForeground: "oklch(0.25 0 0)",
      },
      radius: "lg",
      spacingScale: [6, 12, 18, 24, 36, 48, 72, 96, 144, 192],
      typeScale: {
        base: 16,
        h1: 48,
        h2: 36,
        h3: 28,
        h4: 22,
        h5: 18,
        h6: 16,
        leading: { tight: 1.2, normal: 1.5, relaxed: 1.7, loose: 1.9 },
      },
      border: { weight: 1, style: "solid", contrast: 0.9 },
      shadow: { strength: 0.08, blur: 16, yOffset: 4, xOffset: 0, inner: false },
      effects: { glassAlpha: 0, glassBlur: 0, grain: 0, saturation: 1, contrast: 1, glow: 0 },
      layout: { cardDensity: "normal", gridStyle: "bento", gapScale: 1.8 },
    },
  },
  {
    id: "material-you",
    name: "Material You",
    description: "Dynamic tonal palettes with layered elevation",
    prompt: `Transform my website to use Material You (Material Design 3) principles.

## Style Overview
Google's latest design system featuring dynamic color, tonal surfaces, and expressive personal design. Emphasis on adaptability and user personalization.

## Key Characteristics
- Tonal color surfaces derived from a source color
- Elevated surfaces through tinted overlays, not just shadows
- Large, expressive shapes with varied corner radii
- Emphasis on motion and state changes
- Content-first hierarchy
- Adaptive design system

## Color System
- Surface containers: Multiple tonal levels (surface, surface-1, surface-2, etc.)
- Primary, secondary, tertiary color roles
- Each color has container and on-container variants
- Neutral tones for surfaces
- Dynamic color extraction from wallpaper/brand

## Color Palette
- Surface: Light tinted background (not pure white)
- Surface variants: Progressively tinted layers
- Primary: Bold, saturated brand color
- Secondary: Complementary accent
- Tertiary: Additional accent for variety
- On-surface: Text with proper contrast

## Elevation System
- Level 0: Base surface
- Level 1: +5 opacity tint
- Level 2: +8 opacity tint
- Level 3: +11 opacity tint
- Level 4: +12 opacity tint
- Level 5: +14 opacity tint
- Shadow + tint overlay for depth

## Component Styling Examples

### Buttons (Filled)
- Background: Primary color
- Border radius: 20px (pill-like)
- Padding: 10px 24px
- State layers for hover/press
- Elevation: Level 0, Level 1 on hover

### Cards (Elevated)
- Background: Surface container
- Border radius: 12px
- Elevation: Level 1 (subtle shadow + tint)
- Padding: 16-24px

### Floating Action Button (FAB)
- Large border radius: 16px or circular
- Primary container color
- Elevation: Level 3
- Icon centered

### Navigation
- Surface container color
- Active state: Secondary container
- Ripple effects on interaction

## Typography
- Roboto or system font
- Display, Headline, Title, Body, Label scales
- Variable font weights (400-700)
- Comfortable line heights (1.5)

## Motion & States
- Emphasized easing curves
- 200-300ms transitions
- State layers: 8% hover, 12% press
- Ripple effects on interactive elements

## Implementation Guidelines
- Generate tonal palette from brand color
- Use surface tinting for elevation
- Apply large, expressive corner radii
- Implement state layers for all interactive elements
- Use proper color roles (primary, secondary, tertiary)
- Add motion with emphasized easing
- Maintain 4.5:1 contrast minimum
- Support light and dark themes`,
    theme: {
      name: "material-you",
      colors: {
        primary: "oklch(0.50 0.20 262)",
        primaryForeground: "oklch(0.99 0 0)",
        surface: "oklch(0.98 0.01 262)",
        surfaceAlt: "oklch(0.94 0.02 262)",
        foreground: "oklch(0.22 0.02 262)",
        muted: "oklch(0.90 0.02 262)",
        mutedForeground: "oklch(0.50 0.02 262)",
        accent: "oklch(0.65 0.18 320)",
        accentForeground: "oklch(0.99 0 0)",
        border: "oklch(0.88 0.02 262)",
        input: "oklch(0.88 0.02 262)",
        ring: "oklch(0.50 0.20 262)",
        destructive: "oklch(0.60 0.24 25)",
        destructiveForeground: "oklch(0.99 0 0)",
        card: "oklch(0.96 0.01 262)",
        cardForeground: "oklch(0.22 0.02 262)",
        popover: "oklch(0.96 0.01 262)",
        popoverForeground: "oklch(0.22 0.02 262)",
        secondary: "oklch(0.75 0.12 180)",
        secondaryForeground: "oklch(0.22 0.02 262)",
      },
      radius: "lg",
      spacingScale: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128],
      typeScale: {
        base: 16,
        h1: 45,
        h2: 36,
        h3: 28,
        h4: 22,
        h5: 18,
        h6: 16,
        leading: { tight: 1.25, normal: 1.5, relaxed: 1.75, loose: 2 },
      },
      border: { weight: 1, style: "solid", contrast: 0.9 },
      shadow: { strength: 0.12, blur: 16, yOffset: 4, xOffset: 0, inner: false },
      effects: { glassAlpha: 0, glassBlur: 0, grain: 0, saturation: 1.05, contrast: 1, glow: 0 },
      layout: { cardDensity: "normal", gridStyle: "standard", gapScale: 1.1 },
    },
  },
  {
    id: "aurora-mesh",
    name: "Aurora Mesh",
    description: "Soft gradient mesh backgrounds with subtle glow",
    prompt: `Transform my website to use Aurora Mesh design style.

## Style Overview
A modern design style featuring soft, flowing gradient mesh backgrounds that create an aurora-like effect. Combines subtle gradients, soft glows, and gentle color transitions for a dreamy, modern aesthetic.

## Key Characteristics
- Soft gradient mesh backgrounds
- Subtle glow effects on elements
- Flowing color transitions
- Low contrast for soft appearance
- Modern, dreamy aesthetic
- Layered depth through gradients
- Smooth, organic feel

## Gradient Mesh System
- Background: Multiple overlapping gradients
- Colors: Soft purples, blues, pinks, cyans
- Blending: Soft, organic transitions
- Opacity: Layered for depth
- Animation: Subtle, slow movement (optional)

## Color Palette
- Background: Gradient mesh (purple → blue → pink → cyan)
- Surfaces: Semi-transparent overlays
- Text: Dark but softened for readability
- Accents: Colors from gradient palette
- Borders: Subtle, semi-transparent

## Glow Effects
- Subtle outer glow on cards
- Soft shadow with color tint
- Glow intensity: 8-12px blur
- Color matches gradient palette
- Creates depth and atmosphere

## Component Styling Examples

### Cards
- Background: Semi-transparent white/light (60-70% opacity)
- Backdrop: Gradient mesh visible through
- Border: Subtle, semi-transparent
- Shadow: Soft colored glow (0 8px 24px rgba(color, 0.15))
- Border radius: 12-16px

### Buttons
- Background: Semi-transparent or solid from gradient
- Glow: Subtle outer glow
- Hover: Increased glow intensity
- Smooth transitions (300ms)

### Backgrounds
- Gradient mesh: Multiple overlapping gradients
- Colors: Purple, blue, pink, cyan
- Blending mode: Soft light or screen
- Subtle animation (optional, slow)

### Typography
- Font family: Modern sans-serif
- Text: Dark with good contrast
- Optional: Gradient text for headings
- Clear hierarchy

## Effects
- Glass effect: Semi-transparent surfaces
- Glow: Soft outer glow (8-12px)
- Blur: Subtle backdrop blur (optional)
- Saturation: Slightly increased (1.1x)

## Implementation Guidelines
- Create gradient mesh with CSS gradients
- Use semi-transparent overlays for content
- Add subtle glow effects with box-shadow
- Ensure text contrast for readability
- Use soft, organic color transitions
- Keep glow effects subtle
- Consider subtle background animation
- Test on different screen sizes
- Optimize for performance`,
    theme: {
      name: "aurora-mesh",
      colors: {
        primary: "oklch(0.55 0.18 262)",
        primaryForeground: "oklch(0.99 0 0)",
        surface: "oklch(0.96 0.03 280)",
        surfaceAlt: "oklch(0.92 0.04 280)",
        foreground: "oklch(0.25 0.02 280)",
        muted: "oklch(0.88 0.04 280)",
        mutedForeground: "oklch(0.52 0.02 280)",
        accent: "oklch(0.65 0.20 320)",
        accentForeground: "oklch(0.99 0 0)",
        border: "oklch(0.84 0.04 280 / 0.4)",
        input: "oklch(0.84 0.04 280 / 0.4)",
        ring: "oklch(0.55 0.18 262)",
        destructive: "oklch(0.60 0.22 25)",
        destructiveForeground: "oklch(0.99 0 0)",
        card: "oklch(0.94 0.03 280 / 0.6)",
        cardForeground: "oklch(0.25 0.02 280)",
        popover: "oklch(0.94 0.03 280 / 0.6)",
        popoverForeground: "oklch(0.25 0.02 280)",
        secondary: "oklch(0.75 0.15 180)",
        secondaryForeground: "oklch(0.25 0.02 280)",
      },
      radius: "lg",
      spacingScale: [6, 12, 18, 24, 36, 48, 72, 96, 144, 192],
      typeScale: {
        base: 16,
        h1: 48,
        h2: 36,
        h3: 28,
        h4: 22,
        h5: 18,
        h6: 16,
        leading: { tight: 1.3, normal: 1.6, relaxed: 1.8, loose: 2 },
      },
      border: { weight: 1, style: "solid", contrast: 0.5 },
      shadow: { strength: 0.08, blur: 24, yOffset: 4, xOffset: 0, inner: false },
      effects: { glassAlpha: 0.4, glassBlur: 8, grain: 0, saturation: 1.1, contrast: 0.95, glow: 12 },
      layout: { cardDensity: "normal", gridStyle: "standard", gapScale: 1.3 },
    },
  },
  {
    id: "neon-noir",
    name: "Neon Noir",
    description: "Dark cyberpunk aesthetic with neon accents and outer glow",
    prompt: `Transform my website to use Neon Noir (Cyberpunk) design aesthetic.

## Style Overview
A futuristic, high-tech dark theme inspired by cyberpunk culture. Features neon colors, glowing effects, and a dystopian digital atmosphere.

## Key Characteristics
- Deep dark backgrounds (near black)
- Vibrant neon accent colors (cyan, magenta, purple, green)
- Outer glow effects on interactive elements
- High contrast between text and background
- Sharp, angular or minimal rounded corners
- Grid patterns and tech-inspired details
- Scanline or grain texture effects

## Color Palette
- Background: Very dark (#0A0A0F, #0F0F14)
- Surface: Slightly lighter dark (#14141A)
- Primary neon: Bright cyan (#00FFFF, #22D3EE)
- Secondary neon: Hot magenta/pink (#FF00FF, #F472B6)
- Tertiary neon: Electric purple (#9333EA, #A855F7)
- Accent: Neon green (#00FF00, #22C55E)
- Text: Off-white or light cyan for contrast

## Glow Effects
- Primary glow: 0 0 20px rgba(34, 211, 238, 0.5)
- Hover glow: 0 0 30px rgba(34, 211, 238, 0.7)
- Active glow: 0 0 40px rgba(34, 211, 238, 0.9)
- Layered shadows for depth

## Component Styling Examples

### Buttons
- Background: Dark with neon border
- Border: 2px solid neon color
- Box shadow: 0 0 15px neon-color
- Text: Matching neon color
- Hover: Increased glow intensity
- Active: Fill with neon color, invert text

### Cards
- Background: Dark elevated surface
- Border: 1px solid neon color (30% opacity)
- Shadow: 0 4px 20px rgba(neon, 0.3)
- Subtle glow on hover
- Optional: Grid pattern background

### Inputs
- Background: Darker than surface
- Border: 1px solid neon color (50% opacity)
- Focus: Full opacity border + glow
- Placeholder: Muted neon color

### Navigation
- Dark background
- Active link: Neon underline with glow
- Hover: Subtle glow effect
- Optional: Scanline animation

## Typography
- Font family: Monospace or tech-inspired sans-serif
- Headings: Bold or tech-inspired font
- Body: Clear, readable monospace
- Letter spacing: Slightly wider for tech feel
- Optional: Glitch effect on hover for headings

## Effects & Animations
- Glow effects on hover/focus
- Subtle scanline overlay (opacity: 0.02)
- Film grain texture (optional)
- Pulsing glow animations
- Neon flicker effect (subtle)
- Matrix-style text transitions

## Implementation Guidelines
- Use dark mode by default
- Apply box-shadow for glow effects
- Layer multiple shadows for intense glow
- Use saturated, vibrant neon colors
- Ensure text contrast meets WCAG AA (4.5:1)
- Add subtle animations (300-500ms)
- Consider adding CRT/scanline effect
- Use backdrop-filter for depth
- Test glow effects on different displays
- Optimize for performance (use will-change)`,
    theme: {
      name: "neon-noir",
      colors: {
        primary: "oklch(0.70 0.30 320)",
        primaryForeground: "oklch(0.10 0 0)",
        surface: "oklch(0.12 0.01 280)",
        surfaceAlt: "oklch(0.16 0.02 280)",
        foreground: "oklch(0.95 0 0)",
        muted: "oklch(0.20 0.02 280)",
        mutedForeground: "oklch(0.65 0 0)",
        accent: "oklch(0.75 0.32 180)",
        accentForeground: "oklch(0.10 0 0)",
        border: "oklch(0.25 0.04 280)",
        input: "oklch(0.25 0.04 280)",
        ring: "oklch(0.70 0.30 320)",
        destructive: "oklch(0.65 0.28 25)",
        destructiveForeground: "oklch(0.10 0 0)",
        card: "oklch(0.14 0.01 280)",
        cardForeground: "oklch(0.95 0 0)",
        popover: "oklch(0.14 0.01 280)",
        popoverForeground: "oklch(0.95 0 0)",
        secondary: "oklch(0.65 0.25 262)",
        secondaryForeground: "oklch(0.10 0 0)",
      },
      radius: "sm",
      spacingScale: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128],
      typeScale: {
        base: 16,
        h1: 52,
        h2: 38,
        h3: 28,
        h4: 22,
        h5: 18,
        h6: 16,
        leading: { tight: 1.1, normal: 1.4, relaxed: 1.6, loose: 1.8 },
      },
      border: { weight: 1, style: "solid", contrast: 1.2 },
      shadow: {
        strength: 0.3,
        blur: 20,
        yOffset: 0,
        xOffset: 0,
        inner: false,
        color: "oklch(0.70 0.30 320 / 0.5)",
      },
      effects: { glassAlpha: 0, glassBlur: 0, grain: 0.03, saturation: 1.3, contrast: 1.15, glow: 16 },
      layout: { cardDensity: "compact", gridStyle: "standard", gapScale: 1 },
    },
  },
  {
    id: "nord-minimal",
    name: "Nord Minimal",
    description: "Cool desaturated palette inspired by arctic landscapes",
    prompt: `Transform my website to use Nord Minimal design style.

## Style Overview
A minimal design style inspired by the Nord color palette - cool, desaturated colors reminiscent of arctic landscapes. Features calm, spacious layouts with a soothing, professional aesthetic.

## Key Characteristics
- Cool, desaturated color palette
- Generous whitespace and spacing
- Calm, professional appearance
- Minimal decorative elements
- Excellent readability
- Arctic-inspired color scheme
- Spacious, breathing layouts

## Color Palette (Nord)
- Background: Snow white (#ECEFF4) or polar night dark (#2E3440)
- Surface: Frost white (#E5E9F0) or dark surface (#3B4252)
- Primary: Nord blue (#5E81AC) - cool, desaturated
- Accent: Nord green (#A3BE8C) or Nord cyan (#88C0D0)
- Text: Dark (Polar Night #2E3440) or light (Snow Storm #ECEFF4)
- Borders: Subtle gray (#D8DEE9 or #4C566A)

## Typography
- Font family: Clean sans-serif (Inter, SF Pro)
- Font weights: Regular (400), Medium (500)
- Line height: Generous (1.6-1.8)
- Letter spacing: Normal to slightly loose
- Calm, readable appearance

## Component Styling Examples

### Cards
- Background: Snow white or dark surface
- Border: 1px solid subtle gray
- Shadow: Very subtle (0 1px 3px rgba(0,0,0,0.05))
- Border radius: 8px
- Padding: 24-32px
- Spacious, calm appearance

### Buttons
- Background: Nord blue or accent color
- Text: High contrast (white or dark)
- Border radius: 6-8px
- Padding: 12px 24px
- Hover: Slightly darker shade
- Calm, professional feel

### Inputs
- Background: White or dark surface
- Border: 1px solid subtle gray
- Focus: Nord blue border
- Border radius: 6px
- Clean, minimal appearance

### Spacing
- Generous margins: 64px+ between sections
- Comfortable padding: 24-32px
- Use whitespace intentionally
- Let content breathe

## Implementation Guidelines
- Use Nord color palette strictly
- Keep colors desaturated and cool
- Maintain generous spacing
- Ensure excellent readability
- Keep design minimal and clean
- Use subtle shadows only
- Focus on content hierarchy
- Create calm, professional atmosphere`,
    theme: {
      name: "nord-minimal",
      colors: {
        primary: "oklch(0.52 0.08 220)",
        primaryForeground: "oklch(0.95 0.01 220)",
        surface: "oklch(0.93 0.01 220)",
        surfaceAlt: "oklch(0.88 0.02 220)",
        foreground: "oklch(0.28 0.02 220)",
        muted: "oklch(0.85 0.02 220)",
        mutedForeground: "oklch(0.50 0.02 220)",
        accent: "oklch(0.62 0.10 140)",
        accentForeground: "oklch(0.95 0.01 220)",
        border: "oklch(0.80 0.02 220)",
        input: "oklch(0.80 0.02 220)",
        ring: "oklch(0.52 0.08 220)",
        destructive: "oklch(0.60 0.18 25)",
        destructiveForeground: "oklch(0.95 0.01 220)",
        card: "oklch(0.91 0.01 220)",
        cardForeground: "oklch(0.28 0.02 220)",
        popover: "oklch(0.91 0.01 220)",
        popoverForeground: "oklch(0.28 0.02 220)",
        secondary: "oklch(0.70 0.06 180)",
        secondaryForeground: "oklch(0.28 0.02 220)",
      },
      radius: "md",
      spacingScale: [8, 16, 24, 32, 48, 64, 96, 128, 192, 256],
      typeScale: {
        base: 16,
        h1: 42,
        h2: 32,
        h3: 26,
        h4: 22,
        h5: 18,
        h6: 16,
        leading: { tight: 1.3, normal: 1.6, relaxed: 1.8, loose: 2 },
      },
      border: { weight: 1, style: "solid", contrast: 0.85 },
      shadow: { strength: 0.06, blur: 12, yOffset: 2, xOffset: 0, inner: false },
      effects: { glassAlpha: 0, glassBlur: 0, grain: 0, saturation: 0.8, contrast: 0.95, glow: 0 },
      layout: { cardDensity: "spacious", gridStyle: "standard", gapScale: 1.5 },
    },
  },
  {
    id: "duotone",
    name: "Duotone",
    description: "Two-color system with bold contrast",
    prompt: `Transform my website to use Duotone design style.

## Style Overview
A bold, high-contrast design style using only two colors. Creates dramatic visual impact through stark contrast and limited color palette. Inspired by duotone printing techniques.

## Key Characteristics
- Strictly two-color palette
- Bold, high contrast
- Dramatic visual impact
- Strong geometric shapes
- Clear, defined boundaries
- Minimal color variation
- Bold typography

## Color System
- Primary color: Dark (black, dark gray, or dark color)
- Secondary color: Light (white, light gray, or light color)
- NO gradients or color mixing
- Strict binary color system
- High contrast between the two

## Typography
- Font family: Bold sans-serif or geometric
- Font weights: Bold (700) for headings, Regular (400) for body
- Line height: Tight to normal (1.2-1.5)
- Letter spacing: Normal to slightly tight
- Strong, impactful appearance

## Component Styling Examples

### Buttons
- Background: Primary color (dark)
- Text: Secondary color (light) OR vice versa
- Border: 2px solid opposite color
- NO shadows
- Bold, high contrast
- Padding: 12px 24px

### Cards
- Background: Secondary color (light)
- Border: 2px solid primary color (dark)
- NO shadows
- Bold borders for definition
- High contrast
- Padding: 24px

### Inputs
- Background: Secondary color
- Border: 2px solid primary color
- Text: Primary color
- Focus: Invert colors or bold border
- Clear, defined appearance

### Layout
- Use color blocks for sections
- Alternate between two colors
- Create visual rhythm
- Bold, graphic design approach

## Implementation Guidelines
- Limit to exactly two colors
- Use high contrast (WCAG AAA if possible)
- Remove all shadows and gradients
- Use bold borders (2px+) for definition
- Create strong visual hierarchy
- Use color blocks for impact
- Keep design bold and graphic
- Ensure excellent readability`,
    theme: {
      name: "duotone",
      colors: {
        primary: "oklch(0.15 0 0)",
        primaryForeground: "oklch(0.98 0 0)",
        surface: "oklch(0.98 0 0)",
        surfaceAlt: "oklch(0.92 0 0)",
        foreground: "oklch(0.15 0 0)",
        muted: "oklch(0.88 0 0)",
        mutedForeground: "oklch(0.45 0 0)",
        accent: "oklch(0.88 0 0)",
        accentForeground: "oklch(0.15 0 0)",
        border: "oklch(0.15 0 0)",
        input: "oklch(0.15 0 0)",
        ring: "oklch(0.15 0 0)",
        destructive: "oklch(0.50 0 0)",
        destructiveForeground: "oklch(0.98 0 0)",
        card: "oklch(0.98 0 0)",
        cardForeground: "oklch(0.15 0 0)",
        popover: "oklch(0.98 0 0)",
        popoverForeground: "oklch(0.15 0 0)",
        secondary: "oklch(0.85 0 0)",
        secondaryForeground: "oklch(0.15 0 0)",
      },
      radius: "sm",
      spacingScale: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128],
      typeScale: {
        base: 16,
        h1: 52,
        h2: 38,
        h3: 28,
        h4: 22,
        h5: 18,
        h6: 16,
        leading: { tight: 1.2, normal: 1.5, relaxed: 1.7, loose: 1.9 },
      },
      border: { weight: 2, style: "solid", contrast: 1.5 },
      shadow: { strength: 0, blur: 0, yOffset: 0, xOffset: 0, inner: false },
      effects: { glassAlpha: 0, glassBlur: 0, grain: 0, saturation: 0, contrast: 1.2, glow: 0 },
      layout: { cardDensity: "normal", gridStyle: "standard", gapScale: 1.2 },
    },
  },
  {
    id: "editorial-magazine",
    name: "Editorial Magazine",
    description: "Magazine-style layout with narrow measure and generous line height",
    prompt: `Transform my website to use Editorial Magazine design style.

## Style Overview
A sophisticated design style inspired by high-end magazine layouts. Features narrow text columns, generous line spacing, elegant typography, and careful attention to typographic hierarchy. Creates a premium, editorial feel.

## Key Characteristics
- Narrow text measure (45-65 characters per line)
- Generous line height (1.7-2.4 for body text)
- Serif typography for body text
- Large, bold headings
- Careful typographic hierarchy
- Generous whitespace
- Editorial, premium aesthetic

## Typography
- Body font: Serif (Georgia, Charter, or editorial serif)
- Heading font: Bold sans-serif or bold serif
- Body size: 18-20px for readability
- H1 size: 64-72px (large, impactful)
- H2 size: 48-56px
- Line height: 1.7-2.4 for body (very generous)
- Letter spacing: Normal to slightly loose

## Layout System
- Max width: 700-900px for content
- Narrow columns: 45-65 characters per line
- Generous margins: 64px+ on sides
- Vertical rhythm: Consistent spacing
- Asymmetric or symmetric layouts
- Careful use of whitespace

## Color Palette
- Background: White or off-white (#FAFAFA)
- Text: Dark gray or black (#1A1A1A)
- Accents: Minimal, sophisticated colors
- Muted: Light gray for secondary text
- High contrast for readability

## Component Styling Examples

### Content Blocks
- Max width: 700-900px
- Centered or asymmetric layout
- Generous padding: 48-64px
- Narrow text columns
- Generous line spacing

### Headings
- Large, bold typography
- Generous spacing above and below
- Clear hierarchy
- Optional: Decorative elements
- Impactful, statement-making

### Body Text
- Serif font for elegance
- 18-20px font size
- Line height: 1.7-2.4
- Narrow measure (45-65 chars)
- Comfortable reading experience

### Cards/Articles
- White or light background
- Subtle border or shadow
- Generous padding: 32-48px
- Editorial layout
- Focus on typography

## Spacing
- Large margins: 64-96px between sections
- Generous padding: 32-48px
- Vertical rhythm: Consistent spacing
- Let typography breathe
- Use whitespace as design element

## Implementation Guidelines
- Limit content width to 700-900px
- Use serif fonts for body text
- Implement generous line heights
- Create clear typographic hierarchy
- Use narrow text measures
- Maintain consistent vertical rhythm
- Focus on readability
- Create premium, editorial feel
- Use whitespace intentionally`,
    theme: {
      name: "editorial-magazine",
      colors: {
        primary: "oklch(0.18 0 0)",
        primaryForeground: "oklch(0.99 0 0)",
        surface: "oklch(0.99 0 0)",
        surfaceAlt: "oklch(0.96 0 0)",
        foreground: "oklch(0.18 0 0)",
        muted: "oklch(0.94 0 0)",
        mutedForeground: "oklch(0.48 0 0)",
        accent: "oklch(0.88 0 0)",
        accentForeground: "oklch(0.18 0 0)",
        border: "oklch(0.90 0 0)",
        input: "oklch(0.90 0 0)",
        ring: "oklch(0.70 0 0)",
        destructive: "oklch(0.55 0.22 25)",
        destructiveForeground: "oklch(0.99 0 0)",
        card: "oklch(0.99 0 0)",
        cardForeground: "oklch(0.18 0 0)",
        popover: "oklch(0.99 0 0)",
        popoverForeground: "oklch(0.18 0 0)",
        secondary: "oklch(0.92 0 0)",
        secondaryForeground: "oklch(0.18 0 0)",
      },
      radius: "sm",
      spacingScale: [8, 16, 24, 32, 48, 64, 96, 128, 192, 256],
      typeScale: {
        base: 18,
        h1: 64,
        h2: 48,
        h3: 36,
        h4: 28,
        h5: 22,
        h6: 18,
        leading: { tight: 1.2, normal: 1.7, relaxed: 2, loose: 2.4 },
      },
      border: { weight: 1, style: "solid", contrast: 0.8 },
      shadow: { strength: 0.02, blur: 6, yOffset: 1, xOffset: 0, inner: false },
      effects: { glassAlpha: 0, glassBlur: 0, grain: 0.01, saturation: 0.9, contrast: 1, glow: 0 },
      layout: { cardDensity: "spacious", gridStyle: "standard", gapScale: 2 },
    },
  },
  {
    id: "premium-saas",
    name: "Premium SaaS",
    description: "Professional SaaS aesthetic with subtle gradients and micro-shadows",
    prompt: `Transform my website to use Premium SaaS design style.

## Style Overview
A professional, polished design style optimized for SaaS products. Features neutral color bases, subtle gradients, micro-shadows, and crisp borders. Creates a trustworthy, modern, and premium appearance perfect for business applications.

## Key Characteristics
- Neutral color base (grays, whites)
- Subtle gradients for depth
- Micro-shadows (very subtle, 2-4px blur)
- Crisp, defined borders
- Professional, trustworthy aesthetic
- Clean, modern appearance
- Excellent usability

## Color Palette
- Background: Neutral white or light gray (#FAFAFA, #F5F5F5)
- Primary: Professional blue or brand color
- Text: Dark gray (#1A1A1A, #2D2D2D)
- Borders: Light gray (#E5E5E5)
- Accents: Subtle, professional colors
- High contrast for readability

## Typography
- Font family: Professional sans-serif (Inter, SF Pro, Roboto)
- Font weights: Regular (400), Medium (500), Semibold (600)
- Font sizes: 15px base, clear hierarchy
- Line height: Comfortable (1.5)
- Letter spacing: Normal
- Professional, readable appearance

## Component Styling Examples

### Cards
- Background: White with subtle gradient
- Border: 1px solid light gray
- Shadow: Micro-shadow (0 1px 3px rgba(0,0,0,0.08))
- Border radius: 8px
- Padding: 24px
- Crisp, professional appearance

### Buttons
- Background: Primary color with subtle gradient
- Border: 1px solid (slightly darker)
- Shadow: Micro-shadow (0 2px 4px rgba(0,0,0,0.1))
- Border radius: 6px
- Padding: 10px 24px
- Hover: Slight shadow increase

### Inputs
- Background: White
- Border: 1px solid light gray
- Focus: Primary color border + micro-shadow
- Border radius: 6px
- Clean, professional appearance

### Gradients
- Subtle: Light to slightly lighter
- Direction: Top to bottom or diagonal
- Opacity: Very subtle (5-10% variation)
- Creates depth without being obvious

## Shadow System
- Micro-shadows: 0 1px 3px rgba(0,0,0,0.08)
- Hover: 0 2px 6px rgba(0,0,0,0.12)
- Cards: 0 1px 3px rgba(0,0,0,0.08)
- Very subtle, professional
- Creates depth without heaviness

## Implementation Guidelines
- Use neutral color base
- Add subtle gradients for depth
- Keep shadows minimal (micro-shadows)
- Maintain crisp borders
- Ensure excellent contrast
- Focus on usability
- Create professional appearance
- Use consistent spacing (8px grid)
- Keep design clean and modern`,
    theme: {
      name: "premium-saas",
      colors: {
        primary: "oklch(0.40 0.16 262)",
        primaryForeground: "oklch(0.99 0 0)",
        surface: "oklch(0.98 0 0)",
        surfaceAlt: "oklch(0.95 0 0)",
        foreground: "oklch(0.22 0 0)",
        muted: "oklch(0.93 0 0)",
        mutedForeground: "oklch(0.52 0 0)",
        accent: "oklch(0.55 0.18 262)",
        accentForeground: "oklch(0.99 0 0)",
        border: "oklch(0.89 0 0)",
        input: "oklch(0.89 0 0)",
        ring: "oklch(0.40 0.16 262)",
        destructive: "oklch(0.58 0.24 25)",
        destructiveForeground: "oklch(0.99 0 0)",
        card: "oklch(0.99 0 0)",
        cardForeground: "oklch(0.22 0 0)",
        popover: "oklch(0.99 0 0)",
        popoverForeground: "oklch(0.22 0 0)",
        secondary: "oklch(0.94 0 0)",
        secondaryForeground: "oklch(0.22 0 0)",
      },
      radius: "md",
      spacingScale: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128],
      typeScale: {
        base: 15,
        h1: 40,
        h2: 32,
        h3: 24,
        h4: 20,
        h5: 17,
        h6: 15,
        leading: { tight: 1.25, normal: 1.5, relaxed: 1.75, loose: 2 },
      },
      border: { weight: 1, style: "solid", contrast: 1 },
      shadow: { strength: 0.04, blur: 8, yOffset: 2, xOffset: 0, inner: false },
      effects: { glassAlpha: 0, glassBlur: 0, grain: 0, saturation: 0.95, contrast: 1, glow: 0 },
      layout: { cardDensity: "normal", gridStyle: "standard", gapScale: 1.1 },
    },
  },
  {
    id: "data-dense-dashboard",
    name: "Data-Dense Dashboard",
    description: "Compact layout optimized for dense information display",
    prompt: `Transform my website to use Data-Dense Dashboard design style.

## Style Overview
A compact, information-dense design style optimized for dashboards and data-heavy interfaces. Features tight spacing, clear separators, strong focus states, and efficient use of space while maintaining readability.

## Key Characteristics
- Compact spacing throughout
- Dense information layout
- Clear visual separators
- Strong focus states
- Efficient space usage
- Data-optimized typography
- Professional, functional aesthetic

## Color Palette
- Background: Light neutral (#F8F9FA, #FFFFFF)
- Surface: White or very light gray
- Text: Dark gray (#1A1A1A, #2D2D2D)
- Borders: Light gray (#E5E5E5) for separation
- Primary: Professional blue or brand color
- Accents: Subtle, functional colors
- High contrast for data readability

## Typography
- Font family: Monospace or clean sans-serif (Inter, Roboto Mono)
- Font sizes: Smaller base (14px)
- Font weights: Regular (400), Medium (500)
- Line height: Tight (1.2-1.4)
- Letter spacing: Normal to slightly tight
- Optimized for data display

## Spacing System
- Compact spacing: 2px, 4px, 6px, 8px, 12px, 16px
- Tight padding: 8-12px in cards
- Minimal margins: 16-24px between sections
- Efficient use of space
- Dense but readable

## Component Styling Examples

### Cards (Compact)
- Background: White
- Border: 1px solid light gray
- Shadow: Very subtle (0 1px 2px rgba(0,0,0,0.05))
- Border radius: 4-6px (minimal)
- Padding: 12-16px (compact)
- Dense content layout

### Tables/Data Grids
- Compact row height: 32-40px
- Clear borders between rows
- Alternating row colors (subtle)
- Strong hover states
- Clear focus indicators
- Efficient data display

### Inputs
- Compact height: 32px
- Border: 1px solid light gray
- Focus: Strong border + shadow
- Border radius: 4px
- Clear, functional appearance

### Separators
- Clear borders: 1px solid light gray
- Visual hierarchy through weight
- Consistent spacing
- Functional, not decorative

## Focus States
- Strong, visible focus rings
- High contrast borders
- Clear indication of active state
- Important for keyboard navigation
- Professional appearance

## Implementation Guidelines
- Use compact spacing throughout
- Maintain clear visual separators
- Implement strong focus states
- Optimize for information density
- Keep typography readable despite size
- Use consistent spacing scale
- Focus on functionality
- Ensure excellent usability
- Test with real data
- Balance density with readability`,
    theme: {
      name: "data-dense-dashboard",
      colors: {
        primary: "oklch(0.48 0.20 262)",
        primaryForeground: "oklch(0.99 0 0)",
        surface: "oklch(0.97 0 0)",
        surfaceAlt: "oklch(0.94 0 0)",
        foreground: "oklch(0.25 0 0)",
        muted: "oklch(0.92 0 0)",
        mutedForeground: "oklch(0.55 0 0)",
        accent: "oklch(0.58 0.18 180)",
        accentForeground: "oklch(0.99 0 0)",
        border: "oklch(0.88 0 0)",
        input: "oklch(0.88 0 0)",
        ring: "oklch(0.48 0.20 262)",
        destructive: "oklch(0.58 0.24 25)",
        destructiveForeground: "oklch(0.99 0 0)",
        card: "oklch(0.99 0 0)",
        cardForeground: "oklch(0.25 0 0)",
        popover: "oklch(0.99 0 0)",
        popoverForeground: "oklch(0.25 0 0)",
        secondary: "oklch(0.92 0 0)",
        secondaryForeground: "oklch(0.25 0 0)",
      },
      radius: "sm",
      spacingScale: [2, 4, 6, 8, 12, 16, 24, 32, 48, 64],
      typeScale: {
        base: 14,
        h1: 28,
        h2: 24,
        h3: 20,
        h4: 16,
        h5: 14,
        h6: 13,
        leading: { tight: 1.2, normal: 1.4, relaxed: 1.5, loose: 1.6 },
      },
      border: { weight: 1, style: "solid", contrast: 0.95 },
      shadow: { strength: 0.03, blur: 6, yOffset: 1, xOffset: 0, inner: false },
      effects: { glassAlpha: 0, glassBlur: 0, grain: 0, saturation: 0.95, contrast: 1, glow: 0 },
      layout: { cardDensity: "compact", gridStyle: "standard", gapScale: 0.8 },
    },
  },
];

export function getPresetByName(name: string): StylePreset | undefined {
  return themePresets.find((p) => p.name.toLowerCase() === name.toLowerCase());
}

export function getPresetById(id: string): StylePreset | undefined {
  return themePresets.find((p) => p.id === id);
}

export function getAllPresetNames(): string[] {
  return themePresets.map((p) => p.name);
}

