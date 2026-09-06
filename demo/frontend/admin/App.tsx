import { useState } from "react";

const NAV_LINKS = [
  { label: "Dashboard", icon: GridIcon },
  { label: "Student Directory", icon: UsersIcon, active: true },
  { label: "Issued Credentials", icon: BadgeIcon },
  { label: "Audit Logs", icon: LogIcon },
  { label: "Settings", icon: SettingsIcon },
];

const STUDENTS = [
  { name: "Dhrunil Jumani", reg: "25BCE0673", dept: "Computer Science" },
  { name: "Pranav Sharma", reg: "25BCE0412", dept: "Computer Science" },
  { name: "Vijay Kumar", reg: "25BCE0889", dept: "Computer Science" },
];

export default function App() {
  const [activeFrame, setActiveFrame] = useState<1 | 2>(1);
  const [issuedReg, setIssuedReg] = useState<string>("");

  function handleIssue(reg: string) {
    setIssuedReg(reg);
    setActiveFrame(2);
  }

  return (
    <div className="min-h-screen bg-[#f5f5f3] flex flex-col">
      {/* Frame switcher */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center gap-2 py-2 bg-[#0f2744]/90 backdrop-blur-sm">
        <button
          onClick={() => setActiveFrame(1)}
          style={{
            background: activeFrame === 1 ? "#00c896" : "transparent",
            color: "#ffffff",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: 4,
            padding: "4px 18px",
            fontSize: 12,
            fontFamily: "'Inter', sans-serif",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          Frame 1 — Roster Dashboard
        </button>
        <button
          onClick={() => setActiveFrame(2)}
          style={{
            background: activeFrame === 2 ? "#00c896" : "transparent",
            color: "#ffffff",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: 4,
            padding: "4px 18px",
            fontSize: 12,
            fontFamily: "'Inter', sans-serif",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          Frame 2 — Success Modal
        </button>
      </div>

      {/* Frames */}
      <div className="mt-10 flex-1">
        {/* Frame 1 */}
        <div
          style={{
            width: 1440,
            height: 1024,
            display: activeFrame === 1 ? "flex" : "none",
            flexDirection: "row",
            margin: "0 auto",
            background: "#f5f5f3",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Sidebar />
          <MainContent onIssue={handleIssue} />
        </div>

        {/* Frame 2 */}
        <div
          style={{
            width: 1440,
            height: 1024,
            display: activeFrame === 2 ? "flex" : "none",
            flexDirection: "row",
            margin: "0 auto",
            background: "#f5f5f3",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Sidebar />
          <MainContent onIssue={handleIssue} />
          {/* Dark overlay */}
          <div
            className="modal-overlay"
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.55)",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SuccessModal
              reg={issuedReg || "25BCE0673"}
              onClose={() => setActiveFrame(1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div
      style={{
        width: 240,
        minWidth: 240,
        height: "100%",
        background: "#0f2744",
        display: "flex",
        flexDirection: "column",
        padding: "0 0 24px 0",
      }}
    >
      {/* Logo area */}
      <div
        style={{
          padding: "32px 24px 28px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              background: "#00c896",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ShieldIcon size={18} color="#0f2744" />
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 700,
                fontSize: 14,
                color: "#ffffff",
                letterSpacing: "0.01em",
                lineHeight: 1.2,
              }}
            >
              VIT Authenticator
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 10,
                color: "rgba(255,255,255,0.45)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginTop: 1,
              }}
            >
              Registrar System
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, padding: "20px 12px" }}>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 10,
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "0 12px",
            marginBottom: 8,
          }}
        >
          Navigation
        </div>
        {NAV_LINKS.map(({ label, icon: Icon, active }) => (
          <div
            key={label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 12px",
              borderRadius: 6,
              background: active ? "rgba(0,200,150,0.12)" : "transparent",
              borderLeft: active ? "2px solid #00c896" : "2px solid transparent",
              cursor: "pointer",
              marginBottom: 2,
              transition: "all 0.15s",
            }}
          >
            <Icon
              size={16}
              color={active ? "#00c896" : "rgba(255,255,255,0.45)"}
            />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                fontWeight: active ? 600 : 400,
                color: active ? "#ffffff" : "rgba(255,255,255,0.55)",
                letterSpacing: "0.01em",
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </nav>

      {/* Bottom status */}
      <div
        style={{
          margin: "0 12px",
          padding: "12px",
          background: "rgba(255,255,255,0.04)",
          borderRadius: 6,
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 10,
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: 6,
          }}
        >
          System
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#00c896",
            }}
          />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              color: "rgba(255,255,255,0.5)",
            }}
          >
            All systems operational
          </span>
        </div>
      </div>
    </div>
  );
}

function MainContent({ onIssue }: { onIssue: (reg: string) => void }) {
  const students = STUDENTS;

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        background: "#f5f5f3",
        overflow: "hidden",
      }}
    >
      {/* Top Header */}
      <header
        style={{
          height: 64,
          background: "#ffffff",
          borderBottom: "1px solid #d8d8d3",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
          flexShrink: 0,
        }}
      >
        <div>
          <span
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontWeight: 600,
              fontSize: 15,
              color: "#0d0d0d",
              letterSpacing: "0.01em",
            }}
          >
            VIT Registrar Admin
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              color: "#6b6b65",
            }}
          >
            Academic Year 2024–25
          </div>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "#0f2744",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 700,
                fontSize: 13,
                color: "#ffffff",
              }}
            >
              RO
            </span>
          </div>
        </div>
      </header>

      {/* Page content */}
      <div style={{ flex: 1, padding: "28px 32px", overflow: "auto" }}>
        {/* Page title + crypto status */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 700,
                fontSize: 22,
                color: "#0d0d0d",
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              Student Directory
            </h1>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                color: "#6b6b65",
                margin: "4px 0 0",
              }}
            >
              Manage student records and issue verifiable credentials
            </p>
          </div>

          {/* Cryptographic Node Status */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#ffffff",
              border: "1px solid #d8d8d3",
              borderRadius: 6,
              padding: "8px 14px",
            }}
          >
            <div
              className="pulse-dot"
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#00c896",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                fontWeight: 500,
                color: "#0d0d0d",
                whiteSpace: "nowrap",
              }}
            >
              Ed25519 Signing Key:{" "}
              <span style={{ color: "#00c896", fontWeight: 600 }}>ONLINE</span>
            </span>
          </div>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
            marginBottom: 24,
          }}
        >
          {[
            { label: "Total Students", value: "3,847", delta: "+12 this week" },
            { label: "Credentials Issued", value: "1,204", delta: "+38 this month" },
            { label: "Pending Verification", value: "7", delta: "Requires action" },
          ].map(({ label, value, delta }) => (
            <div
              key={label}
              style={{
                background: "#ffffff",
                border: "1px solid #d8d8d3",
                borderRadius: 6,
                padding: "16px 20px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  color: "#6b6b65",
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  marginBottom: 6,
                }}
              >
                {label}
              </div>
              <div
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 26,
                  color: "#0d0d0d",
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  color: "#00c896",
                }}
              >
                {delta}
              </div>
            </div>
          ))}
        </div>

        {/* Roster table card */}
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #d8d8d3",
            borderRadius: 6,
            overflow: "hidden",
          }}
        >
          {/* Table header bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 24px",
              borderBottom: "1px solid #d8d8d3",
            }}
          >
            <span
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 600,
                fontSize: 14,
                color: "#0d0d0d",
              }}
            >
              Student Roster — B.Tech CSE 2025
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  color: "#6b6b65",
                  background: "#f5f5f3",
                  border: "1px solid #d8d8d3",
                  borderRadius: 4,
                  padding: "6px 12px",
                  cursor: "pointer",
                }}
              >
                Filter
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  color: "#6b6b65",
                  background: "#f5f5f3",
                  border: "1px solid #d8d8d3",
                  borderRadius: 4,
                  padding: "6px 12px",
                  cursor: "pointer",
                }}
              >
                Export CSV
              </div>
            </div>
          </div>

          {/* Table */}
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#f5f5f3" }}>
                {["Student Name", "Registration Number", "Department", "Action"].map(
                  (col, i) => (
                    <th
                      key={col}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 11,
                        fontWeight: 600,
                        color: "#6b6b65",
                        textTransform: "uppercase",
                        letterSpacing: "0.07em",
                        textAlign: i === 3 ? "right" : "left",
                        padding: "11px 24px",
                        borderBottom: "1px solid #d8d8d3",
                      }}
                    >
                      {col}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {students.map((s, idx) => (
                <tr
                  key={s.reg}
                  style={{
                    borderBottom:
                      idx < students.length - 1 ? "1px solid #d8d8d3" : "none",
                    transition: "background 0.1s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = "#fafaf8")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = "transparent")
                  }
                >
                  <td style={{ padding: "16px 24px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: "50%",
                          background: "#0f2744",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Instrument Sans', sans-serif",
                            fontWeight: 600,
                            fontSize: 11,
                            color: "#ffffff",
                          }}
                        >
                          {s.name
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 14,
                          fontWeight: 500,
                          color: "#0d0d0d",
                        }}
                      >
                        {s.name}
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: "16px 24px" }}>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 13,
                        color: "#0d0d0d",
                        background: "#f5f5f3",
                        border: "1px solid #d8d8d3",
                        borderRadius: 4,
                        padding: "3px 8px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {s.reg}
                    </span>
                  </td>
                  <td style={{ padding: "16px 24px" }}>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 13,
                        color: "#6b6b65",
                      }}
                    >
                      {s.dept}
                    </span>
                  </td>
                  <td style={{ padding: "16px 24px", textAlign: "right" }}>
                    <button
                      onClick={() => onIssue(s.reg)}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#ffffff",
                        background: "#0f2744",
                        border: "none",
                        borderRadius: 4,
                        padding: "8px 16px",
                        cursor: "pointer",
                        letterSpacing: "0.02em",
                        transition: "opacity 0.15s",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.opacity = "0.85")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.opacity = "1")
                      }
                    >
                      <KeyIcon size={12} color="#ffffff" />
                      Issue ProofPass
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Table footer */}
          <div
            style={{
              padding: "12px 24px",
              borderTop: "1px solid #d8d8d3",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                color: "#6b6b65",
              }}
            >
              Showing 3 of 3,847 records
            </span>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                color: "#6b6b65",
              }}
            >
              Page 1 of 1,283
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SuccessModal({ reg, onClose }: { reg: string; onClose: () => void }) {
  return (
    <div
      className="modal-card"
      style={{
        background: "#ffffff",
        border: "1px solid #d8d8d3",
        borderRadius: 6,
        padding: "48px 56px",
        width: 480,
        textAlign: "center",
        position: "relative",
        boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
      }}
    >
      {/* Security badge top */}
      <div
        style={{
          position: "absolute",
          top: -1,
          left: "50%",
          transform: "translateX(-50%)",
          background: "#0f2744",
          borderRadius: "0 0 6px 6px",
          padding: "4px 16px",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <LockIcon size={10} color="rgba(255,255,255,0.6)" />
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 10,
            color: "rgba(255,255,255,0.6)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Secure Issuance Protocol
        </span>
      </div>

      {/* Check icon */}
      <div
        style={{
          width: 72,
          height: 72,
          borderRadius: "50%",
          background: "rgba(0, 200, 150, 0.1)",
          border: "2px solid #00c896",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "24px auto 24px",
        }}
      >
        <CheckIcon size={34} color="#00c896" />
      </div>

      {/* Heading */}
      <h2
        style={{
          fontFamily: "'Instrument Sans', sans-serif",
          fontWeight: 700,
          fontSize: 22,
          color: "#0d0d0d",
          margin: "0 0 8px",
          letterSpacing: "-0.01em",
        }}
      >
        Credential Issued Successfully
      </h2>

      {/* Recipient */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 14,
          fontWeight: 500,
          color: "#0d0d0d",
          margin: "0 0 20px",
        }}
      >
        Recipient:{" "}
        <span
          style={{
            background: "#f5f5f3",
            border: "1px solid #d8d8d3",
            borderRadius: 4,
            padding: "2px 8px",
            fontWeight: 600,
            letterSpacing: "0.04em",
          }}
        >
          {reg}
        </span>
      </p>

      {/* Signature details */}
      <div
        style={{
          background: "#f5f5f3",
          border: "1px solid #d8d8d3",
          borderRadius: 6,
          padding: "16px 20px",
          marginBottom: 28,
          textAlign: "left",
        }}
      >
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 10,
            color: "#6b6b65",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: 10,
          }}
        >
          Credential Metadata
        </div>
        {[
          ["Cryptographic Signature", "Ed25519 (Private Key Match)"],
          ["Payload", "Student = TRUE"],
          ["Valid Until", "May 2029"],
        ].map(([key, val]) => (
          <div
            key={key}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 6,
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                color: "#6b6b65",
              }}
            >
              {key}
            </span>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                fontWeight: 500,
                color: "#0d0d0d",
              }}
            >
              {val}
            </span>
          </div>
        ))}
      </div>

      {/* Action button */}
      <button
        onClick={onClose}
        style={{
          width: "100%",
          fontFamily: "'Inter', sans-serif",
          fontSize: 14,
          fontWeight: 600,
          color: "#ffffff",
          background: "#0f2744",
          border: "none",
          borderRadius: 4,
          padding: "13px 24px",
          cursor: "pointer",
          letterSpacing: "0.01em",
          transition: "opacity 0.15s",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.opacity = "0.85")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.opacity = "1")
        }
      >
        Close &amp; Return to Roster
      </button>
    </div>
  );
}

/* ── Inline SVG icons ── */

function GridIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="1" y="1" width="6" height="6" rx="1" stroke={color} strokeWidth="1.5" />
      <rect x="9" y="1" width="6" height="6" rx="1" stroke={color} strokeWidth="1.5" />
      <rect x="1" y="9" width="6" height="6" rx="1" stroke={color} strokeWidth="1.5" />
      <rect x="9" y="9" width="6" height="6" rx="1" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

function UsersIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="6" cy="5" r="2.5" stroke={color} strokeWidth="1.5" />
      <path d="M1 13c0-2.761 2.239-5 5-5s5 2.239 5 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 7c1.381 0 2.5 1.119 2.5 2.5S12.381 12 11 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 13c0-1.657-.895-3.122-2.236-3.898" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BadgeIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M8 1l1.5 2.5H13l-2.5 2 1 3L8 7 4.5 8.5l1-3L3 3.5h3.5L8 1z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M4 10l-2 5 6-2 6 2-2-5" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function LogIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="2" y="1" width="12" height="14" rx="1.5" stroke={color} strokeWidth="1.5" />
      <path d="M5 5h6M5 8h6M5 11h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SettingsIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="2.5" stroke={color} strokeWidth="1.5" />
      <path
        d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.05 3.05l1.06 1.06M11.89 11.89l1.06 1.06M3.05 12.95l1.06-1.06M11.89 4.11l1.06-1.06"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M8 1L2 3.5v4.5c0 3.5 2.5 6 6 7 3.5-1 6-3.5 6-7V3.5L8 1z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" fill={color} fillOpacity={0.15} />
      <path d="M5 8l2 2 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon({ size = 24, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 12l5 5L20 7" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function KeyIcon({ size = 14, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <circle cx="5" cy="5" r="3" stroke={color} strokeWidth="1.5" />
      <path d="M7.5 7.5L12 12M9.5 9.5l1.5-1.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function LockIcon({ size = 14, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <rect x="2" y="6" width="10" height="7" rx="1.5" stroke={color} strokeWidth="1.4" />
      <path d="M4.5 6V4a2.5 2.5 0 015 0v2" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
