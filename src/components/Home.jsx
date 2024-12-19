import './Home.css';
import NavigationBar from './NavigationBar';
import pict from '../assets/icons/7399402.png'
import { Link } from 'react-router';


export default function Home(){
    return (
        <>
        <article className='home-page'>
        <section className='box b-gray'>
        <div className='section-container'>
        <h1 id="title">Electrocardiograma</h1>
        <p>El electrocardiograma (ECG o EKG, a partir del alemán Elektrokardiogramm) 
            es la representación visual de la actividad eléctrica del corazón en función del 
            tiempo, que se obtiene, desde la superficie corporal, en el pecho, con un electrocardiógrafo 
            en forma de cinta continua. Es el instrumento principal de la electrofisiología cardíaca y tiene 
            una función relevante en el cribado y diagnóstico de las enfermedades cardiovasculares, alteraciones
            metabólicas y la predisposición a una muerte súbita cardíaca. También es útil para saber la duración
            del ciclo cardíaco</p>
            </div>
        </section>
        <section className='box b-gray'>
            <div className='section-container'>
        <h2>Despolarización y repolarización del corazón</h2>
        <p>En el corazón existen tres tipos de células morfológica y funcionalmente diferentes:</p>
        <ul>
            <li>las células contráctilles, responsables de la contracción del miocardio;
                de estas existen células contráctiles auriculares y células 
                contráctiles ventriculares.</li>
            <li>las células especializadas, que son las que generan y conducen los impulsos nerviosos, y constituyen los nódulos sinusal y atrio-ventricular (de conducción lenta),
                el haz de His y las células de Purkinje (de conducción rápida).</li>
            <li>las células endocrinas del corazón, que secretan el péptido natriurético atrial, que es un auxiliar en el control y regulación de la tensión arterial</li>
        </ul>
        <p>Las células cardíacas presentan tres propiedades:</p>
        <ul>
            <li>automatismo: son capaces de generar espontáneamente el impulso eléctrico que se propaga; el automatismo máximo se encuentra en las células del nodo sinoauricular, el marcapasos del corazón, y si este falla, el nodo AV toma el relevo;</li>
            <li>excitabilidad: capacidad de responder a un impulso eléctrico; las células especializadas generan ellas mismas los impulsos, mientras que las contráctiles son estimuladas por los impulsos propagados por las células adyacentes; existen diferentes fases de excitabilidad diferenciadas por el potencial de acción (PA) de las células cardíacas, y diferentes periodos refractarios (tiempo requerido para recuperar la excitabilidad);</li>
            <li>
                <p>conducción: capacidad de transmitir un impulso eléctrico a las células adyacentes; las velocidades de conducción normales en las diferentes estructuras cardíacas son las siguientes:</p>
                <ul>
                    <li>aurículas: 1-2 m/s.</li>
                    <li>nodo AV: 0.02-0.05 m/s.</li>
                    <li>sistema His-Purkinje: 1.5-3.5 m/s.</li>
                    <li>ventrículos: 0.4 m/s.</li>
                </ul>
            </li>
        </ul>
        </div>
        </section>
    <section className='box b-gray'>
        <div className='section-container'>
        <h2>Derivaciones del ECG</h2>
        <p>En electrocardiografía, la palabra "derivaciones" se refiere a la medida del voltaje entre dos electrodos. Los electrodos se colocan sobre el cuerpo del paciente, sujetándolos con cintas de velcro, por ejemplo, y conectados al aparato mediante cables.11​ Las derivaciones de un ECG utilizan diferentes combinaciones de electrodos para medir distintas señales procedentes del corazón: en forma figurada, cada derivación es como una "fotografía" de la actividad eléctrica del corazón, tomada desde un ángulo diferente.</p>
        <h3>Derivaciones periféricas y precordiales</h3>
        <p>El ECG se estructura en la medición del potencial eléctrico entre varios puntos corporales. Las derivaciones I, II y III son periféricas y miden la diferencia de potencial entre los electrodos situados en los miembros:</p>
        <ul>
            <li>la derivación I mide la diferencia de potencial entre el electrodo del brazo derecho y el izquierdo.</li>
            <li>la derivación II, del brazo derecho a la pierna izquierda.</li>
            <li>la derivación III, del brazo izquierdo a la pierna izquierda.</li>
        </ul>
        <p>Las otras nueve derivaciones miden la diferencia de potencial entre el punto 
            imaginario V y cada uno de los electrodos; todas ellas son unipolares, porque, 
            aunque tienen dos polos, el polo negativo V es un polo compuesto por las señales 
            procedentes de diferentes electrodos. Así tenemos las derivaciones periféricas 
            aumentadas (aVR, aVL y aVF) y las seis derivaciones precordiales (V1-6).</p>
        <p>Por lo tanto, hay doce derivaciones en total. Cada una de las cuales registra información de partes concretas del corazón:</p>
        <ul>
            <li>Las derivaciones inferiores (III y aVF) detectan la actividad eléctrica desde el punto superior de la región inferior (pared) del corazón. Esta es la cúspide del ventrículo izquierdo.</li>
            <li>Las derivaciones laterales (I, II, aVL, V5 y V6) detectan la actividad eléctrica desde el punto superior de la pared lateral del corazón, que es la pared lateral del ventrículo izquierdo.</li>
            <li>Las derivaciones anteriores, V1 a V6 representan la pared anterior del corazón o la pared frontal del ventrículo izquierdo.</li>
            <li>aVR raramente se utiliza para la información diagnóstica, pero indica si los electrodos se han colocado correctamente en el paciente.</li>
        </ul>
        </div>
        </section>
        <Link to="/" className="links b-green center" >ECG</Link>
        </article>
        
        </>
    );
}