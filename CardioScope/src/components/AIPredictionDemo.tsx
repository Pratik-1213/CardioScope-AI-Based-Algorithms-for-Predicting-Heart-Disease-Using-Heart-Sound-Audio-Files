import React, { useState, useRef } from "react";
import { Activity, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AIPrediction = () => {
  const [heartRate, setHeartRate] = useState("--");
  const [predictionResult, setPredictionResult] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize with empty data
  const [waveformData, setWaveformData] = useState<Array<{time: number, value: number}>>([]);
  const [ecgData, setEcgData] = useState<Array<{time: number, value: number}>>([]);
  const [healthOverviewData, setHealthOverviewData] = useState<Array<{time: number, value: number}>>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsAnalyzing(true);
    setPredictionResult(null);

    // Simulate file upload and analysis with a timeout
    setTimeout(() => {
      // Simulate random heart rate between 65-85
      const randomHeartRate = Math.floor(Math.random() * 20) + 65;
      setHeartRate(randomHeartRate.toString());
      
      // Random prediction for simulation purposes
      const predictions = [
        "Normal heart sound",
        "Abnormal heart sound - Murmur detected",
        "Normal sinus rhythm",
        "Possible arrhythmia detected"
      ];
      const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
      setPredictionResult(randomPrediction);
      
      // Generate waveform data after file upload
      setWaveformData(Array.from({ length: 100 }, (_, i) => ({
        time: i,
        value: Math.sin(i * 0.1) * 30 + Math.random() * 10,
      })));
      
      // Generate ECG data after file upload
      setEcgData(Array.from({ length: 100 }, (_, i) => ({
        time: i,
        value: i % 25 < 2 ? -10 - Math.random() * 5 : 
               i % 25 === 3 ? 40 + Math.random() * 10 : 
               i % 25 === 4 ? -20 - Math.random() * 10 : 
               i % 25 < 10 ? 10 + Math.random() * 5 : 
               Math.sin(i * 0.1) * 5 + Math.random() * 2,
      })));
      
      // Generate health overview data after file upload
      setHealthOverviewData(Array.from({ length: 30 }, (_, i) => ({
        time: i,
        value: 70 + Math.sin(i * 0.5) * 10 + Math.random() * 2
      })));
      
      setIsAnalyzing(false);
    }, 2500);
  };

  // Function to trigger file input click
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">AI Prediction</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-8">
            {/* Heart Sound Waveform (Real Time) Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Heart Sound Waveform (Real Time)</h2>
              <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100 relative">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={waveformData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#eaeaea" />
                    <XAxis 
                      dataKey="time" 
                      label={{ value: 'Time (ms)', position: 'insideBottomRight', offset: -5 }}
                      tick={{ fontSize: 12, fill: '#64748b' }}
                    />
                    <YAxis 
                      label={{ value: 'Amplitude', angle: -90, position: 'insideLeft' }}
                      tick={{ fontSize: 12, fill: '#64748b' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#0e8fea" 
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
                {waveformData.length === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Please upload a file to view data
                  </div>
                )}
              </div>
            </div>

            {/* Heart Sound Waveform Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Heart Sound Waveform</h2>
              <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100 relative">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={waveformData.map(d => ({...d, value: d.value * 0.8 + Math.random() * 5}))}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#eaeaea" />
                    <XAxis 
                      dataKey="time" 
                      label={{ value: 'Time (ms)', position: 'insideBottomRight', offset: -5 }}
                      tick={{ fontSize: 12, fill: '#64748b' }}
                    />
                    <YAxis 
                      label={{ value: 'Amplitude', angle: -90, position: 'insideLeft' }}
                      tick={{ fontSize: 12, fill: '#64748b' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#797979" 
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
                {waveformData.length === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Please upload a file to view data
                  </div>
                )}
              </div>
            </div>

            {/* ECG Graph Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">ECG Graph</h2>
              <div className="bg-black rounded-xl p-4 border border-gray-900 relative">
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={ecgData}>
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#00FF00" 
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
                {ecgData.length === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    Please upload a file to view ECG data
                  </div>
                )}
              </div>
            </div>

            {/* Heart Health Overview Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Heart Health Overview</h2>
              <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100 relative">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={healthOverviewData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#eaeaea" />
                    <XAxis 
                      dataKey="time" 
                      label={{ value: 'Time (ms)', position: 'insideBottomRight', offset: -5 }}
                      tick={{ fontSize: 12, fill: '#64748b' }}
                    />
                    <YAxis 
                      label={{ value: 'Heart Rate (BPM)', angle: -90, position: 'insideLeft' }}
                      domain={[50, 90]}
                      tick={{ fontSize: 12, fill: '#64748b' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#468ef5" 
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
                {healthOverviewData.length === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Please upload a file to view health data
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Vitals Card */}
            <Card className="shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold">Vitals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-600">Heart Rate:</p>
                    <p className="text-3xl font-bold text-blue-500">{heartRate} BPM</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-gray-600">Blood Pressure:</p>
                    <p className="text-xl font-semibold">120/80 mmHg</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-gray-600">Oxygen Saturation:</p>
                    <p className="text-xl font-semibold">98%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Upload Section */}
            <div className="border border-dashed border-gray-200 rounded-xl p-6 text-center">
              <input 
                type="file" 
                id="audioFile" 
                ref={fileInputRef}
                className="hidden" 
                accept=".wav, .mp3"
                onChange={handleFileUpload}
              />
              <Button 
                variant="default" 
                className="bg-blue-500 hover:bg-blue-600 text-white mb-4 w-full cursor-pointer"
                onClick={triggerFileInput}
              >
                <Upload className="mr-2 h-4 w-4" />
                Upload Heart Sound Data
              </Button>
              <p className="text-gray-500 text-sm">
                Drag & Drop your audio file here or click to browse
              </p>
            </div>

            {/* AI Health Insights Card */}
            <Card className={`shadow-md ${predictionResult ? (predictionResult.toLowerCase().includes("normal") ? "bg-[#f0fdfa] border-[#bbf7d0] text-[#10b981]" : "bg-[#fee2e2] border-[#fca5a5] text-[#dc2626]") : "bg-white"}`}>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold">AI Health Insights</CardTitle>
              </CardHeader>
              <CardContent>
                {isAnalyzing ? (
                  <div className="flex items-center justify-center py-4">
                    <Activity className="animate-pulse h-5 w-5 mr-2" />
                    <p>Analyzing...</p>
                  </div>
                ) : predictionResult ? (
                  <p className="font-medium">{predictionResult}</p>
                ) : (
                  <p className="text-gray-500">Waiting for file...</p>
                )}
              </CardContent>
            </Card>

            {/* Weekly Analysis Card */}
            <Card className="shadow-md bg-[#f0fdfa] border-[#bbf7d0] text-[#10b981]">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold">Weekly Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Your heart rate has been stable this week. Keep up the good work!</p>
              </CardContent>
            </Card>

            {/* Upcoming Appointments Card */}
            <Card className="shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold">Upcoming Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Dr. Snehal Khade</p>
                    <p className="text-sm text-gray-500">Tomorrow, 10:00 AM</p>
                    <Button variant="default" size="sm" className="mt-2 bg-blue-500 hover:bg-blue-600">
                      Book New Appointment
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="mt-20 py-8 bg-gray-50 text-gray-600 text-center border-t border-gray-100">
        <p>&copy; 2025 CardioScope. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AIPrediction;
