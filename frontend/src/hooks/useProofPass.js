/**
 * Custom React Hook for ProofPass API
 * Place this file at: frontend/src/hooks/useProofPass.js
 * 
 * Provides easy-to-use methods for ProofPass operations in React components
 */

import { useState, useCallback } from "react";
import * as api from "../api/client";

export const useProofPass = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const executeAsync = useCallback(
    async (apiFunction, ...args) => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiFunction(...args);
        setData(result);
        return result;
      } catch (err) {
        setError(err.message);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return {
    loading,
    error,
    data,
    // Credential operations
    createCredential: (credentialData) =>
      executeAsync(api.createCredential, credentialData),
    getCredentials: (studentId) =>
      executeAsync(api.getCredentials, studentId),
    revokeCredential: (credentialId) =>
      executeAsync(api.revokeCredential, credentialId),
    verifyCredential: (credentialData) =>
      executeAsync(api.verifyCredential, credentialData),

    // Proof operations
    createProofRequest: () => executeAsync(api.createProofRequest),
    generateProof: (studentId, requestId) =>
      executeAsync(api.generateProof, studentId, requestId),
    verifyProof: (proofData) => executeAsync(api.verifyProof, proofData),

    // Testing
    testBackendConnection: () =>
      executeAsync(api.testBackendConnection),
    testCrypto: () => executeAsync(api.testCrypto),
    debugIssuer: () => executeAsync(api.debugIssuer),
  };
};
