import React, { useState, useEffect } from 'react';
import './ElectricityBill.css'; // Import your CSS for styling
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/electricitybill/post/electricity'; // Adjust the API endpoint

function ElectricityBillPaymentForm() {
  const [payments, setPayments] = useState([]);
  const [newPayment, setNewPayment] = useState({
    meterNumber: '',
    accountHolder: '',
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
          meterNumber: '',
          accountHolder: '',
          amount: '',
        });
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="payment-form">
      <h2>Electricity Bill Payment</h2>

      <div>
        <h2>Make a Payment</h2>
        <div className="payment-form-fields">
          <input
            type="text"
            name="meterNumber"
            placeholder="Meter Number"
            value={newPayment.meterNumber}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="accountHolder"
            placeholder="Account Holder Name"
            value={newPayment.accountHolder}
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
          <button onClick={addPayment}>Pay Electricity Bill</button>
        </div>
      </div>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default ElectricityBillPaymentForm;
