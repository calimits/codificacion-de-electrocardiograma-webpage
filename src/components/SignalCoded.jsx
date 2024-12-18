import Graphic from './Graphic';
import './SignalCoded.css'
import data from "../utils/db.json"


export default function SignalCoded(){
    return (
    <div className="signal-coded-container">
        <h1>Codificación de electrocardiograma</h1>
        <Graphic title="ECG D1" GraphicId="ECGD1"
        xAxisData={data.ECGDerivations[0].t} 
        yAxisData={data.ECGDerivations[1].ecgD1}></Graphic>
        
    </div>);
}