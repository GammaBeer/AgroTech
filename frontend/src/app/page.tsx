'use client';

import { useState } from 'react';
import FertilizerForm from '@/components/FertilizerForm';
import RecommendationDisplay from '@/components/RecommendationDisplay';
import { InputData, PredictionResponse } from '@/types/fertilizerType';

export default function Home() {
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: InputData) => {
    setIsLoading(true);
    setError(null);
    setRecommendations([]); // Clear previous recommendations

    try {
      const response = await fetch('http://127.0.0.1:8000/predict', { // **IMPORTANT: Update this URL to your FastAPI backend URL**
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Something went wrong with the prediction.');
      }

      const result: PredictionResponse = await response.json();
      setRecommendations(result.recommendations);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch recommendations. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
        Smart Fertilizer Recommendation System
      </h1>
      <FertilizerForm onSubmit={handleSubmit} isLoading={isLoading} />
      {isLoading && (
        <p className="mt-4 text-green-600 font-medium">Fetching recommendations...</p>
      )}
      {error && (
        <p className="mt-4 text-red-600 font-medium text-center">{error}</p>
      )}
      <RecommendationDisplay recommendations={recommendations} />
    </div>
  );
}