const Dashboard = () => {
    return(
        <div className="app">
            <h1>Expense Tracker</h1>
            <div className="flex mainArea">
                <div className="flex leftSide">
                    <div className="box">
                        <h1>Total Balance</h1>
                        <h1>$300</h1>
                    </div>
                    <div className="transactions box">
                        <h1>New Transaction</h1>
                        <form>
                            <label>Transaction Name</label>
                            <br></br>
                            <input type="text"></input>
                        </form>
                        <form>
                            <input type="radio" name="profit"></input><label>Income</label>
                            <input type="radio" name="profit" id="expense"></input><label>Expense</label>
                        </form>
                        <form>
                            <label>$</label><input placeholder="0.00" type="number" step={".01"}></input>
                            <input type="submit"></input>
                        </form>
                    </div>
                </div>    
                    <div className="history box">
                        <h1>Transaction History</h1>
                    </div>
            </div>  
        </div>
    );
}

export default Dashboard;