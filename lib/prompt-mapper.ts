import { ThemeConfig, defaultTheme, RadiusSize } from "./tokens";
import { themePresets } from "./theme-presets";

type TokenAdjustment = Partial<ThemeConfig>;

interface KeywordRule {
  keywords: string[];
  apply: (theme: ThemeConfig) => ThemeConfig;
}

const keywordRules: KeywordRule[] = [
  {
    keywords: ["airy", "breathing", "spacious", "generous", "whitespace", "open"],
    apply: (theme) => ({
      ...theme,
      spacingScale: theme.spacingScale.map((v) => v * 1.5),
      layout: { ...theme.layout, gapScale: theme.layout.gapScale * 1.4 },
    }),
  },
  {
    keywords: ["compact", "dense", "tight"],
    apply: (theme) => ({
      ...theme,
      spacingScale: theme.spacingScale.map((v) => v * 0.75),
      layout: { ...theme.layout, cardDensity: "compact", gapScale: theme.layout.gapScale * 0.8 },
    }),
  },
  {
    keywords: ["round", "rounded", "pill", "soft", "curved"],
    apply: (theme) => ({
      ...theme,
      radius: "xl" as RadiusSize,
    }),
  },
  {
    keywords: ["sharp", "tech", "angular", "crisp", "no rounded", "square"],
    apply: (theme) => ({
      ...theme,
      radius: "none" as RadiusSize,
    }),
  },
  {
    keywords: ["chunky", "brutal", "thick", "bold borders"],
    apply: (theme) => ({
      ...theme,
      border: {
        ...theme.border,
        weight: Math.min(theme.border.weight * 2.5, 4),
        contrast: theme.border.contrast * 1.5,
      },
    }),
  },
  {
    keywords: ["thin", "hairline", "delicate", "fine"],
    apply: (theme) => ({
      ...theme,
      border: {
        ...theme.border,
        weight: Math.max(theme.border.weight * 0.5, 0.5),
        contrast: theme.border.contrast * 0.7,
      },
    }),
  },
  {
    keywords: ["offset", "poster", "drop shadow"],
    apply: (theme) => ({
      ...theme,
      shadow: {
        ...theme.shadow,
        xOffset: 8,
        yOffset: 8,
        blur: 0,
        strength: 1,
      },
    }),
  },
  {
    keywords: ["flat", "no shadow", "shadowless"],
    apply: (theme) => ({
      ...theme,
      shadow: {
        ...theme.shadow,
        strength: 0,
        blur: 0,
        xOffset: 0,
        yOffset: 0,
      },
    }),
  },
  {
    keywords: ["glow", "luminous", "radiant"],
    apply: (theme) => ({
      ...theme,
      effects: {
        ...theme.effects,
        glow: Math.min(theme.effects.glow + 12, 20),
      },
    }),
  },
  {
    keywords: ["glass", "frosted", "translucent", "transparent"],
    apply: (theme) => ({
      ...theme,
      effects: {
        ...theme.effects,
        glassAlpha: Math.min(theme.effects.glassAlpha + 0.5, 0.7),
        glassBlur: Math.min(theme.effects.glassBlur + 12, 20),
        saturation: theme.effects.saturation * 1.1,
      },
    }),
  },
  {
    keywords: ["clay", "soft 3d", "raised", "tactile"],
    apply: (theme) => ({
      ...theme,
      radius: "xl" as RadiusSize,
      shadow: {
        ...theme.shadow,
        inner: true,
        blur: 20,
        yOffset: 8,
        strength: 0.12,
      },
    }),
  },
  {
    keywords: ["bento", "mosaic", "grid", "cards"],
    apply: (theme) => ({
      ...theme,
      layout: {
        ...theme.layout,
        gridStyle: "bento",
        gapScale: theme.layout.gapScale * 1.5,
      },
    }),
  },
  {
    keywords: ["bold", "striking", "strong", "impactful"],
    apply: (theme) => ({
      ...theme,
      typeScale: {
        ...theme.typeScale,
        h1: theme.typeScale.h1 * 1.3,
        h2: theme.typeScale.h2 * 1.2,
        h3: theme.typeScale.h3 * 1.15,
      },
      effects: {
        ...theme.effects,
        contrast: theme.effects.contrast * 1.1,
      },
    }),
  },
  {
    keywords: ["neon", "noir", "cyberpunk", "futuristic"],
    apply: (theme) => ({
      ...theme,
      effects: {
        ...theme.effects,
        saturation: theme.effects.saturation * 1.3,
        glow: Math.min(theme.effects.glow + 16, 20),
      },
    }),
  },
  {
    keywords: ["material you", "dynamic color", "tonal", "material 3", "m3"],
    apply: (theme) => ({
      ...theme,
      radius: "lg" as RadiusSize,
      shadow: {
        ...theme.shadow,
        blur: 16,
        yOffset: 4,
        strength: 0.12,
      },
    }),
  },
  {
    keywords: ["muted", "calm", "subtle", "quiet"],
    apply: (theme) => ({
      ...theme,
      effects: {
        ...theme.effects,
        saturation: theme.effects.saturation * 0.85,
        contrast: theme.effects.contrast * 0.95,
      },
    }),
  },
  {
    keywords: ["vibrant", "colorful", "bright", "saturated"],
    apply: (theme) => ({
      ...theme,
      effects: {
        ...theme.effects,
        saturation: theme.effects.saturation * 1.2,
      },
    }),
  },
  {
    keywords: ["monochrome", "grayscale", "black and white"],
    apply: (theme) => ({
      ...theme,
      effects: {
        ...theme.effects,
        saturation: 0,
      },
    }),
  },
  {
    keywords: ["oversized", "large type", "big text"],
    apply: (theme) => ({
      ...theme,
      typeScale: {
        ...theme.typeScale,
        h1: theme.typeScale.h1 * 1.4,
        h2: theme.typeScale.h2 * 1.3,
        h3: theme.typeScale.h3 * 1.2,
      },
    }),
  },
  {
    keywords: ["acrylic", "fluent", "microsoft"],
    apply: (theme) => ({
      ...theme,
      effects: {
        ...theme.effects,
        glassAlpha: 0.5,
        glassBlur: 12,
      },
      shadow: {
        ...theme.shadow,
        blur: 20,
        yOffset: 4,
        strength: 0.1,
      },
    }),
  },
];

function detectPresetFromPrompt(prompt: string): string | null {
  const normalized = prompt.toLowerCase().trim();
  
  for (const preset of themePresets) {
    const presetKeywords = preset.id.split("-");
    const matchCount = presetKeywords.filter((kw) => normalized.includes(kw)).length;
    
    if (matchCount >= Math.ceil(presetKeywords.length / 2)) {
      return preset.id;
    }
    
    if (normalized.includes(preset.name.toLowerCase())) {
      return preset.id;
    }
  }
  
  return null;
}

export function parsePrompt(prompt: string): ThemeConfig {
  const normalized = prompt.toLowerCase().trim();
  
  const detectedPreset = detectPresetFromPrompt(normalized);
  let baseTheme: ThemeConfig = detectedPreset
    ? themePresets.find((p) => p.id === detectedPreset)!.theme
    : { ...defaultTheme };
  
  const words = normalized.split(/[\s,;]+/);
  
  for (const rule of keywordRules) {
    const hasKeyword = rule.keywords.some((kw) => {
      const kwWords = kw.split(/\s+/);
      if (kwWords.length === 1) {
        return words.includes(kw);
      }
      return normalized.includes(kw);
    });
    
    if (hasKeyword) {
      baseTheme = rule.apply(baseTheme);
    }
  }
  
  return baseTheme;
}

export function mergeThemes(base: ThemeConfig, override: Partial<ThemeConfig>): ThemeConfig {
  return {
    ...base,
    ...override,
    colors: { ...base.colors, ...override.colors },
    typeScale: { ...base.typeScale, ...override.typeScale },
    border: { ...base.border, ...override.border },
    shadow: { ...base.shadow, ...override.shadow },
    effects: { ...base.effects, ...override.effects },
    layout: { ...base.layout, ...override.layout },
  };
}

