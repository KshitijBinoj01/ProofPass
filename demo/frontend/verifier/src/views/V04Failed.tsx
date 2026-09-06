import { XCircle, Shield, RotateCcw, ChevronDown } from "lucide-react";
import { useState } from "react";

interface Props {
  onRetry: () => void;
}

const reasons = [
  "Enrollment not found in institutional database",
  "Credential has expired or been revoked",
  "Institution not currently supported",
];

export default function V04Failed({ onRetry }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="min-h-full flex items-center justify-center px-4"
      style={{ background: "var(--background)" }}
    >
      <div
        className="rounded-xl w-full max-w-sm overflow-hidden shadow-lg"
        style={{ border: "1px solid var(--border)", background: "var(--card)" }}
      >
        {/* Top accent bar — red */}
        <div className="h-1 w-full" style={{ background: "#ef4444" }} />

        <div className="p-8 flex flex-col items-center text-center gap-6">
          {/* Icon */}
          <div
            className="flex items-center justify-center rounded-full"
            style={{ width: 72, height: 72, background: "rgba(239,68,68,0.08)" }}
          >
            <XCircle size={36} strokeWidth={1.8} style={{ color: "#ef4444" }} />
          </div>

          {/* Error message */}
          <div>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-2"
              style={{ color: "#ef4444" }}
            >
              Verification failed
            </p>
            <h1
              className="text-2xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-heading)", color: "var(--primary)" }}
            >
              We couldn't verify your enrollment
            </h1>
            <p className="text-sm mt-2 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              ProofPass was unable to confirm active student status with your credential. No personal data was stored or shared.
            </p>
          </div>

          {/* Possible reasons accordion */}
          <div
            className="w-full rounded-lg overflow-hidden text-xs"
            style={{ border: "1px solid var(--border)", background: "var(--background)" }}
          >
            <button
              className="w-full px-4 py-3 flex items-center justify-between text-left transition-colors hover:bg-black/[0.02]"
              onClick={() => setExpanded(!expanded)}
            >
              <span className="font-semibold" style={{ color: "var(--foreground)" }}>
                Why might this happen?
              </span>
              <ChevronDown
                size={14}
                style={{
                  color: "var(--muted-foreground)",
                  transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                }}
              />
            </button>
            {expanded && (
              <div
                className="border-t divide-y"
                style={{ borderColor: "var(--border)" }}
              >
                {reasons.map((r) => (
                  <p
                    key={r}
                    className="px-4 py-2.5 text-left leading-relaxed"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    · {r}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Privacy assurance */}
          <div
            className="flex gap-2.5 rounded-lg p-3 text-xs leading-relaxed w-full"
            style={{ background: "rgba(15,39,68,0.04)", border: "1px solid var(--border)" }}
          >
            <Shield size={13} className="shrink-0 mt-0.5" style={{ color: "var(--muted-foreground)" }} />
            <p style={{ color: "var(--muted-foreground)", textAlign: "left" }}>
              No personal information was collected or transmitted during this verification attempt.
            </p>
          </div>

          {/* Try Again */}
          <button
            onClick={onRetry}
            className="w-full flex items-center justify-center gap-2 rounded py-3 text-sm font-semibold transition-all duration-150 hover:opacity-90 active:scale-[0.98]"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
              fontFamily: "var(--font-heading)",
            }}
          >
            <RotateCcw size={14} />
            Try again
          </button>

          <button
            className="text-xs transition-colors hover:underline"
            style={{ color: "var(--muted-foreground)" }}
            onClick={() => {}}
          >
            Continue without student discount
          </button>

          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
            Need help?{" "}
            <span className="font-semibold cursor-pointer" style={{ color: "var(--primary)" }}>
              Contact ProofPass support
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
