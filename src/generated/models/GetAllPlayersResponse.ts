/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetAllPlayersResponse = {
  data: Array<{
    id: string;
    identifier: string;
    accounts: Array<{
      id: string;
      playerId: string;
      address: string;
      chainId: number;
      custodial: boolean;
    }>;
  }>;
  pagination: {
    count: number;
    limit?: number;
    offset?: number;
  };
};
