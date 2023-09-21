import axios from 'axios';
import queryString from 'query-string';
import { NgoInterface, NgoGetQueryInterface } from 'interfaces/ngo';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getNgos = async (query?: NgoGetQueryInterface): Promise<PaginatedInterface<NgoInterface>> => {
  const response = await axios.get('/api/ngos', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createNgo = async (ngo: NgoInterface) => {
  const response = await axios.post('/api/ngos', ngo);
  return response.data;
};

export const updateNgoById = async (id: string, ngo: NgoInterface) => {
  const response = await axios.put(`/api/ngos/${id}`, ngo);
  return response.data;
};

export const getNgoById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/ngos/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteNgoById = async (id: string) => {
  const response = await axios.delete(`/api/ngos/${id}`);
  return response.data;
};
