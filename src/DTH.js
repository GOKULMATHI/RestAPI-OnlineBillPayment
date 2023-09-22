import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DTH.css';

const API_BASE_URL = 'http://localhost:8080/api/dthbill/post/dth'; // Adjust the API endpoint

function DthBillPaymentForm() {
  const [payments, setPayments] = useState([]);
  const [newPayment, setNewPayment] = useState({
    accountNumber: '',
    subscriberName: '',
    amount: '',
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
          accountNumber: '',
          subscriberName: '',
          amount: '',
        });
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="payment-form">
      <h2>DTH Bill Payment</h2>

      <div>
        <h2>Pay DTH Bill</h2>
        <div className="payment-form-fields">
          <input
            type="text"
            name="accountNumber"
            placeholder="DTH Account Number"
            value={newPayment.accountNumber}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="subscriberName"
            placeholder="Subscriber Name"
            value={newPayment.subscriberName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="amount"
            placeholder="Amount"
            value={newPayment.amount}
            onChange={handleInputChange}
            required
          />
          <button onClick={addPayment}>Pay DTH Bill</button>
        </div>
      </div>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default DthBillPaymentForm;
