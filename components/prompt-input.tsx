"use client";

import { useState } from "react";
import { useTheme } from "@/lib/theme-provider";
import { parsePrompt } from "@/lib/prompt-mapper";
import { themePresets } from "@/lib/theme-presets";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Copy, Sparkles } from "lucide-react";
import { toast } from "sonner";

export function PromptInput() {
  const { setTheme } = useTheme();
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt");
      return;
    }

    setIsGenerating(true);
    try {
      const theme = parsePrompt(prompt);
      setTheme(theme);
      toast.success("Theme applied successfully!");
    } catch (error) {
      console.error("Error generating theme:", error);
      toast.error("Failed to generate theme");
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePresetClick = (presetPrompt: string) => {
    setPrompt(presetPrompt);
  };

  const handleCopyPrompt = (presetPrompt: string) => {
    navigator.clipboard.writeText(presetPrompt);
    toast.success("Prompt copied to clipboard!");
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          Generate Theme from Prompt
        </CardTitle>
        <CardDescription>
          Describe your desired style or pick a preset below
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <label className="text-sm font-medium">Your Prompt</label>
          <Textarea
            placeholder="e.g., minimal, calm, muted, lots of whitespace"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={3}
            className="resize-none"
          />
          <Button
            onClick={handleGenerate}
            disabled={isGenerating || !prompt.trim()}
            className="w-full"
          >
            {isGenerating ? "Generating..." : "Generate & Apply Theme"}
          </Button>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium">Preset Prompts</label>
          <div className="flex flex-wrap gap-2">
            {themePresets.map((preset) => (
              <div key={preset.id} className="group relative">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePresetClick(preset.prompt)}
                  className="text-xs"
                >
                  {preset.name}
                </Button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopyPrompt(preset.prompt);
                  }}
                  className="absolute -right-2 -top-2 hidden h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-opacity group-hover:flex group-hover:opacity-100"
                  title="Copy prompt"
                >
                  <Copy className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-border bg-muted/50 p-4">
          <p className="text-xs text-muted-foreground">
            <strong>Tip:</strong> Combine keywords like "airy", "round", "bold", "glass", "neon" to create unique variations
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

