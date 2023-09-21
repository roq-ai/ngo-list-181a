import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FinanceInterface {
  id?: string;
  budget: number;
  expenses: number;
  income: number;
  balance: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface FinanceGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
