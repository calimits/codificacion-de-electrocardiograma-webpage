import "./SelectList.css"

export default function SelectList({handleSelectChange,setCodedData}){

    const handleChange = (e) =>{
        handleSelectChange(e);
        setCodedData(null);
    }
    return(
        <div className="select-list">
        <label htmlFor="derivations">Seleccione una derivación o afectación</label>
        <select onChange={handleChange} name="derivations" id="derivations">
            <option value="D1">Derivación D1</option>
            <option value="D2">Derivación D2</option>
            <option value="D3">Derivación D3</option>
            <option value="V1">Derivación V1</option>
            <option value="V2">Derivación V2</option>
            <option value="V3">Derivación V3</option>
            <option value="V4">Derivación V4</option>
            <option value="V5">Derivación V5</option>
            <option value="V6">Derivación V6</option>
            <option value="AVF">Derivación AVF</option>
            <option value="AVR">Derivación AVR</option>
            <option value="AVL">Derivación AVL</option>
            <option value="Taquicardia">Taquicardia</option>
            <option value="FA">FA</option>
        </select>
        </div>
    )
}

