import {Domaine} from './domaine';
import {Modality} from './modality.models';
import {Jobe} from './jobe.models';
import {Fundere} from './fundere.models';
import {Panier} from './panier';

export class Formation {
    id: number;
    title: string;
    description: string;
    rate: string;
    duration: string;
    conditions: string;
    targetedaudience: string;
    object: string;
    exammodalities: string;
    program: string;
    photo: string;
    domains: Domaine[];
    modalitys: Modality[];
    jobs: Jobe[];
    funders: Fundere[];
    // panier: Panier[];
}
