import {UserPieChart} from '../components/UserPieChart'
import { PieInput } from '../components/PieInput'
import { PieProvider } from '../context/PieContext';

const Budget = () => {

    return(
        <PieProvider>
            <div className="flex app">
                <div>
                    <h1>Budget</h1>
                    <UserPieChart></UserPieChart>
                </div>
                <PieInput></PieInput>
            </div>
        </PieProvider>

    );
}

export default Budget;