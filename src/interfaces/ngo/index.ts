import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface NgoInterface {
  id?: string;
  name: string;
  description?: string;
  address: string;
  phone_number: string;
  email: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface NgoGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  email?: string;
  user_id?: string;
}
