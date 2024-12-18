

export default function SelectList(props){

    return(
        <>
        <select onChange={props.handleSelectChange} name="derivations" id="derivations">
            <option value="wasa">D1</option>
            <option value="d2">D2</option>
        </select>
        </>
    )
}