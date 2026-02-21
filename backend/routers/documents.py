from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def docs():
    return {"message": "Documents API Working"}