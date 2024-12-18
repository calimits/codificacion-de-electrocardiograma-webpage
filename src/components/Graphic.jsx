import { useEffect } from "react"
import plotECG from "../utils/plotECG"
import './Graphic.css'


export default function Graphic({GraphicId,title,xAxisData, yAxisData}){

    useEffect(()=>{
        plotECG(xAxisData,yAxisData, title,GraphicId);
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