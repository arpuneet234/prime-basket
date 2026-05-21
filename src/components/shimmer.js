const Shimmer = () => {
  return (
    <div className="pb-page p-4 sm:p-6">
      <div className="pb-container">
        <div className="h-32 sm:h-40 bg-slate-200 dark:bg-slate-800 rounded-2xl animate-pulse mb-8" />
        <div className="h-16 bg-slate-200 dark:bg-slate-800 rounded-2xl animate-pulse mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {Array(12).fill("").map((_, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-700/90 overflow-hidden shadow-sm"
            >
              <div className="w-full aspect-[4/3] bg-gradient-to-b from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 animate-pulse" />
              <div className="p-4 flex flex-col gap-3">
                <div className="h-2.5 bg-slate-200 dark:bg-slate-700 rounded animate-pulse w-1/4" />
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse w-[85%]" />
                <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded-md animate-pulse w-16 mt-1" />
                <div className="flex justify-between items-center pt-3 border-t border-slate-100 dark:border-slate-800 mt-2">
                  <div className="h-7 bg-slate-200 dark:bg-slate-700 rounded animate-pulse w-20" />
                  <div className="h-8 w-8 bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
