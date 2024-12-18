

const LEVEL8 = [
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



function findClosestLevel(point,levels){
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

let data = [0.2, 1, 1.2, -0.23, -0.5];
console.log(codeSignal(LEVEL8,data));