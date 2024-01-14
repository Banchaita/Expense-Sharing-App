import React, { useState } from 'react';
import User from './Components/User';
import Expense from './Components/Expense';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'User 1', email: 'user1@example.com', mobileNumber: '1234567890' },
    { id: 2, name: 'User 2', email: 'user2@example.com', mobileNumber: '9876543210' },
    { id: 3, name: 'User 3', email: 'user3@example.com', mobileNumber: '8583981860' },
    // Add more users as needed
  ]);

  const [expenses, setExpenses] = useState([
    {},
    // Add more expenses as needed
  ]);

  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: 0,
    type: 'EQUAL',
    payer: 2,
    participants: [3],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  const handleAddExpense = () => {
    // Add validation if needed
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { id: prevExpenses.length + 1, ...newExpense },
    ]);
    setNewExpense({
      description: '',
      amount: 0,
      type: 'EQUAL',
      payer: [],
      participants: [],
    });
  };

  return (
    <div className='expense-area'>
      <h1>Expense Sharing App</h1>

      <h2>Add New Expense:</h2>
      <form>
        <div className='from-area'>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={newExpense.description}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Amount:
            <input
              type="number"
              name="amount"
              value={newExpense.amount}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Type:
            <select name="type" value={newExpense.type} onChange={handleInputChange}>
              <option value="EQUAL">Equal</option>
            </select>
          </label>
          <br />
          <label>
            Payer:
            <select name="payer" value={newExpense.payer} onChange={handleInputChange}>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Participants:
            <select name="participants" value={newExpense.participants} onChange={handleInputChange}>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </label>
          <br />
          <button type="button" onClick={handleAddExpense}>
            Add Expense
          </button>
        </div>

      </form>
      <h2>Expenses:</h2>
      <div className='details'>
      {expenses.map((expense) => (
        <Expense key={expense.id} expense={expense} users={users} />
      ))}
      </div>
      
    </div>
  );
};

export default App;
