// components/ProgressCircle.tsx
import React from "react";
import { SlExclamation } from "react-icons/sl";

interface ProgressCircleProps {
  progress: number; // Progress percentage (0-100)
  size?: number; // Diameter of the circle
  strokeWidth?: number; // Width of the circular stroke
  remainingAmount: string; // Remaining data to be displayed below the percentage
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  progress = 30,
  size = 228,
  strokeWidth = 18,
  remainingAmount = "123",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        width={size}
        height={size}
        className="transform -rotate-90 scale-y-[-1]" // Apply vertical flipping with scaleY
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Empty Circle with Yellow Stroke */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius - strokeWidth / 2} // Radius adjusted to fit inside the gray background circle
          stroke="#ffffff" // Yellow border color similar to the image
          strokeWidth={strokeWidth} // Stroke width matches other circles
          fill="#FFE958" // No fill to avoid yellow filling inside
        />

        {/* Light Gray Background Stroke */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Gradient Stroke for Progress */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#grad1)" // Gradient stroke
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />

        {/* Gradient Definition */}
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="80%"
              style={{ stopColor: "#45E6D6", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#FFE958", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <div className="text-[20px] font-bold text-[#000000]">
          {progress.toFixed(2)}%
        </div>
        <div className="text-[12px] text-[#333] flex items-center">
          {remainingAmount} left&nbsp;
          <SlExclamation />
        </div>
      </div>
    </div>
  );
};

export default ProgressCircle;
