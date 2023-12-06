import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

export const TransactionsBox = () => {

    const [text, setText] = useState('');
    const [type, setType] = useState('');
    const [category, setCategory] = useState('N/A');
    const [amount, setAmount] = useState(0);

    const [hidden, setHidden] = useState("none");

    const { addTransaction } = useContext(GlobalContext);

    function ifClicked(){

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            type: type,
            category: category,
            amount: +amount
          }
      
        addTransaction(newTransaction);

        setText('');
        setAmount(0);
    }

    const handleIncome = e => {
        setHidden("none");
        setType(e.target.value);
    }

    const handleExpense = e => {
        setHidden("block");
        setType(e.target.value);
    }
    return (
        <div className="transactions box">
                    <h1>New Transaction</h1>
                    <form>
                        <label>Transaction Name: </label>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter transaction name...'></input>
                        <br></br>
                        <input type="radio" name="profit" value={"income"} onChange={handleIncome}></input><label>Income</label>
                        <input type="radio" name="profit" id="expense" value={"expense"} onChange={handleExpense}></input><label>Expense</label>
                        <br></br>
                        <div style={{display: hidden}}>
                            <label>Category: </label>
                            <select defaultValue={"DEFAULT"} onChange={(e) => setCategory(e.target.value)}>
                                <option value={"DEFAULT"} disabled> --select a category-- </option>
                                <option value={"Housing"}>Housing</option>
                                <option value={"Transportation"}>Transportation</option>
                                <option value={"Food"}>Food</option>
                                <option value={"Utilities"}>Utilities</option>
                                <option value={"Medical/Healthcare"}>Medical/Healthcare</option>
                                <option value={"Savings/Debt Payments"}>Savings/Debt Payments</option>
                                <option value={"Personal"}>Personal</option>
                                <option value={"Entertainment"}>Entertainment</option>
                                <option value={"Other"}>Other</option>
                            </select>
                        </div>
                        <label>$</label><input placeholder="0.00" type="number" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
                        <label>(Enter - symbol if expense)</label>
                        <br></br>
                        <div id='submit' onClick={ifClicked}>Add Transaction</div>
                    </form>
                </div>
    )
}