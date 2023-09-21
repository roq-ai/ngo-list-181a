import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MembershipInterface {
  id?: string;
  membership_type: string;
  start_date: any;
  end_date: any;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface MembershipGetQueryInterface extends GetQueryInterface {
  id?: string;
  membership_type?: string;
  user_id?: string;
}
