/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetGameResponse = {
  id: number;
  name: string;
  contracts: Array<{
    type: 'ERC20' | 'ERC721' | 'ERC1155' | 'SEAPORT';
    id: string;
    address: string;
    chainId: number;
    gameId: number;
  }>;
  policies: Array<{
    model: 'ContractFunctions' | 'AccountFunctions';
    type: 'PayForUser' | 'ChargeCustomToken';
    id: string;
    name: string;
    chainId: number;
    gameId: number;
    token: string | null;
    exchangeRate: string | null;
  }>;
};

