const PrimePay = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">💳 PrimePay</h1>
        <p className="text-gray-500">Secure payments for Prime Basket</p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md border border-gray-100">
        
        {/* Card Preview */}
        <div className="bg-gradient-to-r from-red-500 to-red-400 rounded-2xl p-6 mb-8 text-white shadow-lg">
          <p className="text-xs opacity-75 mb-6">Prime Basket Card</p>
          <p className="text-lg tracking-widest font-mono mb-4">**** **** **** ****</p>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs opacity-75">Expiry</p>
              <p className="font-medium">MM/YY</p>
            </div>
            <div className="text-3xl">💳</div>
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Card Number"
            className="border-2 border-gray-200 rounded-xl p-3 outline-none focus:border-red-400 transition-colors duration-200 text-gray-700"
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="MM/YY"
              className="border-2 border-gray-200 rounded-xl p-3 outline-none focus:border-red-400 transition-colors duration-200 text-gray-700 w-1/2"
            />
            <input
              type="text"
              placeholder="CVV"
              className="border-2 border-gray-200 rounded-xl p-3 outline-none focus:border-red-400 transition-colors duration-200 text-gray-700 w-1/2"
            />
          </div>
          <input
            type="number"
            placeholder="Amount (₹)"
            className="border-2 border-gray-200 rounded-xl p-3 outline-none focus:border-red-400 transition-colors duration-200 text-gray-700"
          />
          <button className="bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition-colors duration-200 mt-2">
            Pay Now
          </button>
        </div>

        {/* Security note */}
        <p className="text-center text-gray-400 text-xs mt-4">🔒 Secured by PrimePay</p>

      </div>
    </div>
  );
};

export default PrimePay;