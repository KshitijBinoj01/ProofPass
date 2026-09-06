import { useState } from "react";

type Screen = "dashboard" | "scanner" | "privacy-gate";

export default function App() {
  const [screen, setScreen] = useState<Screen>("dashboard");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div
      className="size-full flex items-center justify-center"
      style={{ background: "#111", fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      {/* Phone Frame */}
      <div
        style={{
          width: 390,
          height: 844,
          background: "#000",
          borderRadius: 54,
          overflow: "hidden",
          position: "relative",
          boxShadow:
            "0 0 0 1px #2a2a2a, 0 0 0 8px #1a1a1a, 0 40px 120px rgba(0,0,0,0.8), 0 0 80px rgba(10,132,255,0.08)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Dynamic Island */}
        <div
          style={{
            position: "absolute",
            top: 14,
            left: "50%",
            transform: "translateX(-50%)",
            width: 126,
            height: 37,
            background: "#000",
            borderRadius: 20,
            zIndex: 50,
            boxShadow: "0 0 0 1px #1a1a1a",
          }}
        />

        {screen === "dashboard" && (
          <DashboardScreen onScan={() => setScreen("scanner")} />
        )}
        {screen === "scanner" && (
          <ScannerScreen
            onCancel={() => setScreen("dashboard")}
            onDetect={() => {
              setModalVisible(true);
              setScreen("privacy-gate");
            }}
          />
        )}
        {screen === "privacy-gate" && (
          <PrivacyGateScreen
            modalVisible={modalVisible}
            onApprove={() => {
              setModalVisible(false);
              setScreen("dashboard");
            }}
          />
        )}
      </div>
    </div>
  );
}

/* ─── Screen 1: Dashboard ─── */
function DashboardScreen({ onScan }: { onScan: () => void }) {
  return (
    <div
      style={{
        flex: 1,
        background: "#000",
        display: "flex",
        flexDirection: "column",
        paddingTop: 68,
        paddingBottom: 34,
      }}
    >
      {/* Status bar time */}
      <div
        style={{
          position: "absolute",
          top: 16,
          left: 32,
          color: "#fff",
          fontSize: 15,
          fontWeight: 600,
          letterSpacing: -0.3,
          zIndex: 10,
        }}
      >
        9:41
      </div>

      {/* Header */}
      <div style={{ paddingHorizontal: 24, padding: "0 24px 28px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p
              style={{
                color: "#888",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: 0.4,
                textTransform: "uppercase",
                marginBottom: 4,
              }}
            >
              ProofPass
            </p>
            <h1
              style={{
                color: "#fff",
                fontSize: 28,
                fontWeight: 700,
                letterSpacing: -0.8,
                lineHeight: 1.1,
              }}
            >
              My Wallet
            </h1>
          </div>
          {/* Avatar */}
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #0A84FF 0%, #5E5CE6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            V
          </div>
        </div>
      </div>

      {/* Credentials label */}
      <div
        style={{
          padding: "0 24px 14px",
          color: "#555",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: 0.8,
          textTransform: "uppercase",
        }}
      >
        Credentials · 1
      </div>

      {/* Student ID Card */}
      <div style={{ padding: "0 20px", flex: 1 }}>
        <div
          style={{
            background: "linear-gradient(145deg, #1a1a1a 0%, #141414 60%, #111 100%)",
            borderRadius: 24,
            padding: "28px 26px",
            border: "1px solid #2a2a2a",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {/* Subtle glow accent */}
          <div
            style={{
              position: "absolute",
              top: -60,
              right: -40,
              width: 200,
              height: 200,
              background: "radial-gradient(circle, rgba(10,132,255,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -40,
              left: -20,
              width: 160,
              height: 160,
              background: "radial-gradient(circle, rgba(94,92,230,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Card header row */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              marginBottom: 32,
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  marginBottom: 6,
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: "linear-gradient(135deg, #0A84FF, #5E5CE6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                  }}
                >
                  🎓
                </div>
                <span
                  style={{
                    color: "#888",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: 0.6,
                    textTransform: "uppercase",
                  }}
                >
                  Student ID
                </span>
              </div>
            </div>

            {/* Verified badge */}
            <div
              style={{
                background: "rgba(52, 199, 89, 0.14)",
                border: "1px solid rgba(52, 199, 89, 0.3)",
                borderRadius: 100,
                padding: "5px 11px",
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <span style={{ fontSize: 11 }}>✅</span>
              <span
                style={{
                  color: "#34C759",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: 0.2,
                }}
              >
                Verified
              </span>
            </div>
          </div>

          {/* Photo + Name block */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                background: "linear-gradient(135deg, #0A84FF 0%, #5E5CE6 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
                fontWeight: 800,
                color: "#fff",
                flexShrink: 0,
                boxShadow: "0 8px 24px rgba(10,132,255,0.3)",
              }}
            >
              VR
            </div>
            <div>
              <p
                style={{
                  color: "#fff",
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: -0.5,
                  lineHeight: 1.2,
                  marginBottom: 4,
                }}
              >
                Vijay Rohra
              </p>
              <p
                style={{
                  color: "#888",
                  fontSize: 13,
                  fontWeight: 400,
                  letterSpacing: 0.1,
                }}
              >
                Student
              </p>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              height: 1,
              background: "linear-gradient(90deg, transparent, #2a2a2a 20%, #2a2a2a 80%, transparent)",
              marginBottom: 22,
            }}
          />

          {/* Details grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 12px" }}>
            <div>
              <p
                style={{
                  color: "#555",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 0.7,
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                University
              </p>
              <p
                style={{
                  color: "#ddd",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: -0.1,
                }}
              >
                VIT Vellore
              </p>
            </div>
            <div>
              <p
                style={{
                  color: "#555",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 0.7,
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                Program
              </p>
              <p
                style={{
                  color: "#ddd",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: -0.1,
                }}
              >
                CSE (Data Science)
              </p>
            </div>
            <div>
              <p
                style={{
                  color: "#555",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 0.7,
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                Year
              </p>
              <p
                style={{
                  color: "#ddd",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                3rd Year
              </p>
            </div>
            <div>
              <p
                style={{
                  color: "#555",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 0.7,
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                Valid Until
              </p>
              <p
                style={{
                  color: "#ddd",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                May 2027
              </p>
            </div>
          </div>

          {/* Card footer stripe */}
          <div
            style={{
              marginTop: 24,
              height: 4,
              borderRadius: 2,
              background: "linear-gradient(90deg, #0A84FF, #5E5CE6)",
              opacity: 0.6,
            }}
          />
        </div>

        {/* Quick actions row */}
        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 18,
          }}
        >
          {["Share", "Details", "History"].map((label) => (
            <button
              key={label}
              style={{
                flex: 1,
                background: "#1a1a1a",
                border: "1px solid #2a2a2a",
                borderRadius: 14,
                padding: "12px 0",
                color: "#aaa",
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Scan Button */}
      <div style={{ padding: "20px 24px 0" }}>
        <button
          onClick={onScan}
          style={{
            width: "100%",
            background: "#0A84FF",
            border: "none",
            borderRadius: 100,
            padding: "18px 0",
            color: "#fff",
            fontSize: 17,
            fontWeight: 600,
            letterSpacing: -0.2,
            cursor: "pointer",
            boxShadow: "0 8px 32px rgba(10,132,255,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            transition: "opacity 0.15s",
          }}
          onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.opacity = "0.88")}
          onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.opacity = "1")}
        >
          <span style={{ fontSize: 18 }}>⊡</span>
          Scan QR to Verify
        </button>
      </div>

      {/* Home indicator */}
      <div
        style={{
          width: 134,
          height: 5,
          background: "#333",
          borderRadius: 3,
          margin: "20px auto 0",
        }}
      />
    </div>
  );
}

/* ─── Screen 2: Scanner ─── */
function ScannerScreen({
  onCancel,
  onDetect,
}: {
  onCancel: () => void;
  onDetect: () => void;
}) {
  return (
    <div
      style={{
        flex: 1,
        background: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 80,
        paddingBottom: 50,
        position: "relative",
      }}
    >
      {/* Status bar */}
      <div
        style={{
          position: "absolute",
          top: 16,
          left: 32,
          color: "#fff",
          fontSize: 15,
          fontWeight: 600,
          letterSpacing: -0.3,
        }}
      >
        9:41
      </div>

      {/* Top label */}
      <div style={{ textAlign: "center", padding: "0 32px" }}>
        <p
          style={{
            color: "#888",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: 0.4,
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          Scanner
        </p>
        <p
          style={{
            color: "#fff",
            fontSize: 17,
            fontWeight: 500,
            lineHeight: 1.5,
            letterSpacing: -0.2,
          }}
        >
          Point camera at the{" "}
          <span style={{ color: "#0A84FF", fontWeight: 600 }}>StudentDeals</span> QR
          code
        </p>
      </div>

      {/* Viewfinder */}
      <div style={{ position: "relative" }}>
        {/* Camera feed simulation */}
        <div
          style={{
            width: 260,
            height: 260,
            position: "relative",
          }}
        >
          {/* Dimmed overlay corners */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 160px 160px at 50% 50%, transparent 40%, rgba(0,0,0,0.7) 100%)",
            }}
          />

          {/* Corner brackets */}
          {[
            { top: 0, left: 0, borderTop: "3px solid #fff", borderLeft: "3px solid #fff", borderRadius: "4px 0 0 0" },
            { top: 0, right: 0, borderTop: "3px solid #fff", borderRight: "3px solid #fff", borderRadius: "0 4px 0 0" },
            { bottom: 0, left: 0, borderBottom: "3px solid #fff", borderLeft: "3px solid #fff", borderRadius: "0 0 0 4px" },
            { bottom: 0, right: 0, borderBottom: "3px solid #fff", borderRight: "3px solid #fff", borderRadius: "0 0 4px 0" },
          ].map((style, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: 36,
                height: 36,
                ...style,
              }}
            />
          ))}

          {/* Scan line animation */}
          <div
            style={{
              position: "absolute",
              left: 8,
              right: 8,
              height: 2,
              background: "linear-gradient(90deg, transparent, #0A84FF, #0A84FF, transparent)",
              borderRadius: 1,
              top: "40%",
              opacity: 0.8,
              animation: "scanline 2s ease-in-out infinite",
            }}
          />

          {/* QR placeholder grid */}
          <div
            style={{
              position: "absolute",
              inset: 24,
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gridTemplateRows: "repeat(7, 1fr)",
              gap: 3,
              opacity: 0.15,
            }}
          >
            {Array.from({ length: 49 }).map((_, i) => (
              <div
                key={i}
                style={{
                  background: Math.random() > 0.5 ? "#fff" : "transparent",
                  borderRadius: 1,
                }}
              />
            ))}
          </div>
        </div>

        {/* Tap to simulate detect */}
        <button
          onClick={onDetect}
          style={{
            marginTop: 20,
            background: "transparent",
            border: "1px solid #333",
            borderRadius: 100,
            padding: "10px 22px",
            color: "#555",
            fontSize: 12,
            fontWeight: 500,
            cursor: "pointer",
            letterSpacing: 0.3,
          }}
        >
          Tap to simulate QR detection
        </button>
      </div>

      {/* Bottom controls */}
      <div style={{ width: "100%", padding: "0 24px" }}>
        {/* Flash toggle */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <button
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              background: "#1a1a1a",
              border: "1px solid #2a2a2a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              cursor: "pointer",
            }}
          >
            🔦
          </button>
        </div>

        <button
          onClick={onCancel}
          style={{
            width: "100%",
            background: "#1c1c1e",
            border: "1px solid #2c2c2e",
            borderRadius: 100,
            padding: "17px 0",
            color: "#aaa",
            fontSize: 17,
            fontWeight: 500,
            cursor: "pointer",
            letterSpacing: -0.2,
          }}
        >
          Cancel
        </button>
      </div>

      {/* Home indicator */}
      <div
        style={{
          width: 134,
          height: 5,
          background: "#333",
          borderRadius: 3,
          position: "absolute",
          bottom: 12,
        }}
      />

      <style>{`
        @keyframes scanline {
          0%, 100% { top: 15%; }
          50% { top: 80%; }
        }
      `}</style>
    </div>
  );
}

/* ─── Screen 3: Privacy Gate ─── */
function PrivacyGateScreen({
  modalVisible,
  onApprove,
}: {
  modalVisible: boolean;
  onApprove: () => void;
}) {
  return (
    <div
      style={{
        flex: 1,
        background: "#050505",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Status bar */}
      <div
        style={{
          position: "absolute",
          top: 16,
          left: 32,
          color: "#fff",
          fontSize: 15,
          fontWeight: 600,
          letterSpacing: -0.3,
          zIndex: 5,
        }}
      >
        9:41
      </div>

      {/* Background: blurred viewfinder */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 60,
        }}
      >
        <div
          style={{
            width: 200,
            height: 200,
            border: "2px solid rgba(255,255,255,0.1)",
            borderRadius: 8,
            opacity: 0.4,
          }}
        />
      </div>

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(6px)",
          zIndex: 2,
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          transform: modalVisible ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.4s cubic-bezier(0.32, 0.72, 0, 1)",
        }}
      >
        <div
          style={{
            background: "#1c1c1e",
            borderRadius: "28px 28px 0 0",
            padding: "0 0 40px",
            boxShadow: "0 -20px 60px rgba(0,0,0,0.8)",
          }}
        >
          {/* Pull handle */}
          <div
            style={{
              width: 40,
              height: 5,
              background: "#3a3a3c",
              borderRadius: 3,
              margin: "14px auto 0",
            }}
          />

          {/* Requester info */}
          <div
            style={{
              padding: "22px 24px 0",
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 6,
            }}
          >
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 12,
                background: "linear-gradient(135deg, #FF9F0A 0%, #FF6B00 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                flexShrink: 0,
                boxShadow: "0 4px 16px rgba(255,159,10,0.3)",
              }}
            >
              🛍️
            </div>
            <div>
              <p
                style={{
                  color: "#8e8e93",
                  fontSize: 13,
                  fontWeight: 400,
                  marginBottom: 2,
                }}
              >
                StudentDeals is requesting:
              </p>
              <p
                style={{
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: -0.3,
                }}
              >
                Proof of student status
              </p>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              height: 1,
              background: "#2c2c2e",
              margin: "18px 24px",
            }}
          />

          {/* Sharing section */}
          <div style={{ padding: "0 24px" }}>
            <p
              style={{
                color: "#8e8e93",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: 0.7,
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Will share
            </p>

            <div
              style={{
                background: "rgba(52, 199, 89, 0.1)",
                border: "1px solid rgba(52, 199, 89, 0.2)",
                borderRadius: 14,
                padding: "14px 16px",
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <span style={{ fontSize: 16 }}>✅</span>
              <div>
                <span style={{ color: "#8e8e93", fontSize: 14, fontWeight: 400 }}>
                  Student Status ={" "}
                </span>
                <span
                  style={{
                    color: "#34C759",
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: -0.1,
                  }}
                >
                  Verified
                </span>
              </div>
            </div>

            {/* Private section */}
            <p
              style={{
                color: "#8e8e93",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: 0.7,
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Information kept private
            </p>

            <div
              style={{
                background: "#2c2c2e",
                borderRadius: 14,
                overflow: "hidden",
                border: "1px solid #3a3a3c",
              }}
            >
              {[
                { label: "Name", value: "Vijay Rohra" },
                { label: "Branch", value: "CSE (Data Science)" },
                { label: "Photo", value: "ID Photo" },
              ].map((item, i, arr) => (
                <div key={item.label}>
                  <div
                    style={{
                      padding: "13px 16px",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span style={{ fontSize: 15 }}>❌</span>
                    <div style={{ flex: 1 }}>
                      <span
                        style={{
                          color: "#636366",
                          fontSize: 14,
                          fontWeight: 400,
                        }}
                      >
                        {item.label}:{" "}
                      </span>
                      <span
                        style={{
                          color: "#FF453A",
                          fontSize: 14,
                          fontWeight: 600,
                        }}
                      >
                        {item.value}
                      </span>
                    </div>
                    <div
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: "rgba(255,69,58,0.15)",
                        border: "1px solid rgba(255,69,58,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 10,
                        color: "#FF453A",
                        fontWeight: 700,
                      }}
                    >
                      ✕
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div
                      style={{
                        height: 1,
                        background: "#3a3a3c",
                        marginLeft: 16,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Approve button */}
          <div style={{ padding: "22px 24px 0" }}>
            <button
              onClick={onApprove}
              style={{
                width: "100%",
                background: "#0A84FF",
                border: "none",
                borderRadius: 100,
                padding: "18px 0",
                color: "#fff",
                fontSize: 17,
                fontWeight: 600,
                letterSpacing: -0.2,
                cursor: "pointer",
                boxShadow: "0 8px 32px rgba(10,132,255,0.35)",
              }}
            >
              Approve Request
            </button>

            <button
              onClick={onApprove}
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                padding: "14px 0 0",
                color: "#636366",
                fontSize: 15,
                fontWeight: 500,
                cursor: "pointer",
                letterSpacing: -0.1,
              }}
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
