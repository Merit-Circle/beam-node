/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AddContractRequestInput = {
  address: string;
  type: AddContractRequestInput.type;
  abi: any[];
  name: string;
};

export namespace AddContractRequestInput {
  export enum type {
    ERC20 = 'ERC20',
    ERC721 = 'ERC721',
    ERC1155 = 'ERC1155',
  }
}
