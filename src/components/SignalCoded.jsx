import Graphic from './Graphic';
import './SignalCoded.css'
import data from "../utils/db.json"
import SelectList from './SelectList';
import { useState } from 'react';


export default function SignalCoded(){
    const [selectValue, setSelectValue] = useState("d1");

    console.log(selectValue);

    const handleSelectChange = (e) =>{
        setSelectValue(e.target.value);
    }

    return (
    <div className="signal-coded-container">
        <h1>Codificación de electrocardiograma</h1>
        <SelectList handleSelectChange={e => handleSelectChange(e)}></SelectList>
        <Graphic title="ECG D1" GraphicId="ECGD1"
        xAxisData={data.ECGDerivations[0].t} 
        yAxisData={data.ECGDerivations[1].ecgD1}></Graphic>
        
    </div>);
}