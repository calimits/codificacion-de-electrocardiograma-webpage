import { useEffect } from "react"
import data from "../utils/db.json"
import plotECG from "../utils/plotECG"
import './Graphic.css'


export default function Graphic({GraphicId,title}){
    const t = data.ECGDerivations[0].t;
    const y = data.ECGDerivations[1].ecgD1;

    useEffect(()=>{
        plotECG(t,y,title,GraphicId);
    },[]);

    return (
        <div className="graphic-container">
            <h3>{title}</h3>
            <div id={GraphicId} className='graphic'></div>
            <section className="control-buttons">
                <button>4 niveles</button>
                <button>8 niveles</button>
                <button>16 niveles</button>
            </section>
        </div>
    )
}