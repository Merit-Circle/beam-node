/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetAllProfilesResponse = {
  data: Array<{
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
  }>;
  pagination: {
    count: number;
    limit?: number;
    offset?: number;
  };
};
