export interface InputData {
  Temparature: number;
  Humidity: number;
  Moisture: number;
  Soil_Type: string;
  Crop_Type: string;
  Nitrogen: number;
  Potassium: number;
  Phosphorous: number;
}

export interface PredictionResponse {
  recommendations: string[];
}