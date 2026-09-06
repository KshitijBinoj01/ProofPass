"""
CORS Configuration for ProofPass Backend
Add this to your main.py to enable frontend-backend communication
"""

from fastapi.middleware.cors import CORSMiddleware

def add_cors_middleware(app):
    """
    Configure CORS middleware for the FastAPI app.
    This allows requests from your React frontend.
    """
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
        allow_methods=["*"],             # Allow all HTTP methods
        allow_headers=["*"],             # Allow all headers
        expose_headers=["*"],            # Expose all headers to frontend
    )
