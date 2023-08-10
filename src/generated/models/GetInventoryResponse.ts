/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetInventoryResponse = {
  object: string;
  nftAssets?: Array<{
    assetType:
      | 'NUMBER_1'
      | 'NUMBER_2'
      | 'NUMBER_3'
      | 'NUMBER_4'
      | 1
      | 2
      | 3
      | 4;
    address?: string;
    tokenId?: number;
    amount?: string;
  }>;
  nativeAsset?: {
    assetType: GetInventoryResponse.assetType;
    address?: string;
    tokenId?: number;
    amount?: string;
  };
  tokenAssets?: Array<{
    assetType:
      | 'NUMBER_1'
      | 'NUMBER_2'
      | 'NUMBER_3'
      | 'NUMBER_4'
      | 1
      | 2
      | 3
      | 4;
    address?: string;
    tokenId?: number;
    amount?: string;
  }>;
};

export namespace GetInventoryResponse {
  export enum assetType {
    NUMBER_1 = 'NUMBER_1',
    NUMBER_2 = 'NUMBER_2',
    NUMBER_3 = 'NUMBER_3',
    NUMBER_4 = 'NUMBER_4',
    _1 = 1,
    _2 = 2,
    _3 = 3,
    _4 = 4,
  }
}
