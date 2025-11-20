"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/lib/theme-provider";
import { themePresets } from "@/lib/theme-presets";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Copy, Check, Eye } from "lucide-react";
import { toast } from "sonner";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [selectedPreset, setSelectedPreset] = useState<string>(themePresets[0]?.id || "");
  const [copied, setCopied] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const preset = themePresets.find((p) => p.id === selectedPreset);
    if (preset) {
      setTheme(preset.theme);
    }
  }, []);

  const handlePresetChange = (presetId: string) => {
    setSelectedPreset(presetId);
    const preset = themePresets.find((p) => p.id === presetId);
    if (preset) {
      setTheme(preset.theme);
    }
  };

  const handleCopyPrompt = () => {
    const preset = themePresets.find((p) => p.id === selectedPreset);
    if (preset) {
      navigator.clipboard.writeText(preset.prompt);
      setCopied(true);
      toast.success("Prompt copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const currentPreset = themePresets.find((p) => p.id === selectedPreset);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Theme Switcher</CardTitle>
        <CardDescription>
          Select a design preset to see it applied instantly
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Design Style</label>
          <Select value={selectedPreset} onValueChange={handlePresetChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a theme" />
            </SelectTrigger>
            <SelectContent className="max-h-[600px]">
              {themePresets.map((preset) => (
                <SelectItem key={preset.id} value={preset.id}>
                  {preset.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {selectedPreset && currentPreset && (
          <div className="space-y-3">
            <div className="text-sm text-muted-foreground">
              {currentPreset.description}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyPrompt}
                className="flex-1"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Prompt
                  </>
                )}
              </Button>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View Prompt
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{currentPreset.name} - Full Prompt</DialogTitle>
                    <DialogDescription>
                      {currentPreset.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="rounded-md bg-muted p-4 mt-4">
                    <code className="text-xs text-foreground whitespace-pre-wrap break-words block">
                      {currentPreset.prompt}
                    </code>
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopyPrompt}
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-2" />
                          Copy Prompt
                        </>
                      )}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

