export type UserDetails = {
  email: string;
  displayName: string;
  accessToken: string;
};

export type AccountDetails = {
  ownerFirstName: string;
  ownerLastName: string;
  ownerAddress: string;
  paid: boolean;
};

export type UpdateAccount = {
  id: string;
  ownerAddress: string;
};
