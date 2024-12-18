import data from "../utils/db.json"


export default function Graphic({GraphicId,title}){

    
    return (
        <>
            <h3>{title}</h3>
            <div id={GraphicId} className='graphic'></div>
        </>
    )
}