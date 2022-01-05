import { Fundere } from "./fundere.models";
import { Jobe } from "./jobe.models";
import { Modality } from "./modality.models";
import {Domaine} from './domaine';

export class Event{
    id : number;
    title : string;
    description: string;
    rate:string;
    duration: string;
    conditions: string;
    targetedaudience:string;
    object:string;
    exammodalities:string;
    program:string;
    photo: string;
    domaines: Domaine[];
    modalitys: Modality[];
    jobes: Jobe[];
    funderes: Fundere[];
}
