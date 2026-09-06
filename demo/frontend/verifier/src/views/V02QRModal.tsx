import { Shield, X, Eye, Clock } from "lucide-react";

interface Props {
  onClose: () => void;
  onSuccess: () => void;
  onFail: () => void;
}

const requestedInfo = [
  { label: "Enrollment status", detail: "Active student — yes/no only" },
  { label: "Institution type", detail: "University / College / Vocational" },
  { label: "Eligibility period", detail: "Valid through Jun 2027" },
];

export default function V02QRModal({ onClose, onSuccess, onFail }: Props) {
  return (
    <div
      className="min-h-full flex items-center justify-center relative"
      style={{ background: "var(--background)" }}
    >
      {/* Blurred background hint */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, var(--border) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, var(--border) 40px)",
          opacity: 0.4,
        }}
      />

      {/* StudentDeals background label */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-4" style={{ zIndex: 1 }}>
        <span
          className="text-sm font-semibold"
          style={{ fontFamily: "var(--font-heading)", color: "var(--muted-foreground)", opacity: 0.5 }}
        >
          StudentDeals · Checkout
        </span>
        <span className="text-xs" style={{ color: "var(--muted-foreground)", opacity: 0.4 }}>
          Verification in progress…
        </span>
      </div>

      {/* Overlay scrim */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(13,13,13,0.45)", zIndex: 2 }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative rounded-xl shadow-2xl w-full max-w-sm mx-4"
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          zIndex: 10,
        }}
      >
        {/* Modal header */}
        <div
          className="flex items-center justify-between px-5 py-4 rounded-t-xl"
          style={{ background: "var(--primary)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="flex items-center gap-2.5">
            <Shield size={16} style={{ color: "var(--accent)" }} />
            <div>
              <p
                className="text-xs font-bold tracking-widest uppercase leading-none"
                style={{ color: "var(--accent)" }}
              >
                ProofPass
              </p>
              <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>
                Verification Request
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 transition-colors hover:bg-white/10"
            style={{ color: "rgba(255,255,255,0.5)" }}
            aria-label="Close"
          >
            <X size={15} />
          </button>
        </div>

        <div className="p-5 flex flex-col gap-5">
          {/* Title */}
          <div>
            <h2
              className="text-base font-bold leading-tight"
              style={{ fontFamily: "var(--font-heading)", color: "var(--primary)" }}
            >
              Scan to verify your student status
            </h2>
            <p className="text-xs mt-1 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              Open the ProofPass app and scan this code. Verification takes under 10 seconds.
            </p>
          </div>

          {/* QR Placeholder */}
          <div
            className="rounded-lg flex items-center justify-center mx-auto"
            style={{
              width: 192,
              height: 192,
              border: "1px solid var(--border)",
              background: "var(--background)",
            }}
          >
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
              {/* QR code pattern */}
              {[
                [0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],
                [0,1],[6,1],
                [0,2],[2,2],[3,2],[4,2],[6,2],
                [0,3],[2,3],[3,3],[4,3],[6,3],
                [0,4],[2,4],[3,4],[4,4],[6,4],
                [0,5],[6,5],
                [0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],
                // center data
                [3,8],[4,8],[5,8],
                [8,0],[9,0],[10,0],[11,0],[12,0],[13,0],[14,0],
                [8,1],[14,1],
                [8,2],[10,2],[11,2],[12,2],[14,2],
                [8,3],[10,3],[11,3],[12,3],[14,3],
                [8,4],[10,4],[11,4],[12,4],[14,4],
                [8,5],[14,5],
                [8,6],[9,6],[10,6],[11,6],[12,6],[13,6],[14,6],
                [0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],
                [1,8],[6,8],
                [0,10],[2,10],[3,10],[4,10],
                [0,11],[2,11],[3,11],[4,11],
                [0,12],[1,12],[2,12],[3,12],[4,12],[5,12],[6,12],
                [5,8],[6,9],[6,10],[5,11],[4,12],
                [9,8],[11,8],[12,9],[13,10],[11,11],[9,12],[10,12],[11,12],
                [8,9],[10,9],
                [9,10],[10,11],[12,11],[13,11],[14,11],
                [12,12],[13,12],[14,12],
                [8,13],[9,13],[10,13],
                [12,13],[14,13],
                [8,14],[10,14],[11,14],[13,14],[14,14],
              ].map(([col, row], i) => (
                <rect
                  key={i}
                  x={8 + col * 10}
                  y={8 + row * 10}
                  width={9}
                  height={9}
                  rx={1}
                  fill="var(--primary)"
                />
              ))}
              {/* Center accent dot */}
              <rect x={72} y={72} width={16} height={16} rx={3} fill="var(--accent)" />
            </svg>
          </div>

          {/* Session timer */}
          <div
            className="flex items-center justify-center gap-1.5 text-xs"
            style={{ color: "var(--muted-foreground)" }}
          >
            <Clock size={12} />
            <span>Session expires in <strong style={{ color: "var(--foreground)" }}>4:58</strong></span>
          </div>

          {/* Requested Information */}
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-2"
              style={{ color: "var(--muted-foreground)" }}
            >
              Requested Information
            </p>
            <div
              className="rounded-lg divide-y text-xs"
              style={{ border: "1px solid var(--border)", background: "var(--background)" }}
            >
              {requestedInfo.map((item) => (
                <div key={item.label} className="px-4 py-2.5 flex justify-between items-center gap-3">
                  <span className="font-medium" style={{ color: "var(--foreground)" }}>{item.label}</span>
                  <span style={{ color: "var(--muted-foreground)", textAlign: "right" }}>{item.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy Notice */}
          <div
            className="flex gap-2.5 rounded-lg p-3 text-xs leading-relaxed"
            style={{ background: "rgba(0,200,150,0.07)", border: "1px solid rgba(0,200,150,0.18)" }}
          >
            <Eye size={13} className="shrink-0 mt-0.5" style={{ color: "var(--accent)" }} />
            <p style={{ color: "var(--muted-foreground)" }}>
              ProofPass uses zero-knowledge proofs. StudentDeals receives only your eligibility result — never your name, ID, or institution.
            </p>
          </div>

          {/* Demo buttons */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <button
              onClick={onSuccess}
              className="rounded py-2.5 text-xs font-semibold tracking-wide transition-all duration-150 hover:opacity-90"
              style={{ background: "var(--accent)", color: "var(--accent-foreground)", fontFamily: "var(--font-heading)" }}
            >
              Simulate Success
            </button>
            <button
              onClick={onFail}
              className="rounded py-2.5 text-xs font-semibold tracking-wide transition-all duration-150 hover:bg-red-50"
              style={{ border: "1px solid #fca5a5", color: "#dc2626", fontFamily: "var(--font-heading)" }}
            >
              Simulate Failure
            </button>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="text-center text-xs transition-colors hover:underline"
            style={{ color: "var(--muted-foreground)" }}
          >
            Cancel verification
          </button>
        </div>
      </div>
    </div>
  );
}
