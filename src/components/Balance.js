import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext';
export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className="box">
                    <h1>Total Balance</h1>
                    <h1>${total}</h1>
                </div>
    )
}