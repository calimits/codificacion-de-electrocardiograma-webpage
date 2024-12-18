import findClosestLevel from "./findClosestLevel";
import { LEVEL16, LEVEL32, LEVEL8 } from "./levelsData";

export default function codeSignal(levels,data){
    let pointsCoded = [];
    data.forEach(point => {
        pointsCoded.push(findClosestLevel(point,levels));
    });
    return pointsCoded;
}

