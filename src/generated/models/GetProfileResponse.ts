/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetProfileResponse = {
  id: string;
  gameId: string;
  externalId: string;
  userId: string | null;
  wallets: Array<{
    id: string;
    externalId: string;
    address: string;
    chainId: number;
    custodial: boolean;
    profileId: string;
  }>;
};

