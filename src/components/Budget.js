import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [error, setError] = useState('');
    const handleBudgetChange = (event) => {
        const value = Number(event.target.value);
        if (value > 20000) {
            alert('The value cannot exceed 20,000');
        } else if (value < 1660) {
            alert('You cannot reduce the budget value lower than the spending');
        } else {
            setError('');
            setNewBudget(value);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency} </span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange} max="20000"></input>
{error && <div className="alert alert-danger mt-2">{error}</div>}
</div>
    );
};
export default Budget;
