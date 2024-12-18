import Graphic from './Graphic';
import './SignalCoded.css'
import data from "../utils/db.json"
import SelectList from './SelectList';
import { useState } from 'react';
//Refactorizar el código para cumplir open/closed principle
//crear un map, donde la key sean las opciones, y en el cuerpo
//traiga un objeto con los datos a graficar

export default function SignalCoded(){
    const [selectValue, setSelectValue] = useState("D1");
    const [codedData,setCodedData] = useState(null);
    


    const handleSelectChange = (e) =>{
        setSelectValue(e.target.value);
    }

    return (
    <div className="signal-coded-container">
        <h1>Codificación de electrocardiograma</h1>
        <SelectList setCodedData={setCodedData} handleSelectChange={e => handleSelectChange(e)}></SelectList>
        {selectValue === "D1"?(
            <Graphic title="Derivación D1" GraphicId="ECGD1"
            xAxisData={data.ECGDerivations[0].t} 
            yAxisData={data.ECGDerivations[1].ecgD1} setCodedData={setCodedData}></Graphic>
        ):(null)} 
        {selectValue === "D2"?(
            <Graphic title="Derivación D2" GraphicId="ECGD2"
            xAxisData={data.ECGDerivations[0].t} 
            yAxisData={data.ECGDerivations[2].ecgD2} setCodedData={setCodedData}></Graphic>
        ):(null)}
        {selectValue === "D3"?(
            <Graphic title="Derivación D3" GraphicId="ECGD3"
            xAxisData={data.ECGDerivations[0].t} 
            yAxisData={data.ECGDerivations[3].ecgD3} setCodedData={setCodedData}></Graphic>
        ):(null)}
        {selectValue === "AVR"?(
            <Graphic title="Derivación aVR" GraphicId="ECGAVR"
            xAxisData={data.ECGDerivations[0].t} 
            yAxisData={data.ECGDerivations[4].ecgAVR} setCodedData={setCodedData}></Graphic>
        ):(null)}
        {selectValue === "AVL"?(
            <Graphic title="Derivación aVL" GraphicId="ECGAVL"
            xAxisData={data.ECGDerivations[0].t} 
            yAxisData={data.ECGDerivations[5].ecgAVL} setCodedData={setCodedData}></Graphic>
        ):(null)}
        {selectValue === "AVF"?(
            <Graphic title="Derivación aVF" GraphicId="ECGAVF"
            xAxisData={data.ECGDerivations[0].t} 
            yAxisData={data.ECGDerivations[6].ecgAVF} setCodedData={setCodedData}></Graphic>
        ):(null)}
        {selectValue === "V1"?(
            <Graphic title="Derivación V1" GraphicId="ECGV1"
            xAxisData={data.ECGDerivations[0].t} 
            yAxisData={data.ECGDerivations[7].ecgV1} setCodedData={setCodedData}></Graphic>
        ):(null)}
        {selectValue === "V2"?(
            <Graphic title="Derivación V2" GraphicId="ECGV2"
            xAxisData={data.ECGDerivations[0].t} 
            yAxisData={data.ECGDerivations[8].ecgV2} setCodedData={setCodedData}></Graphic>
        ):(null)}
        {selectValue === "V3"?(
            <Graphic title="Derivación V3" GraphicId="ECGV3"
            xAxisData={data.ECGDerivations[0].t} 
            yAxisData={data.ECGDerivations[9].ecgV3} setCodedData={setCodedData}></Graphic>
        ):(null)}
        {selectValue === "V4"?(
            <Graphic title="Derivación V4" GraphicId="ECGV4"
            xAxisData={data.ECGDerivations[0].t} 
            yAxisData={data.ECGDerivations[10].ecgV4} setCodedData={setCodedData}></Graphic>
        ):(null)}
        {selectValue === "V5"?(
            <Graphic title="Derivación V5" GraphicId="ECGV5"
            xAxisData={data.ECGDerivations[0].t} 
            yAxisData={data.ECGDerivations[11].ecgV5} setCodedData={setCodedData}></Graphic>
        ):(null)}
        {selectValue === "V6"?(
            <Graphic title="Derivación V6" GraphicId="ECGD6"
            xAxisData={data.ECGDerivations[0].t} 
            yAxisData={data.ECGDerivations[12].ecgV6} setCodedData={setCodedData}></Graphic>
        ):(null)}
        {selectValue === "Taquicardia"?(
            <Graphic title="Taq." GraphicId="Taq"
            xAxisData={data.ECGExamples[0].xTrouble} 
            yAxisData={data.ECGExamples[1].ecgTaquicardia} setCodedData={setCodedData}></Graphic>
        ):(null)}
        {selectValue === "FA"?(
            <Graphic title="FA" GraphicId="FA"
            xAxisData={data.ECGExamples[0].xTrouble} 
            yAxisData={data.ECGExamples[2].ecgFA} setCodedData={setCodedData}></Graphic>
        ):(null)}
        {codedData ?(
            <Graphic title="Señal después de la codificación y decodificación"
            GraphicId="CodedSignal"
            xAxisData={data.ECGExamples[0].t} 
            yAxisData={codedData} disabled={true}></Graphic>
        ):(null)}
    </div>);
}