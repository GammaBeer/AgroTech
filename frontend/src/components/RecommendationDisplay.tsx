import React from 'react';
import { CheckCircle, Leaf, TrendingUp } from 'lucide-react';

interface RecommendationDisplayProps {
  recommendations: string[];
}

const RecommendationDisplay: React.FC<RecommendationDisplayProps> = ({ recommendations }) => {
  if (recommendations.length === 0) {
    return null;
  }

  return (
    <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 max-w-4xl mx-auto mt-8">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-green-600 rounded-full p-3 mr-3">
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-white">Recommendations</h3>
        </div>
        <p className="text-gray-300">Top fertilizer recommendations based on your field conditions</p>
      </div>

      <div className="grid gap-4">
        {recommendations.map((fertilizer, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:bg-gray-750 transition-all duration-200 transform hover:scale-[1.02]"
          >
            <div className="flex items-center">
              <div className="bg-green-600 rounded-full p-2 mr-4 flex-shrink-0">
                <span className="text-white font-bold text-lg">{index + 1}</span>
              </div>
              <div className="flex-grow">
                <div className="flex items-center mb-2">
                  <Leaf className="h-5 w-5 text-green-400 mr-2" />
                  <h4 className="text-xl font-semibold text-white">{fertilizer}</h4>
                </div>
                {/* <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm">Optimized for your soil and crop conditions</span>
                </div> */}
              </div>
              <div className="text-right">
                <span className="inline-block bg-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  RECOMMENDED
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-green-900/20 border border-green-700 rounded-lg">
        <div className="flex items-center text-green-400 mb-2">
          <CheckCircle className="h-5 w-5 mr-2" />
          <span className="font-semibold">Pro Tip</span>
        </div>
        <p className="text-gray-300 text-sm">
          Apply fertilizers during optimal weather conditions and follow recommended dosage for best results. 
          Consider soil testing for more precise nutrient management.
        </p>
      </div>
    </div>
  );
};

export default RecommendationDisplay;