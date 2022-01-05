import {Formation} from './formation.models';
import {User} from './User';
import {Event} from './event.models';

export class Panier {
  id: number;
  etatPanier: boolean;
  training: Formation;
  event: Event;
  user: User;
}
