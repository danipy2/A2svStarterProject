// components/TimelineItem.tsx
import { FaCheck } from "react-icons/fa";

interface TimelineItemProps {
  title: string;
  description: string;
  date?: string;
  isCompleted: boolean;
  isCurrent?: boolean;
}

export function TimelineItem({
  title,
  description,
  date,
  isCompleted,
  isCurrent = false,
}: TimelineItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex flex-col items-center">
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center 
            ${isCompleted ? "bg-green-500" : "border-2 border-gray-300"}
            ${isCurrent && !isCompleted ? "border-green-500" : ""}`}
        >
          {isCompleted && <FaCheck className="w-4 h-4 text-white" />}
        </div>
        {!isCompleted && isCurrent && (
          <div className="w-0.5 h-8 bg-green-500"></div>
        )}
      </div>
      <div className="flex-1 pb-2">
        <h3
          className={`text-[17px] font-semibold ${
            isCompleted ? "text-green-600" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
        {date && (
          <p className="text-sm text-gray-500">
            {new Date(date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        )}
        <p className="mt-1 text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
