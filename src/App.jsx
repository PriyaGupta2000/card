import React, { useState } from "react";
import "./Component/CreditCardCheckout.css"; // Importing the CSS file
 
function CreditCardCheckout() {
  const [form, setForm] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolderName: "",
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Credit Card Details:", form);
    // Submit the form data to the backend
  };
 
  return (
    <div className="checkout-container">
      <h2>Credit Card Checkout</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Card Holder Name</label>
          <input
            type="text"
            name="cardHolderName"
            value={form.cardHolderName}
            onChange={handleChange}
            required
            placeholder="Card Holder Name"
          />
        </div>
 
        <div className="form-group">
          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleChange}
            required
            placeholder="Card Number"
            maxLength="16"
          />
        </div>
 
        <div className="form-row">
          <div className="form-group">
            <label>Expiry Date</label>
            <input
              type="text"
              name="expiryDate"
              value={form.expiryDate}
              onChange={handleChange}
              required
              placeholder="DD/MM/YY"
            />
          </div>
 
          <div className="form-group">
            <label>CVV</label>
            <input
              type="password"
              name="cvv"
              value={form.cvv}
              onChange={handleChange}
              required
              placeholder="CVV"
              maxLength="3"
            />
          </div>
        </div>
 
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
 
export default CreditCardCheckout;
 