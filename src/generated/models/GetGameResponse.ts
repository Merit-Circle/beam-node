/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetGameResponse = {
  id: string;
  name: string;
  description: string | null;
  coverImageUrl: string | null;
  contracts: Array<{
    type: 'ERC20' | 'ERC721' | 'ERC1155' | 'SEAPORT';
    id: string;
    externalId: string;
    address: string;
    name: string;
    chainId: number;
    gameId: string;
  }>;
  policies: Array<{
    model: 'ContractFunctions' | 'AccountFunctions';
    type: 'PayForUser' | 'ChargeCustomToken';
    id: string;
    name: string;
    chainId: number;
    gameId: string;
    token: string | null;
    exchangeRate: string | null;
  }>;
};

