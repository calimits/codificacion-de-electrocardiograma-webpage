import { Link } from "react-router";
import './NavigationBar.css';
import pict from '../assets/icons/7399402.png'



export default function NavigationBar(){
    return (
        <div className="NavigationBar-container">
        <img src={pict} alt="ECR" />
        <h4>Codificación de un <span className="c-red">electrocardiograma</span> con la menor cantidad de niveles posible</h4>
        <nav>
        <Link to="/" className="links b-red" >Inicio</Link>
        <Link to="/about" className="links b-blue" >Acerca</Link>
        <Link to="/docs" className="links b-green" >Documentos</Link>
        <Link to="/signalcoded" className="links b-black" >ECR</Link>
        </nav>
        </div>
    );
}