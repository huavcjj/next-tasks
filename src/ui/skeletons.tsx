interface TaskSkeletonProps {
  count: number;
}

export default function TaskSkeleton({ count }: TaskSkeletonProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-lg shadow-md border border-gray-300 flex flex-col justify-between w-full h-48 animate-pulse"
        >
          <div className="flex justify-between items-center">
            <div className="h-6 bg-gray-400 rounded w-3/4"></div>
          </div>

          <div className="h-4 bg-gray-400 rounded w-full mt-2"></div>
          <div className="h-4 bg-gray-400 rounded w-full mt-2"></div>

          <div className="flex justify-between items-center mt-4">
            <div className="h-6 w-20 bg-gray-400 rounded"></div>
            <div className="flex gap-2">
              <div className="h-8 w-8 bg-gray-400 rounded"></div>
              <div className="h-8 w-8 bg-gray-400 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
