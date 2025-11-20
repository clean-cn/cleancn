export type RadiusSize = "none" | "sm" | "md" | "lg" | "xl";
export type GridStyle = "standard" | "bento";

export interface ThemeColors {
  primary: string;
  primaryForeground: string;
  surface: string;
  surfaceAlt: string;
  foreground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  border: string;
  input: string;
  ring: string;
  destructive: string;
  destructiveForeground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  secondary: string;
  secondaryForeground: string;
}

export interface TypeScale {
  base: number;
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  h6: number;
  leading: {
    tight: number;
    normal: number;
    relaxed: number;
    loose: number;
  };
}

export interface BorderConfig {
  weight: number;
  style: "solid" | "dashed" | "dotted";
  contrast: number;
}

export interface ShadowConfig {
  strength: number;
  blur: number;
  yOffset: number;
  xOffset: number;
  inner: boolean;
  color?: string;
}

export interface EffectsConfig {
  glassAlpha: number;
  glassBlur: number;
  grain: number;
  saturation: number;
  contrast: number;
  glow: number;
}

export interface LayoutConfig {
  cardDensity: "compact" | "normal" | "spacious";
  gridStyle: GridStyle;
  gapScale: number;
}

export interface ThemeConfig {
  name: string;
  colors: ThemeColors;
  radius: RadiusSize;
  spacingScale: number[];
  typeScale: TypeScale;
  border: BorderConfig;
  shadow: ShadowConfig;
  effects: EffectsConfig;
  layout: LayoutConfig;
}

export const defaultTheme: ThemeConfig = {
  name: "default",
  colors: {
    primary: "oklch(0.205 0 0)",
    primaryForeground: "oklch(0.985 0 0)",
    surface: "oklch(1 0 0)",
    surfaceAlt: "oklch(0.97 0 0)",
    foreground: "oklch(0.145 0 0)",
    muted: "oklch(0.97 0 0)",
    mutedForeground: "oklch(0.556 0 0)",
    accent: "oklch(0.97 0 0)",
    accentForeground: "oklch(0.205 0 0)",
    border: "oklch(0.922 0 0)",
    input: "oklch(0.922 0 0)",
    ring: "oklch(0.708 0 0)",
    destructive: "oklch(0.577 0.245 27.325)",
    destructiveForeground: "oklch(0.985 0 0)",
    card: "oklch(1 0 0)",
    cardForeground: "oklch(0.145 0 0)",
    popover: "oklch(1 0 0)",
    popoverForeground: "oklch(0.145 0 0)",
    secondary: "oklch(0.97 0 0)",
    secondaryForeground: "oklch(0.205 0 0)",
  },
  radius: "md",
  spacingScale: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128],
  typeScale: {
    base: 16,
    h1: 48,
    h2: 36,
    h3: 30,
    h4: 24,
    h5: 20,
    h6: 18,
    leading: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
    },
  },
  border: {
    weight: 1,
    style: "solid",
    contrast: 1,
  },
  shadow: {
    strength: 0.1,
    blur: 10,
    yOffset: 2,
    xOffset: 0,
    inner: false,
  },
  effects: {
    glassAlpha: 0,
    glassBlur: 0,
    grain: 0,
    saturation: 1,
    contrast: 1,
    glow: 0,
  },
  layout: {
    cardDensity: "normal",
    gridStyle: "standard",
    gapScale: 1,
  },
};

export function radiusToPixels(size: RadiusSize): string {
  const map = {
    none: "0",
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
  };
  return map[size];
}

export function generateCSSVariables(theme: ThemeConfig): Record<string, string> {
  const shadowColor = theme.shadow.color || "oklch(0 0 0 / 0.1)";
  const boxShadowValue = theme.shadow.strength > 0
    ? `${theme.shadow.xOffset}px ${theme.shadow.yOffset}px ${theme.shadow.blur}px ${shadowColor}`
    : "none";
  
  const cardShadowValue = theme.shadow.strength > 0
    ? `${theme.shadow.xOffset * 2}px ${theme.shadow.yOffset * 2}px ${theme.shadow.blur}px ${shadowColor}`
    : "none";

  return {
    "--background": theme.colors.surface,
    "--foreground": theme.colors.foreground,
    "--card": theme.colors.card,
    "--card-foreground": theme.colors.cardForeground,
    "--popover": theme.colors.popover,
    "--popover-foreground": theme.colors.popoverForeground,
    "--primary": theme.colors.primary,
    "--primary-foreground": theme.colors.primaryForeground,
    "--secondary": theme.colors.secondary,
    "--secondary-foreground": theme.colors.secondaryForeground,
    "--muted": theme.colors.muted,
    "--muted-foreground": theme.colors.mutedForeground,
    "--accent": theme.colors.accent,
    "--accent-foreground": theme.colors.accentForeground,
    "--destructive": theme.colors.destructive,
    "--destructive-foreground": theme.colors.destructiveForeground,
    "--border": theme.colors.border,
    "--input": theme.colors.input,
    "--ring": theme.colors.ring,
    "--radius": radiusToPixels(theme.radius),
    "--spacing-base": `${theme.spacingScale[0]}px`,
    "--font-size-base": `${theme.typeScale.base}px`,
    "--font-size-h1": `${theme.typeScale.h1}px`,
    "--font-size-h2": `${theme.typeScale.h2}px`,
    "--font-size-h3": `${theme.typeScale.h3}px`,
    "--border-weight": `${theme.border.weight}px`,
    "--shadow-blur": `${theme.shadow.blur}px`,
    "--shadow-offset-x": `${theme.shadow.xOffset}px`,
    "--shadow-offset-y": `${theme.shadow.yOffset}px`,
    "--box-shadow": boxShadowValue,
    "--card-shadow": cardShadowValue,
    "--glass-alpha": theme.effects.glassAlpha.toString(),
    "--glass-blur": `${theme.effects.glassBlur}px`,
    "--saturation": theme.effects.saturation.toString(),
    "--contrast": theme.effects.contrast.toString(),
    "--glow": `${theme.effects.glow}px`,
  };
}

