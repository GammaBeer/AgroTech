from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import numpy as np
import pandas as pd
import os
from fastapi.middleware.cors import CORSMiddleware # Assuming you've added this based on previous advice

app = FastAPI()

# Add CORS middleware (if not already there)
origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model and encoders at startup
# IMPORTANT: Adjust these paths
model = joblib.load("app/models/fertilizerRecommender/xgb_fertilizer_model.pkl")
ordinal_encoder = joblib.load("app/models/fertilizerRecommender/ordinal_encoder.pkl")
le = joblib.load("app/models/fertilizerRecommender/label_encoder.pkl")

class InputData(BaseModel):
    Temparature: float
    Humidity: float
    Moisture: float
    Soil_Type: str
    Crop_Type: str
    Nitrogen: float
    Potassium: float
    Phosphorous: float

@app.post("/predict")
def predict_fertilizer(data: InputData):
    try:
        input_dict = {
            'Temparature': data.Temparature,
            'Humidity': data.Humidity,
            'Moisture': data.Moisture,
            'Soil Type': data.Soil_Type,
            'Crop Type': data.Crop_Type,
            'Nitrogen': data.Nitrogen,
            'Potassium': data.Potassium,
            'Phosphorous': data.Phosphorous
        }

        df = pd.DataFrame([input_dict])
        cat_cols = ['Soil Type', 'Crop Type']
        df[cat_cols] = ordinal_encoder.transform(df[cat_cols].astype(str))

        probs = model.predict_proba(df)
        top_3_indices = np.argsort(probs[0])[-3:][::-1]
        top_3_fertilizers = le.inverse_transform(top_3_indices)

        return {"recommendations": list(top_3_fertilizers)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))