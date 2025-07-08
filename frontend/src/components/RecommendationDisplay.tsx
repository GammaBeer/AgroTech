import React from 'react';

interface RecommendationDisplayProps {
  recommendations: string[];
}

const RecommendationDisplay: React.FC<RecommendationDisplayProps> = ({ recommendations }) => {
  if (recommendations.length === 0) {
    return null;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-8 max-w-lg mx-auto">
      <h3 className="text-xl font-bold mb-4 text-center text-blue-700">Top 3 Fertilizer Recommendations:</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-800">
        {recommendations.map((fert, index) => (
          <li key={index} className="flex items-center">
            <span className="inline-block w-2 h-2 mr-2 bg-blue-500 rounded-full"></span>
            {fert}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationDisplay;