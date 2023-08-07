/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetPlayerResponse = {
  id: string;
  identifier: string;
  wallets: Array<{
    id: string;
    playerId: string;
    address: string;
    chainId: number;
    custodial: boolean;
  }>;
};
