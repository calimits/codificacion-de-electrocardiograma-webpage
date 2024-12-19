import { useEffect, useState } from "react"
import plotECG from "../utils/plotECG"
import './Graphic.css'
import codeSignal from "../utils/codeSignal";
import { LEVEL16, LEVEL32, LEVEL8 } from "../utils/levelsData";
import decodeSignal from "../utils/decodeSignal";
import { LEVELS128, LEVELS256, LEVELS64 } from "../utils/moreLevels";
import { data } from "react-router";




export default function Graphic({GraphicId,title,xAxisData, yAxisData,setCodedData,disabled}){
    const [unable,setUnable] = useState(false);

    useEffect(()=>{
        plotECG(xAxisData,yAxisData, title,GraphicId);
    },[]);


    const handleClick = (e) => {
        setUnable(true);
        console.log(e.target.value);
        let decodedSignal = [];
        if (e.target.value === "8") {
            console.log("jelou en 8")
            decodedSignal = decodeSignal(codeSignal(LEVEL8,yAxisData));
            console.log(decodedSignal);
        };
        if (e.target.value === "16") {
            decodedSignal = decodeSignal(codeSignal(LEVEL16,yAxisData));
            console.log(decodedSignal);
        };
        if (e.target.value === "32") {
            decodedSignal = decodeSignal(codeSignal(LEVEL32,yAxisData));
            console.log(decodedSignal);
        };
        if (e.target.value === "64") {
            decodedSignal = decodeSignal(codeSignal(LEVELS64,yAxisData));
            console.log(decodedSignal);
        };
        if (e.target.value === "128") {
            decodedSignal = decodeSignal(codeSignal(LEVELS128,yAxisData));
            console.log(decodedSignal);
        };
        if (e.target.value === "256") {
            decodedSignal = decodeSignal(codeSignal(LEVELS256,yAxisData));
            console.log(decodedSignal);
        };
        setCodedData([...decodedSignal]);
    }

    const handleReset = (e) => {
        setUnable(false);
        setCodedData(null);
    }


    return (
        <div className="graphic-container">
            <div id={GraphicId} className='graphic'></div>
            <section className="control-buttons">
                <button disabled={unable||disabled} value={8} onClick={e=>handleClick(e)}>8 niveles</button>
                <button disabled={unable||disabled} value={16} onClick={e=>handleClick(e)}>16 niveles</button>
                <button disabled={unable||disabled} value={32} onClick={e=>handleClick(e)}>32 niveles</button>
                <button disabled={unable||disabled} value={64} onClick={e=>handleClick(e)}>64 niveles</button>
                <button disabled={unable||disabled} value={128} onClick={e=>handleClick(e)}>128 niveles</button>
                <button disabled={unable||disabled} value={256} onClick={e=>handleClick(e)}>256 niveles</button>
                <button disabled={disabled} value={32} onClick={e=>handleReset(e)}>Reset</button>
            </section>
        </div>
    )
}