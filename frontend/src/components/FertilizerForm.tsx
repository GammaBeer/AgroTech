'use client';

import React, { useState } from 'react';
import { InputData } from '@/types/fertilizerType';

interface FertilizerFormProps {
  onSubmit: (data: InputData) => void;
  isLoading: boolean;
}

const soilTypes = ['Clayey', 'Sandy', 'Red', 'Loamy', 'Black'];
const cropTypes = [
  'Sugarcane', 'Millets', 'Barley', 'Paddy', 'Pulses', 'Tobacco', 'Ground Nuts',
  'Maize', 'Cotton', 'Wheat', 'Oil seeds'
];

const FertilizerForm: React.FC<FertilizerFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<InputData>({
    Temparature: 0,
    Humidity: 0,
    Moisture: 0,
    Soil_Type: soilTypes[0], // Default to first
    Crop_Type: cropTypes[0],   // Default to first
    Nitrogen: 0,
    Potassium: 0,
    Phosphorous: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Fertilizer Recommendation</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Temperature */}
        <div>
          <label htmlFor="Temparature" className="block text-sm font-medium text-black">
            Temperature (°C)
          </label>
          <input
            type="number"
            id="Temparature"
            name="Temparature"
            value={formData.Temparature}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500 text-black"
            required
            step="0.1"
          />
        </div>

        {/* Humidity */}
        <div>
          <label htmlFor="Humidity" className="block text-sm font-medium text-black">
            Humidity (%)
          </label>
          <input
            type="number"
            id="Humidity"
            name="Humidity"
            value={formData.Humidity}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500 text-black"
            required
            step="0.1"
          />
        </div>

        {/* Moisture */}
        <div>
          <label htmlFor="Moisture" className="block text-sm font-medium text-black">
            Moisture (%)
          </label>
          <input
            type="number"
            id="Moisture"
            name="Moisture"
            value={formData.Moisture}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500 text-black"
            required
            step="0.1"
          />
        </div>

        {/* Nitrogen */}
        <div>
          <label htmlFor="Nitrogen" className="block text-sm font-medium text-black">
            Nitrogen (N)
          </label>
          <input
            type="number"
            id="Nitrogen"
            name="Nitrogen"
            value={formData.Nitrogen}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500 text-black"
            required
            step="0.1"
          />
        </div>

        {/* Potassium */}
        <div>
          <label htmlFor="Potassium" className="block text-sm font-medium text-black">
            Potassium (K)
          </label>
          <input
            type="number"
            id="Potassium"
            name="Potassium"
            value={formData.Potassium}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500 text-black"
            required
            step="0.1"
          />
        </div>

        {/* Phosphorous */}
        <div>
          <label htmlFor="Phosphorous" className="block text-sm font-medium text-black">
            Phosphorous (P)
          </label>
          <input
            type="number"
            id="Phosphorous"
            name="Phosphorous"
            value={formData.Phosphorous}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500 text-black"
            required
            step="0.1"
          />
        </div>

        {/* Soil Type */}
        <div>
          <label htmlFor="Soil_Type" className="block text-sm font-medium text-black">
            Soil Type
          </label>
          <select
            id="Soil_Type"
            name="Soil_Type"
            value={formData.Soil_Type}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500 bg-white text-black"
            required
          >
            {soilTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Crop Type */}
        <div>
          <label htmlFor="Crop_Type" className="block text-sm font-medium text-black">
            Crop Type
          </label>
          <select
            id="Crop_Type"
            name="Crop_Type"
            value={formData.Crop_Type}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500 bg-white text-black"
            required
          >
            {cropTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          disabled={isLoading}
        >
          {isLoading ? 'Predicting...' : 'Get Recommendations'}
        </button>
      </div>
    </form>
  );
};

export default FertilizerForm;