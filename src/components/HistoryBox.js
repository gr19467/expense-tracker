import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalContext';

export const HistoryBox = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div className="history box">
            <h1>Transaction History</h1>
            <div id='historyContainer'>
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </div>
                
        </div>
    )
}