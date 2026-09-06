# ProofPass

## PROVE THE FACT. NOT THE IDENTITY.

ProofPass is a privacy-preserving digital credential verification system that allows users to prove specific facts about themselves without unnecessarily revealing their personal information.

Instead of sharing an entire student ID just to prove that someone is a student, ProofPass allows the user to share only the required claim:

> **Student = True**

while keeping information such as name, student ID, date of birth, and photograph private.

---

## 🚨 The Problem

Today, proving eligibility often means sharing an entire identity document.

For example, a student may need to upload their college ID simply to prove:

**"I am a student."**

This unnecessarily exposes personal information and creates additional copies of sensitive documents across different services.

---

## 💡 Our Solution

ProofPass separates **proving a fact** from **revealing an identity**.

A trusted institution issues a digitally signed credential to the user.

When a website needs verification, it requests only the specific claim it needs.

The user reviews the request and approves it.

The verifier receives a cryptographically verifiable proof instead of the user's complete identity document.

---

## 🔄 How ProofPass Works

```text
        TRUSTED ISSUER
        (University)
              │
              │ Issues signed credential
              ▼
       ┌───────────────┐
       │  ProofPass    │
       │    Wallet     │
       └───────────────┘
              │
              │ User approves
              ▼
       ┌───────────────┐
       │    Verifier   │
       │ (StudentDeals)│
       └───────────────┘
              │
              ▼
       Student = TRUE
       ✓ Verified
       ✗ Personal data not shared
```

---

## 🔐 Privacy & Security

ProofPass is designed around the principle of **minimum necessary disclosure**.

Instead of giving a verifier the user's complete identity document, the system allows the verifier to receive only the claim required for verification.

For example:

**Requested:**
> Student = True

**Not shared:**
- Name
- Student ID
- Date of Birth
- Photograph

The current backend uses:

- **Ed25519 digital signatures** to authenticate credentials
- **Credential expiry validation**
- **Credential revocation**
- **One-time proof requests** to prevent replay
- **Credential binding** to ensure the proof corresponds to the intended credential

---

## 🛠️ Technology Stack

| Component | Technology |
|---|---|
| Backend | Python |
| API Framework | FastAPI |
| Database | SQLite |
| Cryptography | Ed25519 |
| API | REST |
| Frontend | React |
| UI/UX | Figma |

---

## 🚧 Current Progress — Review 1

### Backend

- ✅ Credential issuance
- ✅ Ed25519 credential signing
- ✅ Credential storage
- ✅ Credential retrieval
- ✅ Proof request creation
- ✅ Proof generation
- ✅ Cryptographic proof verification
- ✅ Credential expiry checking
- ✅ Credential revocation
- ✅ Replay protection
- ✅ Exact credential binding

### Frontend & UI/UX

- 🚧 Figma UI/UX prototype in development
- 🚧 ProofPass Wallet interface
- 🚧 Issuer interface
- 🚧 Verifier interface
- 🚧 End-to-end frontend/backend integration

---

## 🎨 UI/UX Prototype

The UI/UX prototype demonstrates the intended ProofPass verification journey:

```text
User Wallet
     ↓
Verification Request
     ↓
Review Requested Claim
     ↓
User Approval
     ↓
Proof Generated
     ↓
Verifier Checks Proof
     ↓
Student Verified ✓
```

**Figma Prototype:**  
*Link will be added after the team consolidates the individual Figma designs.*

---

## 📌 Review 1 Goal

The first review focuses on demonstrating the core concept, user experience, and technical feasibility of ProofPass.

The project combines:

**Privacy-focused UX + Cryptographic Verification + Digital Credentials**

The backend demonstrates the core cryptographic verification workflow, while the UI/UX prototype demonstrates the intended user experience.

Full frontend integration will be developed in subsequent stages.

---

## 🔮 Future Scope

Future versions of ProofPass can include:

- Selective disclosure credentials
- Zero-knowledge proofs
- Mobile ProofPass wallet
- QR-based verification
- Additional credential types such as age, eligibility, and membership
- Integration with real educational institutions
- Distributed credential revocation

---



### ProofPass

Built for **Code2Create**

