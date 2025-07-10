'use client'

import React, { useState } from 'react';
import { Leaf, Thermometer, Droplets, Beaker, Sprout, BarChart3 } from 'lucide-react';
import { InputData } from '../types/fertilizerType';

interface FertilizerFormProps {
  onSubmit: (data: InputData) => void;
  isLoading: boolean;
}

const soilTypes = ['Clayey', 'Sandy', 'Red', 'Loamy', 'Black'];
const cropTypes = [
  'Sugarcane', 'Millets', 'Barley', 'Paddy', 'Pulses', 'Tobacco', 'Ground Nuts',
  'Maize', 'Cotton', 'Wheat', 'Oil seeds'
];

// Allow number | '' for controlled empty input
const FertilizerForm: React.FC<FertilizerFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<{
    Temparature: number | '';
    Humidity: number | '';
    Moisture: number | '';
    Soil_Type: string;
    Crop_Type: string;
    Nitrogen: number | '';
    Potassium: number | '';
    Phosphorous: number | '';
  }>({
    Temparature: 25,
    Humidity: 60,
    Moisture: 40,
    Soil_Type: soilTypes[0],
    Crop_Type: cropTypes[0],
    Nitrogen: 50,
    Potassium: 50,
    Phosphorous: 50,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'number'
          ? value === ''
            ? ''
            : Number(value.replace(/^0+(?=\d)/, '')) // remove leading zeros
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cleanedData: InputData = {
      ...formData,
      Temparature: Number(formData.Temparature),
      Humidity: Number(formData.Humidity),
      Moisture: Number(formData.Moisture),
      Nitrogen: Number(formData.Nitrogen),
      Potassium: Number(formData.Potassium),
      Phosphorous: Number(formData.Phosphorous),
    };
    onSubmit(cleanedData);
  };

  return (
    <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-green-600 rounded-full p-3 mr-3">
            <Leaf className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white">Smart Fertilizer Recommendation</h2>
        </div>
        <p className="text-gray-300">Enter your field conditions to get AI-powered fertilizer recommendations</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Environmental Conditions */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center mb-4">
            <Thermometer className="h-6 w-6 text-green-400 mr-2" />
            <h3 className="text-xl font-semibold text-white">Environmental Conditions</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Temperature (°C)', name: 'Temparature', max: 50 },
              { label: 'Humidity (%)', name: 'Humidity', max: 100 },
              { label: 'Soil Moisture (%)', name: 'Moisture', max: 100 }
            ].map(({ label, name, max }) => (
              <div key={name}>
                <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-2">
                  {label}
                </label>
                <input
                  type="number"
                  id={name}
                  name={name}
                  value={formData[name as keyof typeof formData]}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  required
                  step="0.1"
                  min="0"
                  max={max}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Soil & Crop Information */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center mb-4">
            <Sprout className="h-6 w-6 text-green-400 mr-2" />
            <h3 className="text-xl font-semibold text-white">Soil & Crop Information</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="Soil_Type" className="block text-sm font-medium text-gray-300 mb-2">
                Soil Type
              </label>
              <select
                id="Soil_Type"
                name="Soil_Type"
                value={formData.Soil_Type}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
                required
              >
                {soilTypes.map((type) => (
                  <option key={type} value={type} className="bg-gray-700 text-white">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="Crop_Type" className="block text-sm font-medium text-gray-300 mb-2">
                Crop Type
              </label>
              <select
                id="Crop_Type"
                name="Crop_Type"
                value={formData.Crop_Type}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
                required
              >
                {cropTypes.map((type) => (
                  <option key={type} value={type} className="bg-gray-700 text-white">
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Nutrient Levels */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center mb-4">
            <Beaker className="h-6 w-6 text-green-400 mr-2" />
            <h3 className="text-xl font-semibold text-white">Current Nutrient Levels</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Nitrogen (N) - ppm', name: 'Nitrogen' },
              { label: 'Potassium (K) - ppm', name: 'Potassium' },
              { label: 'Phosphorous (P) - ppm', name: 'Phosphorous' },
            ].map(({ label, name }) => (
              <div key={name}>
                <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-2">
                  {label}
                </label>
                <input
                  type="number"
                  id={name}
                  name={name}
                  value={formData[name as keyof typeof formData]}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  required
                  step="0.1"
                  min="0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none flex items-center justify-center mx-auto min-w-[200px]"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Analyzing...
              </>
            ) : (
              <>
                <BarChart3 className="h-5 w-5 mr-2" />
                Get Recommendations
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FertilizerForm;
