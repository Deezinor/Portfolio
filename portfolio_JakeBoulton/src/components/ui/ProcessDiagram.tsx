import React from "react";
import clsx from "clsx";

interface ProcessDiagramProps {
  type: "asset-optimisation" | "experience-design" | "ai-workflow";
  className?: string;
}

// Asset Optimisation - Compact Linear Pipeline
const AssetOptimisationDiagram: React.FC = () => {
  const steps = [
    { label: "CAD Import", icon: "■" },
    { label: "Mesh Analysis", icon: "◆" },
    { label: "Decimation", icon: "▲" },
    { label: "Retopo", icon: "●" },
    { label: "UV Mapping", icon: "□" },
    { label: "Texture", icon: "▼" },
    { label: "Export", icon: "→" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center">
      {/* Desktop: Compact horizontal */}
      <div
        className="hidden sm:grid gap-1"
        style={{ gridTemplateColumns: `repeat(${steps.length * 2 - 1}, auto)` }}
      >
        {/* Row 1: Icons and arrows */}
        {steps.map((step, index) => (
          <React.Fragment key={step.label}>
            <div className="flex justify-center">
              <div className="w-10 h-10 border border-border bg-muted/20 flex items-center justify-center text-accent text-lg leading-none">
                {step.icon}
              </div>
            </div>
            {index < steps.length - 1 && (
              <span className="text-accent text-sm flex items-center justify-center">
                →
              </span>
            )}
          </React.Fragment>
        ))}
        {/* Row 2: Labels */}
        {steps.map((step, index) => (
          <React.Fragment key={`label-${step.label}`}>
            <span className="text-[10px] uppercase tracking-wider font-medium text-center">
              {step.label}
            </span>
            {index < steps.length - 1 && <span />}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile: Vertical */}
      <div className="sm:hidden flex flex-col items-center gap-2">
        {steps.map((step, index) => {
          return (
            <React.Fragment key={step.label}>
              <div className="flex items-center gap-3 w-full">
                <div className="w-8 h-8 border border-border bg-muted/20 flex items-center justify-center text-accent flex-shrink-0 leading-none">
                  {step.icon}
                </div>
                <span className="text-xs uppercase tracking-wider">
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <span className="text-accent text-lg self-center">↓</span>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Stats bar */}
      <div className="mt-3 pt-2 border-t border-border/50">
        <div className="flex justify-between text-[10px] uppercase tracking-wider">
          <span className="text-muted">500K+ polys</span>
          <span className="text-accent">↓ 97%</span>
          <span className="text-muted">15K polys</span>
        </div>
      </div>
    </div>
  );
};

// AI Workflow - Compact Linear with Feedback
const AIWorkflowDiagram: React.FC = () => {
  const steps = [
    { label: "Analysis", icon: "◆" },
    { label: "AI Integration", icon: "▲" },
    { label: "Automation", icon: "●" },
    { label: "Testing", icon: "□" },
    { label: "Documentation", icon: "▼" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center">
      {/* Desktop */}
      <div
        className="hidden sm:grid gap-1"
        style={{ gridTemplateColumns: `repeat(${steps.length * 2 - 1}, auto)` }}
      >
        {/* Row 1: Icons and arrows */}
        {steps.map((step, index) => (
          <React.Fragment key={step.label}>
            <div className="flex justify-center">
              <div className="w-10 h-10 border border-border bg-muted/20 flex items-center justify-center text-accent text-lg leading-none">
                {step.icon}
              </div>
            </div>
            {index < steps.length - 1 && (
              <span className="text-accent text-sm flex items-center justify-center">
                →
              </span>
            )}
          </React.Fragment>
        ))}
        {/* Row 2: Labels */}
        {steps.map((step, index) => (
          <React.Fragment key={`label-${step.label}`}>
            <span className="text-[10px] uppercase tracking-wider font-medium text-center">
              {step.label}
            </span>
            {index < steps.length - 1 && <span />}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile */}
      <div className="sm:hidden flex flex-col items-center gap-2">
        {steps.map((step, index) => {
          return (
            <React.Fragment key={step.label}>
              <div className="flex items-center gap-3 w-full">
                <div className="w-8 h-8 border border-border bg-muted/20 flex items-center justify-center text-accent flex-shrink-0 leading-none">
                  {step.icon}
                </div>
                <span className="text-xs uppercase tracking-wider">
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <span className="text-accent text-lg self-center">↓</span>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Feedback loop */}
      <div className="mt-3 pt-2 border-t border-dashed border-border/50">
        <div className="flex items-center justify-center gap-2">
          <span className="text-[10px] uppercase tracking-wider text-muted">
            Continuous
          </span>
          <span className="text-accent">↺</span>
          <span className="text-[10px] uppercase tracking-wider text-muted">
            Loop
          </span>
        </div>
      </div>
    </div>
  );
};

// Experience Design - CSS-Only Iterative Cycle
const ExperienceDesignDiagram: React.FC = () => {
  // 5 stages in a pentagon arrangement using CSS positioning
  const stages = [
    { label: "Research", sublabel: "User", angle: -90 }, // Top
    { label: "Prototype", angle: -18 }, // Top right
    { label: "Testing", angle: 54 }, // Bottom right
    { label: "Iterate", angle: 126 }, // Bottom left
    { label: "Deploy", angle: 198 }, // Top left
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center">
      {/* Desktop: Circular arrangement */}
      <div className="hidden sm:block relative w-full aspect-square max-w-[280px] mx-auto">
        {/* Center - User */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-16 h-16 rounded-full border-2 border-accent bg-muted/30 flex flex-col items-center justify-center">
            <span className="text-[10px] uppercase tracking-wider font-medium">
              USER
            </span>
            <span className="text-xs text-accent">◆</span>
          </div>
        </div>

        {/* Orbital ring - positioned to align with stage circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[76%] h-[76%] border border-dashed border-muted/30 rounded-full" />

        {/* Stages positioned around the circle */}
        {stages.map((stage) => {
          const radians = (stage.angle * Math.PI) / 180;
          // Adjust radius so stage circle centers align with the orbital ring
          const radius = 38; // percentage from center
          const x = 50 + radius * Math.cos(radians);
          const y = 54 + radius * Math.sin(radians);

          return (
            <div
              key={stage.label}
              className="absolute flex flex-col items-center text-center"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-12 h-12 rounded-full border border-border bg-muted/20 flex items-center justify-center hover:border-accent transition-colors">
                <span className="text-accent text-xs">●</span>
              </div>
              <span className="text-[9px] uppercase tracking-wider font-medium mt-1 whitespace-nowrap">
                {stage.label}
              </span>
              {stage.sublabel && (
                <span className="text-[8px] uppercase tracking-wider text-muted whitespace-nowrap">
                  {stage.sublabel}
                </span>
              )}
            </div>
          );
        })}

        {/* Curved arrows showing flow */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="3"
              markerHeight="3"
              refX="2"
              refY="1.5"
              orient="auto"
            >
              <polygon points="0 0, 3 1.5, 0 3" fill="#E56B5D" />
            </marker>
          </defs>
          {/* Draw circular path aligned with stage circles */}
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="#E56B5D"
            strokeWidth="0.5"
            strokeDasharray="2 2"
          />
        </svg>
      </div>

      {/* Mobile: Vertical with cycle indicator */}
      <div className="sm:hidden flex flex-col items-center gap-1">
        <div className="text-center mb-2">
          <span className="text-xs uppercase tracking-wider text-accent">
            Iterative Cycle
          </span>
        </div>
        {stages.map((stage, index) => {
          return (
            <React.Fragment key={stage.label}>
              <div className="flex items-center gap-3 w-full px-4">
                <div className="w-8 h-8 rounded-full border border-border bg-muted/20 flex items-center justify-center text-accent flex-shrink-0">
                  ●
                </div>
                <span className="text-xs uppercase tracking-wider">
                  {stage.label}
                  {stage.sublabel}
                </span>
              </div>
              {index < stages.length - 1 && (
                <span className="text-accent text-sm self-center">↓</span>
              )}
            </React.Fragment>
          );
        })}
        <span className="text-accent text-lg mt-1">↺</span>
      </div>

      {/* Bottom note */}
      <div className="mt-2 pt-1 border-t border-border/30 text-center">
        <span className="text-[9px] uppercase tracking-wider text-muted">
          User-Centered Design Process
        </span>
      </div>
    </div>
  );
};

const ProcessDiagram: React.FC<ProcessDiagramProps> = ({ type, className }) => {
  return (
    <div className={clsx("w-full h-full p-4", className)}>
      {type === "asset-optimisation" && <AssetOptimisationDiagram />}
      {type === "ai-workflow" && <AIWorkflowDiagram />}
      {type === "experience-design" && <ExperienceDesignDiagram />}
    </div>
  );
};

export default ProcessDiagram;
