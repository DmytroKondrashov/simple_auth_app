export type UserDetails = {
  email: string;
  displayName: string;
  accessToken: string;
};

export type AccountDetails = {
  ownerFirstName: string;
  ownerLastName: string;
  ownerAddress: string;
  createdAt: Date;
  paid: boolean;
};
