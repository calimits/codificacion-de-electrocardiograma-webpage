import { Link } from "react-router";
import './NavigationBar.css'

export default function NavigationBar(){
    return (
        <nav>
        <Link to="/" className="links b-red" >Inicio</Link>
        <Link to="/about" className="links b-blue" >Acerca</Link>
        <a href="https:/www.github.com" target="_blank" className="links b-green" >Github</a>
        <Link to="/signalcoded" className="links b-black" >ECG</Link>
        </nav>
    );
} 