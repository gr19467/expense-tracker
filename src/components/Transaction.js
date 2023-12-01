import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <div className={`${transaction.type} flex transaction`}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span> {transaction.category} <button onClick={() => deleteTransaction(transaction.id)} id='delete'>x</button>
    </div>
  )
}