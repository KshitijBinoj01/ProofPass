/**
 * Example React Component using ProofPass API
 * Place this file at: frontend/src/components/ProofPassExample.jsx
 * 
 * This is a sample component showing how to use the ProofPass API client
 */

import React, { useState, useEffect } from "react";
import { useProofPass } from "../hooks/useProofPass";

const ProofPassExample = () => {
  const proofPass = useProofPass();
  const [studentId, setStudentId] = useState("");
  const [credentialData, setCredentialData] = useState({
    name: "",
    student_id: "",
    is_student: true,
    issuer: "University",
  });
  const [connectionStatus, setConnectionStatus] = useState("checking");

  // Check backend connection on component mount
  useEffect(() => {
    const checkConnection = async () => {
      try {
        await proofPass.testBackendConnection();
        setConnectionStatus("connected");
      } catch (err) {
        setConnectionStatus("failed");
      }
    };
    checkConnection();
  }, []);

  const handleCreateCredential = async (e) => {
    e.preventDefault();
    try {
      const result = await proofPass.createCredential(credentialData);
      alert("Credential created: " + result.credential_id);
      setCredentialData({
        name: "",
        student_id: "",
        is_student: true,
        issuer: "University",
      });
    } catch (err) {
      alert("Error creating credential: " + err.message);
    }
  };

  const handleGetCredentials = async (e) => {
    e.preventDefault();
    if (!studentId.trim()) {
      alert("Please enter a student ID");
      return;
    }
    try {
      const result = await proofPass.getCredentials(studentId);
      console.log("Credentials:", result);
      alert("Found " + result.credentials.length + " credential(s)");
    } catch (err) {
      alert("Error fetching credentials: " + err.message);
    }
  };

  const handleCreateProofRequest = async () => {
    try {
      const result = await proofPass.createProofRequest();
      alert("Proof request created: " + result.request_id);
    } catch (err) {
      alert("Error creating proof request: " + err.message);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>ProofPass Demo</h1>

      {/* Connection Status */}
      <div
        style={{
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "4px",
          backgroundColor:
            connectionStatus === "connected"
              ? "#d4edda"
              : connectionStatus === "failed"
              ? "#f8d7da"
              : "#e2e3e5",
        }}
      >
        <strong>
          Backend Status:{" "}
          {connectionStatus === "checking"
            ? "Checking..."
            : connectionStatus === "connected"
            ? "✓ Connected"
            : "✗ Connection Failed"}
        </strong>
      </div>

      {/* Create Credential Form */}
      <section style={{ marginBottom: "30px" }}>
        <h2>1. Issue Credential</h2>
        <form onSubmit={handleCreateCredential}>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Name:
              <input
                type="text"
                value={credentialData.name}
                onChange={(e) =>
                  setCredentialData({
                    ...credentialData,
                    name: e.target.value,
                  })
                }
                required
                style={{ marginLeft: "10px", padding: "5px" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Student ID:
              <input
                type="text"
                value={credentialData.student_id}
                onChange={(e) =>
                  setCredentialData({
                    ...credentialData,
                    student_id: e.target.value,
                  })
                }
                required
                style={{ marginLeft: "10px", padding: "5px" }}
              />
            </label>
          </div>
          <button
            type="submit"
            disabled={proofPass.loading}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: proofPass.loading ? "not-allowed" : "pointer",
            }}
          >
            {proofPass.loading ? "Creating..." : "Create Credential"}
          </button>
        </form>
      </section>

      {/* Get Credentials Form */}
      <section style={{ marginBottom: "30px" }}>
        <h2>2. Retrieve Credentials</h2>
        <form onSubmit={handleGetCredentials}>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Student ID:
              <input
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                required
                style={{ marginLeft: "10px", padding: "5px" }}
              />
            </label>
          </div>
          <button
            type="submit"
            disabled={proofPass.loading}
            style={{
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: proofPass.loading ? "not-allowed" : "pointer",
            }}
          >
            {proofPass.loading ? "Loading..." : "Get Credentials"}
          </button>
        </form>
      </section>

      {/* Create Proof Request */}
      <section style={{ marginBottom: "30px" }}>
        <h2>3. Create Proof Request</h2>
        <button
          onClick={handleCreateProofRequest}
          disabled={proofPass.loading}
          style={{
            padding: "10px 20px",
            backgroundColor: "#fd7e14",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: proofPass.loading ? "not-allowed" : "pointer",
          }}
        >
          {proofPass.loading ? "Creating..." : "Create Proof Request"}
        </button>
      </section>

      {/* Error Display */}
      {proofPass.error && (
        <div
          style={{
            padding: "10px",
            backgroundColor: "#f8d7da",
            borderRadius: "4px",
            color: "#721c24",
            marginTop: "20px",
          }}
        >
          <strong>Error:</strong> {proofPass.error}
        </div>
      )}
    </div>
  );
};

export default ProofPassExample;
