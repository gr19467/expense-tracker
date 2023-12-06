import { PieChart } from '@mui/x-charts/PieChart';
import { PieContext } from '../context/PieContext'
import { useContext } from 'react';

export const UserPieChart = () => {

    const {categories} = useContext(PieContext);

    for (let i = 0; i < categories.length; i++) {
        const element = categories[i];
        console.log(element);
    }
    
    return (
        <div>
           <PieChart
                colors={["#D12500", "#DA6A00", "#B3FA2E", "#00AD00", "#9DC9DE", "#005B94", "#1E2085", "#600F52", "#953172"]}
                series={[
                    {
                    data: [
                        { id: 0, value: parseInt(categories[0]), label: 'Housing'},
                        { id: 1, value: parseInt(categories[1]), label: 'Transportation' },
                        { id: 2, value: parseInt(categories[2]), label: 'Food' },
                        { id: 3, value: parseInt(categories[3]), label: 'Utilities' },
                        { id: 4, value: parseInt(categories[4]), label: 'Medical/Healthcare' },
                        { id: 5, value: parseInt(categories[5]), label: 'Savings/Debt Payments' },
                        { id: 6, value: parseInt(categories[6]), label: 'Personal' },
                        { id: 7, value: parseInt(categories[7]), label: 'Entertainment' },
                        { id: 8, value: parseInt(categories[8]), label: 'Other' },
                    ],
                    },
                ]}

                width={700}
                height={300}
            />
        </div>
        
    )
}