import React, { useState, useEffect } from 'react';
import './Payment.css';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/payment/post/payment';

function PaymentForm() {
  const [payments, setPayments] = useState([]);
  const [newPayment, setNewPayment] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(API_BASE_URL)
      .then((response) => setPayments(response.data))
      .catch((error) => setError(error.message));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPayment({ ...newPayment, [name]: value });
  };

  const addPayment = () => {
    axios
      .post(API_BASE_URL, newPayment)
      .then((response) => {
        setPayments([...payments, response.data]);
        setNewPayment({
          cardNumber: '',
          cardHolder: '',
          expiryDate: '',
          cvv: '',
        });
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="payment-form">
      <h2>PAYMENT</h2>

      <div>
        <h2>ADD PAYMENT</h2>
        <div className="payment-form-fields">
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={newPayment.cardNumber}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="cardHolder"
            placeholder="Card Holder"
            value={newPayment.cardHolder}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="expiryDate"
            placeholder="Expiry Date"
            value={newPayment.expiryDate}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={newPayment.cvv}
            onChange={handleInputChange}
            required
          />
          <button onClick={addPayment}>Add Payment</button>
        </div>
      </div>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default PaymentForm;
