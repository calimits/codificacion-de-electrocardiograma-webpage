import { LEVEL16, LEVEL32, LEVEL8 } from "./levelsData";

export default function decodeSignal(codedData){
    let decodedSignal = [];
    codedData.forEach(pointCoded => {
        decodedSignal.push(pointCoded.value)
    });
    return decodedSignal;
}