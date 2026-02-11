
"use client";

import { CheckCircle2, ArrowRight, Settings, Zap, Users } from "lucide-react";

const steps = [
  { icon: Users, label: "Lead Capture", description: "Automated multi-channel ingestion" },
  { icon: Settings, label: "Validation", description: "Rule-based data normalization" },
  { icon: Zap, label: "Trigger Action", description: "Instant notifications & assignments" },
  { icon: CheckCircle2, label: "Conversion", description: "Seamless transition to deal flow" },
];

export function WorkflowDiagram() {
  return (
    <div className="relative py-12 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto px-4">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center flex-1 w-full gap-4 md:gap-0">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 transition-all group-hover:bg-accent group-hover:text-white group-hover:scale-110">
                <step.icon className="w-8 h-8 text-accent group-hover:text-white" />
              </div>
              <h4 className="font-bold text-sm mb-1">{step.label}</h4>
              <p className="text-xs text-muted-foreground max-w-[120px]">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:flex flex-1 items-center justify-center">
                <div className="h-px bg-border w-full relative">
                  <ArrowRight className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            )}
            {index < steps.length - 1 && (
              <div className="md:hidden flex h-12 items-center justify-center">
                <div className="w-px bg-border h-full relative">
                  <ArrowRight className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground rotate-90" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
