import Plotly from 'plotly.js-dist-min'


export default function plotECG(xAxis,yAxis,GraphTitle,GraphId) {
    const trace = {
        x: xAxis,
        y: yAxis,
        type: 'scatter',
        mode: 'lines',
        line: { color: 'blue', width: 2 }
    };
    const layout = {
        title: GraphTitle,
        xaxis: { title: 'Tiempo (s)' },
        yaxis: { title: 'Amplitud (mV)' }
    };
    Plotly.newPlot(GraphId, [trace], layout);
    console.log(xAxis);
}
