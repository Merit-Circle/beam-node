/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetAssetsResponse = {
  data: Array<{
    marketplaceId: string;
    name: string;
    imageUrl: string | null;
    assetType: string;
    assetAddress: string;
    assetId: string;
    quantity: number;
  }>;
  pagination: {
    count: number;
    limit?: number;
    offset?: number;
  };
};
