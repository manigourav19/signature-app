from fastapi import FastAPI
from routers import auth, documents

app = FastAPI(title="Signature App")

# Include routers
app.include_router(auth.router, prefix="/api/auth")
app.include_router(documents.router, prefix="/api/docs")

# ROOT ROUTE
@app.get("/")
def home():
    return {"message": "Signature App Running"}