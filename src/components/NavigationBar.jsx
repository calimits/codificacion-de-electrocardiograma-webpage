import { Link } from "react-router";
import './NavigationBar.css'

export default function NavigationBar(){
    return (
        <nav>
        <Link to="/codificacion-de-electrocardiograma-webpage" className="links b-red" >ECG</Link>
        <Link to="/codificacion-de-electrocardiograma-webpage/about" className="links b-blue" >Acerca</Link>
        <a href="https://github.com/calimits/codificacion-de-electrocardiograma-webpage" target="_blank" className="links b-green" >Github</a>
        </nav>
    );
} 