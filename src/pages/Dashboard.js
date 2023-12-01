import { Balance } from '../components/Balance'
import { TransactionsBox } from '../components/TransactionsBox'
import { CategoriesBox } from '../components/CategoriesBox'
import { HistoryBox } from '../components/HistoryBox'

import{GlobalProvider} from '../context/GlobalContext'

const Dashboard = () => {

    return(
        <GlobalProvider>
            <div className="flex app">
                <div className="flex leftSide">
                    <h1 id="title">Expense Tracker</h1>
                    <Balance></Balance>
                    <TransactionsBox></TransactionsBox>
                    <CategoriesBox></CategoriesBox>
                </div>    
                <HistoryBox></HistoryBox>
            </div>
        </GlobalProvider>
    );
}

export default Dashboard;