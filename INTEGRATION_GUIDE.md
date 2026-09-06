# ProofPass Frontend-Backend Integration Guide

This guide provides step-by-step instructions to integrate your React frontend with the FastAPI backend.

## 📁 File Structure

After completing this integration, your project structure should look like:

```
ProofPass/
├── demo/
│   ├── backend/
│   │   ├── main.py
│   │   ├── cors_config.py (NEW)
│   │   ├── requirements.txt
│   │   └── ... (other backend files)
│   └── frontend/ (if exists)
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── client.js (NEW)
│   │   ├── hooks/
│   │   │   └── useProofPass.js (NEW)
│   │   ├── components/
│   │   │   └── ProofPassExample.jsx (NEW)
│   │   ├── App.js
│   │   └── ... (other component files)
│   ├── .env.example (NEW)
│   ├── package.json
│   └── ... (other frontend files)
└── ... (root files)
```

## 🚀 Step-by-Step Integration

### Step 1: Update Backend with CORS Configuration

**Location:** `demo/backend/main.py`

The CORS configuration has been added as a separate file for clarity. You need to integrate it into your existing `main.py`:

```python
# At the top of main.py, add:
from fastapi.middleware.cors import CORSMiddleware

# After creating the FastAPI app (after line 16):
app = FastAPI(title="ProofPass API")
Base.metadata.create_all(bind=engine)

# ADD THIS SECTION:
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",      # Local React development
        "http://127.0.0.1:3000",      # Alternative local address
        "http://localhost:5173",      # Vite development server
        # Add your production domain here:
        # "https://yourdomain.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)
```

### Step 2: Copy Frontend API Client

**Source:** `frontend/src/api/client.js`

1. Create the directory if it doesn't exist:
   ```bash
   mkdir -p frontend/src/api
   ```

2. Copy the `client.js` file to this directory

3. This file contains all API calls for communicating with your backend

### Step 3: Add Environment Configuration

**Source:** `frontend/.env.example`

1. Copy the `.env.example` file to `.env.local` in your frontend directory:
   ```bash
   cp frontend/.env.example frontend/.env.local
   ```

2. Update the API URL if needed (default is `http://localhost:8000` for local development)

### Step 4: Add Custom React Hook (Optional but Recommended)

**Source:** `frontend/src/hooks/useProofPass.js`

1. Create the hooks directory if it doesn't exist:
   ```bash
   mkdir -p frontend/src/hooks
   ```

2. Copy the `useProofPass.js` file to this directory

3. This hook simplifies API calls in your React components

### Step 5: Add Example Component (Optional for Reference)

**Source:** `frontend/src/components/ProofPassExample.jsx`

1. Create the components directory if it doesn't exist:
   ```bash
   mkdir -p frontend/src/components
   ```

2. Copy the `ProofPassExample.jsx` file to this directory

3. This shows how to use the API client and custom hook

## ⚙️ Running the Integration

### Terminal 1: Start Backend

```bash
cd demo/backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

You should see:
```
INFO:     Uvicorn running on http://127.0.0.1:8000
```

### Terminal 2: Start Frontend

```bash
cd frontend
npm install  # Only needed first time
npm start
```

Your React app will open at `http://localhost:3000`

## 🧪 Testing the Integration

### Test 1: Check Backend Connection

```javascript
import { testBackendConnection } from './api/client';

// In your component:
const result = await testBackendConnection();
console.log(result); // Should show: { message: "ProofPass backend is running!" }
```

### Test 2: Using the Custom Hook

```javascript
import { useProofPass } from './hooks/useProofPass';

function MyComponent() {
  const { loading, error, data, testBackendConnection } = useProofPass();
  
  const handleTest = async () => {
    try {
      await testBackendConnection();
      console.log('Backend connected!');
    } catch (err) {
      console.error('Connection failed:', err);
    }
  };
  
  return <button onClick={handleTest}>Test Connection</button>;
}
```

### Test 3: Using the Example Component

```javascript
// In your App.js or main component:
import ProofPassExample from './components/ProofPassExample';

function App() {
  return (
    <div>
      <ProofPassExample />
    </div>
  );
}
```

## 📝 API Endpoints Summary

All endpoints are now accessible from your frontend:

- `GET /` - Test connection
- `POST /credential` - Create credential
- `GET /credentials/{student_id}` - Get credentials
- `POST /proof-request` - Create proof request
- `POST /proof` - Generate proof
- `POST /verify-proof` - Verify proof
- `POST /revoke/{credential_id}` - Revoke credential
- `POST /verify` - Verify credential
- `GET /test-crypto` - Test cryptography
- `GET /debug-issuer` - Debug issuer info

## 🔍 Troubleshooting

### CORS Error: "Access to XMLHttpRequest blocked by CORS"

**Solution:** Ensure CORS middleware is added to your FastAPI app and your frontend URL is in the `allow_origins` list.

### Connection Refused Error

**Solution:** Make sure:
1. Backend is running on `http://localhost:8000`
2. Frontend is running on `http://localhost:3000`
3. No firewall is blocking the ports

### Environment Variable Not Being Read

**Solution:**
1. Restart your React development server after changing `.env.local`
2. Use `REACT_APP_` prefix for all environment variables
3. Check that `.env.local` is in the `frontend/` directory (not `frontend/src/`)

### API Endpoint 404 Error

**Solution:** Verify:
1. The endpoint path matches exactly (case-sensitive)
2. The HTTP method is correct (GET, POST, etc.)
3. All required parameters are provided

## 📦 Production Deployment

When deploying to production:

1. **Update Backend URL:**
   ```bash
   # In frontend/.env.local (or create .env.production.local)
   REACT_APP_API_URL=https://your-api-domain.com
   ```

2. **Update CORS Origins in Backend:**
   ```python
   app.add_middleware(
       CORSMiddleware,
       allow_origins=[
           "https://your-frontend-domain.com",
           "https://www.your-frontend-domain.com",
       ],
       # ... rest of config
   )
   ```

3. **Build Frontend:**
   ```bash
   npm run build
   ```

## 📚 Additional Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [React Documentation](https://react.dev/)
- [CORS Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [ProofPass README](./README.md)

## ✅ Checklist

- [ ] CORS middleware added to `main.py`
- [ ] `client.js` copied to `frontend/src/api/`
- [ ] `.env.example` copied to `frontend/.env.local`
- [ ] Backend running on `http://localhost:8000`
- [ ] Frontend running on `http://localhost:3000`
- [ ] Test connection successful
- [ ] API calls working in components

---

**Need help?** Check the example component (`ProofPassExample.jsx`) for reference implementations.
