import Graphic from './Graphic';
import './SignalCoded.css'



export default function SignalCoded(){
    return (
    <div className="signal-coded-container">
        <h1>Codificación de electrocardiograma</h1>
        <Graphic title="ECG D1" GraphicId="ECGD!"></Graphic>
        
    </div>);
}