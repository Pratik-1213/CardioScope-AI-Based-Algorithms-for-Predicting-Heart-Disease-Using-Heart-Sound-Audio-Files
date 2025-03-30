import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Heart, 
  Activity, 
  Clock, 
  Upload, 
  Calendar, 
  Brain, 
  Stethoscope, 
  Video, 
  Wifi 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";

// Chart import
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CardioScope = () => {
  const navigate = useNavigate();
  const [heartRate, setHeartRate] = useState("72");

  // Heart waveform data
  const waveformData = [
    { time: 0, value: 0 },
    { time: 10, value: 10 },
    { time: 20, value: 50 },
    { time: 30, value: 30 },
    { time: 40, value: 80 },
    { time: 50, value: 30 },
    { time: 60, value: 10 },
    { time: 70, value: 40 },
    { time: 80, value: 60 },
    { time: 90, value: 10 },
    { time: 100, value: 0 },
    { time: 110, value: 10 },
    { time: 120, value: 50 },
    { time: 130, value: 30 },
    { time: 140, value: 80 },
    { time: 150, value: 30 },
    { time: 160, value: 10 },
    { time: 170, value: 40 },
    { time: 180, value: 60 },
    { time: 190, value: 10 },
    { time: 200, value: 0 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar userType="patient" />

      <main className="pt-20 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <Badge className="mb-4 bg-th-blue-100 text-th-blue-700 hover:bg-th-blue-100">
              Revolutionary Healthcare Technology
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              AI-Powered Stethoscope for{" "}
              <span className="text-th-blue-500">Smarter Heart Health</span>
            </h1>
            <p className="text-th-gray-600 text-lg mb-6">
              CardioScope combines artificial intelligence with precision
              engineering to revolutionize how we monitor, diagnose, and
              manage heart health.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-th-blue-500 hover:bg-th-blue-600 text-white"
                onClick={() => navigate("/ai-prediction")}
              >
                Try AI Prediction
              </Button>
              <Button 
                variant="outline" 
                className="border-th-gray-300"
                onClick={() => navigate("/how-it-works")}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-apple-lg p-6 border border-th-gray-100">
            <img 
              src="/lovable-uploads/db35e4c5-7f99-47bd-8f4d-2369a3182f16.png"
              alt="Heart model"
              className="w-full h-auto mb-6 rounded-lg"
            />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-th-gray-600 text-sm">Heart Rate</p>
                <p className="text-3xl font-bold">{heartRate} BPM</p>
              </div>
              <div className="w-32 h-12">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={waveformData.slice(0, 10)}>
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#0e8fea" 
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 my-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-th-blue-100 flex items-center justify-center mb-3">
              <Brain className="text-th-blue-500" size={24} />
            </div>
            <h3 className="font-medium text-th-gray-800">AI-Powered Diagnostics</h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-th-blue-100 flex items-center justify-center mb-3">
              <Clock className="text-th-blue-500" size={24} />
            </div>
            <h3 className="font-medium text-th-gray-800">Real-Time Monitoring</h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-th-blue-100 flex items-center justify-center mb-3">
              <Wifi className="text-th-blue-500" size={24} />
            </div>
            <h3 className="font-medium text-th-gray-800">Telehealth Integration</h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-th-blue-100 flex items-center justify-center mb-3">
              <Activity className="text-th-blue-500" size={24} />
            </div>
            <h3 className="font-medium text-th-gray-800">Disease Prediction</h3>
          </div>
        </div>

        {/* Heart Monitoring Dashboard */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-th-gray-800">Heart Sound Waveform (Real Time)</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-xl shadow-apple p-4 border border-th-gray-100">
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
                    strokeWidth={3}
                    dot={{ r: 0 }}
                    activeDot={{ r: 6, strokeWidth: 0, fill: '#0e8fea' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-6">
              <Card className="shadow-apple">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-semibold">Vitals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-th-gray-600">Heart Rate:</p>
                      <p className="text-3xl font-bold text-th-blue-500">{heartRate} BPM</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-th-gray-600">Blood Pressure:</p>
                      <p className="text-xl font-semibold">120/80 mmHg</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-th-gray-600">Oxygen Saturation:</p>
                      <p className="text-xl font-semibold">98%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="border border-dashed border-th-gray-200 rounded-xl p-6 text-center">
                <Button className="bg-th-blue-500 hover:bg-th-blue-600 text-white mb-4 w-full">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Heart Sound Data
                </Button>
                <p className="text-th-gray-500 text-sm">
                  Drag & Drop your audio file here or click to browse
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Waveform Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-th-gray-800">Heart Sound Waveform</h2>
          <div className="bg-white rounded-xl shadow-apple p-4 border border-th-gray-100">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={waveformData.map(d => ({...d, value: d.value * 0.8 + Math.random() * 10}))}>
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
                  stroke="#0e8fea" 
                  strokeWidth={3}
                  dot={{ r: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="mb-16">
          <Card className="shadow-apple">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-semibold">Upcoming Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start justify-between border-b border-th-gray-100 pb-4">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 rounded-full bg-th-blue-100 flex items-center justify-center">
                      <Stethoscope className="text-th-blue-500" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Dr. Snehal Khade</h3>
                      <p className="text-sm text-th-gray-500">Cardiologist</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Tomorrow, 10:00 AM</p>
                    <div className="flex mt-2 justify-end gap-2">
                      <Button size="sm" variant="outline" className="h-8">
                        <Calendar className="mr-1 h-3 w-3" />
                        Reschedule
                      </Button>
                      <Button size="sm" className="h-8 bg-th-blue-500 hover:bg-th-blue-600">
                        <Video className="mr-1 h-3 w-3" />
                        Join
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 rounded-full bg-th-blue-100 flex items-center justify-center">
                      <Stethoscope className="text-th-blue-500" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Dr. Sarah Johnson</h3>
                      <p className="text-sm text-th-gray-500">General Physician</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Friday, 2:30 PM</p>
                    <div className="flex mt-2 justify-end gap-2">
                      <Button size="sm" variant="outline" className="h-8">
                        <Calendar className="mr-1 h-3 w-3" />
                        Reschedule
                      </Button>
                      <Button size="sm" className="h-8 bg-th-blue-500 hover:bg-th-blue-600">
                        <Video className="mr-1 h-3 w-3" />
                        Join
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CardioScope;
