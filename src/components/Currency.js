import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    }

    return (
        <div className='card bg-success text-white mb-3'>
            <div className='card-body d-flex justify-content-between align-items-center'>
                <h6 className='card-title'>Currency</h6>
                <select className="custom-select bg-success text-white" id="currency-select" value={currency} onChange={handleCurrencyChange}>
                    <option value="£">Pound (£)</option>
                    <option value="$">Dollar ($)</option>
                    <option value="€">Euro (€)</option>
                    <option value="₹">Rupee (₹)</option>
                    <option value="R$">BRL (R$)</option>
                </select>
            </div>
        </div>
    );
};

export default Currency;