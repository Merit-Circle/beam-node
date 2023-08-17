/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetAssetsResponse = {
  data: Array<{
    id: string;
    name: string;
    imageUrl: string | null;
    assetType: string;
    assetAddress: string;
    quantity: number;
  }>;
  pagination: {
    count: number;
    limit?: number;
    offset?: number;
  };
};
