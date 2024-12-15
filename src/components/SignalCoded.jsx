import './SignalCoded.css'


export default function SignalCoded(){
    return (
    <div className="signal-coded-container">
        <h1>Codificación de electrocardiograma</h1>
        <section className="control-buttons">
            <button>4 niveles</button>
            <button>8 niveles</button>
            <button>16 niveles</button>
        </section>
        <canvas className='canvas-graph' id="uncoded-signal"></canvas>
        <canvas className='canvas-graph' id="coded-signal"></canvas>
        
    </div>);
}