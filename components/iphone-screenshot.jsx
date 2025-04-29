import React from 'react';

export function IPhoneScreenshot({ className = '' }) {
    return (
        <div className={`relative w-[390px] h-[844px] mx-auto ${className}`}>
            {/* iPhone Frame */}
            <div className="absolute inset-0 bg-gray-900 rounded-[60px] p-4 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-gray-900 rounded-b-[20px] z-10" />
                
                {/* Screen Content */}
                <div className="absolute inset-0 bg-white rounded-[50px] overflow-hidden">
                    {/* Status Bar */}
                    <div className="h-[44px] bg-blue-600 flex items-center justify-between px-4">
                        <span className="text-white font-medium">9:41</span>
                        <div className="flex items-center space-x-2">
                            <span className="text-white">📶</span>
                            <span className="text-white">🔋</span>
                        </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="p-4">
                        {/* Header */}
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold text-gray-900">GrowthPath</h1>
                            <p className="text-gray-500">Today's Learning</p>
                        </div>
                        
                        {/* Progress Card */}
                        <div className="bg-blue-50 rounded-xl p-4 mb-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-600">Weekly Progress</span>
                                <span className="text-sm font-medium text-blue-600">75%</span>
                            </div>
                            <div className="h-2 bg-blue-200 rounded-full">
                                <div className="h-full w-3/4 bg-blue-600 rounded-full"></div>
                            </div>
                        </div>
                        
                        {/* Learning Activities */}
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-white border rounded-lg p-4 shadow-sm">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                            <span className="text-blue-600">📚</span>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900">Learning Activity {i}</h3>
                                            <p className="text-sm text-gray-500">Completed today</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 