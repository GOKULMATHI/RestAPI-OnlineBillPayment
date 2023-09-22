import React, { useState, useEffect } from 'react';
import './MobileRechargePlans.css'; // Import the CSS file for styling
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/bill/post/recharge';

function RechargeTable() {
  const [rechargeHistory, setRechargeHistory] = useState([]);
  const [newRecharge, setNewRecharge] = useState({
    mobileNumber: '',
    amount: '',
    date: '',
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(API_BASE_URL)
      .then((response) => setRechargeHistory(response.data))
      .catch((error) => setError(error.message));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecharge({ ...newRecharge, [name]: value });
  };

  const addRecharge = () => {
    axios
      .post(API_BASE_URL, newRecharge)
      .then((response) => {
        setRechargeHistory([...rechargeHistory, response.data]);
        setNewRecharge({
          mobileNumber: '',
          amount: '',
          date: '',
        });
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="recharge-table">
      <h2>Recharge History</h2>

      <div>
        <h2>Add Recharge</h2>
        <div className="recharge-form-fields">
          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={newRecharge.mobileNumber}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="amount"
            placeholder="Amount"
            value={newRecharge.amount}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="date"
            placeholder="Date"
            value={newRecharge.date}
            onChange={handleInputChange}
            required
          />
          <button onClick={addRecharge}>Add Recharge</button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Mobile Number</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {rechargeHistory.map((recharge, index) => (
            <tr key={index}>
              <td>{recharge.mobileNumber}</td>
              <td>{recharge.amount}</td>
              <td>{recharge.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default RechargeTable;
