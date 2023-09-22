import React, { useState, useEffect } from 'react';
import './Payment.css';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/bill';

function BillForm() {
  const [payments, setPayments] = useState([]);
  const [newPayment, setNewPayment] = useState({
    name: '',
    bankName: '',
    phoneNumber: '',
    upiId: '',
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
            name: '',
            bankName: '',
            phoneNumber: '',
            upiId: '',
        });
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="payment-form">
      <h2>BILLS</h2>

      <div>
        <h2>ADD PAYMENT</h2>
        <div className="payment-form-fields">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newPayment.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="bankName"
            placeholder="Bank Name"
            value={newPayment.bankName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={newPayment.phoneNumber}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="upiId"
            placeholder="UPI Id"
            value={newPayment.upiId}
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

export default BillForm;
