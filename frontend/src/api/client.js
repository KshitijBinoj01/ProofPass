/**
 * ProofPass API Client
 * Place this file at: frontend/src/api/client.js
 * 
 * This module provides all API calls for communicating with the FastAPI backend.
 * Configure the API_BASE_URL to match your backend server.
 */

// Change this to your backend URL
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

/**
 * Helper function to handle API errors
 */
const handleError = (error) => {
  console.error("API Error:", error);
  throw error;
};

/**
 * Test the backend connection
 */
export const testBackendConnection = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Create a new credential
 * POST /credential
 */
export const createCredential = async (credentialData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/credential`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentialData),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Get credentials for a specific student
 * GET /credentials/{student_id}
 */
export const getCredentials = async (studentId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/credentials/${studentId}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Create a proof request
 * POST /proof-request
 */
export const createProofRequest = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/proof-request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Generate proof for a proof request
 * POST /proof
 */
export const generateProof = async (studentId, requestId) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/proof?student_id=${studentId}&request_id=${requestId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Verify a proof
 * POST /verify-proof
 */
export const verifyProof = async (proofData) => {
  try {
    const params = new URLSearchParams();
    params.append("is_student", proofData.is_student);
    params.append("issuer", proofData.issuer);
    params.append("claim_signature", proofData.claim_signature);
    params.append("request_id", proofData.request_id);
    params.append("credential_id", proofData.credential_id);

    const response = await fetch(`${API_BASE_URL}/verify-proof?${params}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Revoke a credential
 * POST /revoke/{credential_id}
 */
export const revokeCredential = async (credentialId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/revoke/${credentialId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Verify credential authenticity
 * POST /verify
 */
export const verifyCredential = async (credentialData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentialData),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Test cryptographic functions
 * GET /test-crypto
 */
export const testCrypto = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/test-crypto`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Debug issuer information
 * GET /debug-issuer
 */
export const debugIssuer = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/debug-issuer`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    return handleError(error);
  }
};
