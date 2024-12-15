import NavigationBar from "./NavigationBar";
import './Header.css'
import pict from '../assets/icons/7399402.png'

export default function Header(){
    return(
        <div className="header-container">
        <img src={pict} alt="ECR" />
        <h4>Codificación de un <span className="c-red">electrocardiograma</span> con la menor cantidad de niveles posible</h4>
        <NavigationBar></NavigationBar>
        </div>
    );
}