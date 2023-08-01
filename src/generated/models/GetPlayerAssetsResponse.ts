/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetPlayerAssetsResponse = {
  data: Array<{
    name: string;
    imageUrl: string;
    assetType: string;
    assetAddress: string;
    assetId: string;
    quantity: number;
  }>;
  pagination: {
    count: number;
    limit: number;
    offset?: number;
  };
};

