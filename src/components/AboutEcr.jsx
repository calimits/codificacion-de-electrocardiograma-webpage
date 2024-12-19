
import './AboutEcr.css'

let codeFunctions = `function findClosestLevel(point,levels){
    let closestCurrentLevel = {value: 100, code: ""};
    levels.forEach(level=>{
        closestCurrentLevel = Math.abs(point-level.value) < Math.abs(closestCurrentLevel.value-point) ?
        (level) : (closestCurrentLevel);
    })
    return closestCurrentLevel;
}
    function codeSignal(levels,data){
    let pointsCoded = [];
    data.forEach(point => {
        pointsCoded.push(findClosestLevel(point,levels));
    });
    return pointsCoded;
}
`;
let codeLEVELS = `const LEVEL8 = [
        {value: 2, code: "000"},
        {value: 1.5, code: "001"},
        {value: 1, code: "010"},
        {value: 0.18, code: "011"},
        {value: 0, code: "100"},
        {value: -0.18, code: "101"},
        {value: -0.3, code: "110"},
        {value: -0.64, code: "111"}
    ];


const LEVEL16 = [
    {value: 2, code: "0000"},
    {value: 1.75, code: "0001"},
    {value: 1.5, code: "0010"},
    {value: 1.25, code: "0011"},
    {value: 1, code: "0100"},
    {value: 0.7, code: "0101"},
    {value: 0.4, code: "0110"},
    {value: 0.25, code: "0111"},
    {value: 0.18, code: "1000"},
    {value: 0.1, code: "1001"},
    {value: 0, code: "1010"},
    {value: -0.1, code: "1011"},
    {value: -0.18, code: "1100"},
    {value: -0.3, code: "1101"},
    {value: -0.5, code: "1101"},
    {value: -0.64, code: "1111"}
];

const LEVEL32 = [
    {value: 3, code: "00000"},
    {value: 2.5, code: "00001"},
    {value: 2, code: "00010"},
    {value: 1.88, code: "00011"},
    {value: 1.75, code: "00100"},
    {value: 1.62, code: "00101"},
    {value: 1.5, code: "00110"},
    {value: 1.33, code: "00111"},
    {value: 1.25, code: "01000"},
    {value: 1.12, code: "01001"},
    {value: 1, code: "01010"},
    {value: 0.85, code: "01011"},
    {value: 0.7, code: "01100"},
    {value: 0.55, code: "01101"},
    {value: 0.4, code: "01110"},
    {value: 0.32, code: "01111"},
    {value: 0.25, code: "10000"},
    {value: 0.18, code: "10001"},
    {value: 0.13, code: "10010"},
    {value: 0.1, code: "10011"},
    {value: 0.07, code: "10100"},
    {value: 0.03, code: "10101"},
    {value: 0, code: "10110"},
    {value: -0.03, code: "10111"},
    {value: -0.07, code: "11000"},
    {value: -0.1, code: "11001"},
    {value: -0.13, code: "11010"},
    {value: -0.18, code: "11011"},
    {value: -0.25, code: "11100"},
    {value: -0.3, code: "11101"},
    {value: -0.5, code: "11110"},
    {value: -0.64, code: "11111"}
];`;

export default function AboutEcr(){
    return (<>

            <h1>Codificación de señal</h1>
            <hr />
            <h2>Selección de niveles</h2>
            <p>Para la selección de niveles es necesario un conocimiento sobre 
                las características principales de la onda a codificar. En este caso,
                para codificar una onda de electrocardiograma, es imprescindible el conocimiento
                de las 12 derivaciones, pues según la colocación de los electrodos en el cuerpo 
                humano, cada forma de onda de cada derivación es diferente, y representa distintas
                características del corazón.
            </p>
            <br />
            <p>Teniendo lo anterior en cuenta, y a partir de un estudio sobre las ondes P, T,
                U y el complejo QRS, mediante el cual se escogieron meticulosamente, los niveles para
                la codificación de la señal en dependencia de las diferentes amplitudes de cada onda.
                Los niveles escogidos se muestran a continuación:
            </p>
            <br />
            <pre>
                <code>
                    {codeLEVELS}
                </code>
            </pre>
            <p>Como se puede apreciar, los niveles fueron escogidos de forma no equiespaciada,
                para un mayor control sobre la onda codificada.
            </p>
            <br />

            <h2>Función de codificación</h2>
            <p>La función para la codificación se encarga de aproximar cada punto muestreado
                al nivel más cercano. 
            </p>
            <br />
            <pre>
                <code>
                    {codeFunctions}
                </code>
            </pre>
            <br />
            <p>Claramente, como se puede apreciar, todo lo que se utiliza en esta página 
                web son simulaciones, las cuales fueron realizadas con Matlab, gracias al trabajo de
                R. Karthik. 
            </p>
            <br />
            <p>En el repositorio de GitHub se encuentra el código fuente, así como el contenido
                adicional utilizdao para el desarrollo de la página web, lo que incluye las funciones de 
                simulación de electrocardiogramas para matlab.
                EL código está abierto a su descarga y modificación.
            </p>
            <br />
            <p>Por último se decidió utlizar más niveles, para la codificación, los cuales sí son
                equiespaciados, y como la cantidad se incrementa considerablemnte, se decidió generarlos
                a partir de funciones en Matlab.
            </p>
            <br />
            <h2>Conclusiones</h2>
            <p>A partir del análisis y comparación de la señal original, y la señal codificada
                es evidente que para 8 y 16 niveles, la onda resultante carece de información necesaria 
                para la comprensión de los doctores. A partir de 32 niveles la onde resultante, es bastante similar 
                a la original, sin embargo aún existen diferencias que podrían conduicr a errores en la lectura
                del electrocardiograma. Por tanto, como mínimo se necesitan 32 niveles, lo cual no significa que 
                sean recomendables.
            </p>
            <br />
            <br />
            <br />
            <br />

        </>);
}