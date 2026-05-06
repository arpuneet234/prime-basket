const PrimePay = () => {
  return (
    <div className="primepay">
      <h1>💳 PrimePay</h1>
      <p>Secure payments for Prime Basket</p>
 
      <div className="primepay-form">
        <input type="text" placeholder="Card Number" />
        <input type="text" placeholder="MM/YY" />
        <input type="text" placeholder="CVV" />
        <input type="number" placeholder="Amount (₹)" />
        <button>Pay Now</button>
      </div>
    </div>
  );
};
 
export default PrimePay;