const ProductDetailShimmer = () => {
  return (
    <div className="pb-page py-6 sm:py-8 animate-pulse">
      <div className="pb-container">
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-48 mb-6" />
        <div className="pb-card overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[420px] aspect-square bg-slate-200 dark:bg-slate-800" />
            <div className="flex flex-col gap-4 p-6 sm:p-8 lg:p-10 flex-1">
              <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-24" />
              <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-3/4" />
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/3" />
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full" />
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6" />
              <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded w-32 mt-4" />
              <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded-xl w-full sm:w-48 mt-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailShimmer;
