import {Role} from './role';
import {Formation} from './formation.models';

export class User {
  id: number;
  username: string;
  password: string;
  email: string;
  tel: string;
  photo: string;
  role: Role[];
}
