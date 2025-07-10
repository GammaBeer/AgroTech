import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import FertilizerForm from '@/components/FertilizerForm';
import RecommendationDisplay from '@/components/RecommendationDisplay';
import { InputData, PredictionResponse } from '../types/fertilizerType';
import Link from 'next/link';


function FertilizerRecommendation() {
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: InputData) => {
    setIsLoading(true);
    setError(null);
    setRecommendations([]);

     const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
     if (!BACKEND_URL) {
      setError("Backend URL is not configured. Check NEXT_PUBLIC_BACKEND_URL in your .env.local file.");
      setIsLoading(false);
      return;
    }
     try {
        const response = await fetch(`${BACKEND_URL}/predict`, {
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
      } 
      catch (err: any) {
        setError(err.message || 'Failed to fetch recommendations. Please try again.');
      } 
      finally {
        setIsLoading(false);
      }

  };

  return (
    <div 
      className="min-h-screen bg-gray-900 py-12 px-4"
      style={{
        // backgroundImage: 'url("https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundColor:'black'
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-70"></div> */}
      
      <div className="relative z-10">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto mb-8">
          <Link href='/#products'>
            <button
              className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-200 group"
            >
              <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Products
            </button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Smart Fertilizer
            <span className="text-green-400 block">Recommendation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get Optimal fertilizer recommendations tailored to your specific field conditions, 
            weather patterns, and crop requirements for maximum yield.
          </p>
        </div>

        {/* Form */}
        <FertilizerForm onSubmit={handleSubmit} isLoading={isLoading} />

        {/* Loading State */}
        {isLoading && (
          <div className="text-center mt-8">
            <div className="bg-gray-900 rounded-xl p-6 max-w-md mx-auto border border-gray-700">
              <div className="animate-pulse flex items-center justify-center">
                <div className="bg-green-600 rounded-full p-3 mr-3">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                </div>
                <p className="text-green-400 font-medium text-lg">
                  Analyzing your field conditions...
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center mt-8">
            <div className="bg-red-900/20 border border-red-700 rounded-xl p-6 max-w-md mx-auto">
              <p className="text-red-400 font-medium">{error}</p>
            </div>
          </div>
        )}

        {/* Recommendations */}
        <RecommendationDisplay recommendations={recommendations} />
      </div>
    </div>
  );
}

export default FertilizerRecommendation;