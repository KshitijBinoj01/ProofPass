# ProofPass Frontend

This is the React frontend for the ProofPass privacy-preserving credential verification system.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env.local` file from `.env.example`:
   ```bash
   cp .env.example .env.local
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The app will open at `http://localhost:3000`

## Structure

```
src/
├── api/
│   └── client.js          # API calls to backend
├── hooks/
│   └── useProofPass.js    # Custom React hook
├── components/
│   └── ProofPassExample.jsx # Example component
├── App.js                 # Main app component
├── App.css               # App styles
├── index.js              # Entry point
└── index.css             # Global styles
```

## Environment Variables

Create a `.env.local` file:

```
REACT_APP_API_URL=http://localhost:8000
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite

## API Integration

The frontend communicates with the FastAPI backend using the `client.js` module. All API endpoints are mapped as functions.

See `INTEGRATION_GUIDE.md` in the root directory for detailed setup instructions.
