export default function CardSkeleton() {
  return (
    <div className="rounded-lg border shadow-md w-[200px] min-h-[340px] font-bold animate-pulse">
      <div className="overflow-hidden">
        <div className="flex flex-col justify-between">
          <figure className="size-full border-none">
            <div className="bg-gray-300 rounded-t-md w-full h-[200px]"></div>
          </figure>
          <div className="p-2 space-y-2">
            <div className="h-5 bg-gray-300 rounded w-3/4"></div>
            <div className="flex justify-between">
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
