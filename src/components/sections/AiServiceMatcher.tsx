
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, Sparkles, CheckCircle2 } from "lucide-react";
import { intelligentServiceMatching, type IntelligentServiceMatchingOutput } from "@/ai/flows/intelligent-service-matching";

export function AiServiceMatcher() {
  const [needs, setNeeds] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<IntelligentServiceMatchingOutput | null>(null);

  const handleMatch = async () => {
    if (!needs.trim()) return;
    setIsLoading(true);
    try {
      const output = await intelligentServiceMatching({ userNeeds: needs });
      setResult(output);
    } catch (error) {
      console.error("Matching failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" /> AI-Driven Discovery
          </div>
          <h2 className="text-3xl font-bold mb-4">Find Your Perfect Service Match</h2>
          <p className="text-muted-foreground">Describe your project requirements and let our AI suggest the best service paths for your enterprise.</p>
        </div>

        <Card className="border-none shadow-xl">
          <CardHeader>
            <CardTitle className="text-lg">What are you looking to build?</CardTitle>
            <CardDescription>Enter details about your technical needs, scale, and timeline.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Textarea 
              placeholder="e.g. We need to build a high-scale data processing pipeline with AI integration for our logistics platform..."
              className="min-h-[150px] resize-none"
              value={needs}
              onChange={(e) => setNeeds(e.target.value)}
            />
            <Button 
              className="w-full h-12 gap-2" 
              onClick={handleMatch}
              disabled={isLoading || !needs.trim()}
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
              Generate Suggestions
            </Button>

            {result && (
              <div className="mt-8 p-6 bg-background rounded-xl border border-border animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Recommended Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {result.suggestions.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-primary/20 bg-primary/5">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="font-medium">{s}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground mb-2">AI Reasoning</h4>
                  <p className="text-sm text-foreground/80 leading-relaxed italic border-l-2 border-accent pl-4">
                    "{result.reasoning}"
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
