const mapping: Record<string, string> = {
  clients: 'client',
  finances: 'finance',
  memberships: 'membership',
  ngos: 'ngo',
  payments: 'payment',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
