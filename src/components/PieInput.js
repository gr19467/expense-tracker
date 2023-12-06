import { useContext, useState } from "react"
import { PieContext } from "../context/PieContext";

export const PieInput = () => {

    const [hous, setHous] = useState(0);
    const [trans, setTrans] = useState(0);
    const [food, setFood] = useState(0);
    const [util, setUtil] = useState(0);
    const [med, setMed] = useState(0);
    const [save, setSave] = useState(0);
    const [pers, setPers] = useState(0);
    const [ent, setEnt] = useState(0);
    const [oth, setOth] = useState(0);

    const { calculateBudget } = useContext(PieContext);

    function calculate(){
        const total = parseInt(hous) + parseInt(trans) + parseInt(food) + parseInt(util) + parseInt(med) + parseInt(save) + parseInt(pers) + parseInt(ent) + parseInt(oth);
        console.log(total);

        console.log(hous);
        console.log(trans);
        console.log(food);
        console.log(util);
        console.log(med);
        console.log(save);
        console.log(pers);
        console.log(ent);
        console.log(oth);

        const newCalculation = {
            hous: Math.round((hous/total) * 100),
            trans: Math.round((trans/total) * 100),
            food: Math.round((food/total) * 100),
            util: Math.round((util/total) * 100),
            med: Math.round((med/total) * 100),
            save: Math.round((save/total) * 100),
            pers: Math.round((pers/total) * 100),
            ent: Math.round((ent/total) * 100),
            oth: Math.round((oth/total) * 100)
        }

        console.log(newCalculation);

        calculateBudget(newCalculation);
    }

    return (
        <div className="flex budget box">
            <h1>Enter monthly expense (without $ sign) to calculate budget</h1>
            <div className="flex cols">
                <div className="flex col">
                    <label>Housing:</label>
                    <label>Transportation:</label>
                    <label>Food:</label>
                    <label>Utilities:</label>
                    <label>Medical/Healthcare:</label>
                    <label>Savings/Debt Payments:</label>
                    <label>Personal:</label>
                    <label>Entertainment:</label>
                    <label>Other:</label>
                </div>
                <div className="flex col">
                    <input placeholder="$0.00" type="number" value={hous} onChange={(e) => setHous(e.target.value)}></input>
                    <input placeholder="$0.00" type="number" value={trans} onChange={(e) => setTrans(e.target.value)}></input>
                    <input placeholder="$0.00" type="number" value={food} onChange={(e) => setFood(e.target.value)}></input>
                    <input placeholder="$0.00" type="number" value={util} onChange={(e) => setUtil(e.target.value)}></input>
                    <input placeholder="$0.00" type="number" value={med} onChange={(e) => setMed(e.target.value)}></input>
                    <input placeholder="$0.00" type="number" value={save} onChange={(e) => setSave(e.target.value)}></input>
                    <input placeholder="$0.00" type="number" value={pers} onChange={(e) => setPers(e.target.value)}></input>
                    <input placeholder="$0.00" type="number" value={ent} onChange={(e) => setEnt(e.target.value)}></input>
                    <input placeholder="$0.00" type="number" value={oth} onChange={(e) => setOth(e.target.value)}></input>
                </div>                
            </div>
            <div id="calculate" onClick={calculate}>Calculate</div>
        </div>
    )
}