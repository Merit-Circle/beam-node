/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AddContractResponse = {
  type: AddContractResponse.type;
  id: string;
  address: string;
  chainId: number;
  gameId: number;
};

export namespace AddContractResponse {
  export enum type {
    ERC20 = 'ERC20',
    ERC721 = 'ERC721',
    ERC1155 = 'ERC1155',
  }
}
