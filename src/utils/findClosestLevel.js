
export default function findClosestLevel(point,levels){
    let closestCurrentLevel = {value: 100, code: ""};
    levels.forEach(level=>{
        closestCurrentLevel = Math.abs(point-level.value) < Math.abs(closestCurrentLevel.value-point) ?
        (level) : (closestCurrentLevel);
    })
    return closestCurrentLevel;
}