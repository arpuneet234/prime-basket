const PrimePay = () => {
  return (
    <div className="pb-page py-10 sm:py-14">
      <div className="pb-container flex flex-col items-center">
        <div className="text-center mb-8 max-w-md">
          <h1 className="pb-section-title">PrimePay</h1>
          <p className="pb-section-subtitle mt-2">Secure checkout powered by Prime Basket</p>
        </div>

        <div className="pb-card p-6 sm:p-8 w-full max-w-md shadow-lg shadow-slate-200/50 dark:shadow-black/30">
          <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl p-6 mb-8 text-white shadow-lg shadow-brand-600/30">
            <p className="text-xs text-white/70 uppercase tracking-wider mb-6">Prime Basket Card</p>
            <p className="text-lg tracking-[0.2em] font-mono mb-6">•••• •••• •••• ••••</p>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs text-white/70">Valid thru</p>
                <p className="font-medium">MM/YY</p>
              </div>
              <div className="text-2xl font-bold opacity-90">VISA</div>
            </div>
          </div>

          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Card number</label>
              <input type="text" placeholder="1234 5678 9012 3456" className="pb-input" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Expiry</label>
                <input type="text" placeholder="MM/YY" className="pb-input" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">CVV</label>
                <input type="text" placeholder="123" className="pb-input" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Amount (₹)</label>
              <input type="number" placeholder="0.00" className="pb-input" />
            </div>
            <button type="submit" className="pb-btn-primary w-full mt-2 py-3">
              Pay securely
            </button>
          </form>

          <p className="text-center text-slate-400 text-xs mt-5 flex items-center justify-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            Secured by PrimePay
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrimePay;
