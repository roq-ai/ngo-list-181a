interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Finance Manager', 'Member'],
  tenantName: 'Client',
  applicationName: 'Ngo list',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage user data', 'Manage client data', 'Manage payment data', 'Manage membership data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/c73a9370-7732-4990-9e54-2a5d177e3ca1',
};
