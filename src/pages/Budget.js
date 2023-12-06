import {UserPieChart} from '../components/UserPieChart'
import { PieInput } from '../components/PieInput'
import { PieProvider } from '../context/PieContext';
import { Suggested } from '../components/Suggested';

const Budget = () => {

    return(
        <PieProvider>
            <div className="flex app">
                <div>
                    <h1>Budget</h1>
                    <UserPieChart></UserPieChart>
                    <h5>*Displayed as rounded percentages on hover*</h5>
                    <Suggested></Suggested>
                </div>
                <PieInput></PieInput>
            </div>
        </PieProvider>

    );
}

export default Budget;