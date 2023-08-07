/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetAssetListingsResponse = {
  data: Array<{
    id: string;
    price: string | null;
    sellType: string;
    startPrice: string | null;
    endPrice: string | null;
    platformFee: number;
    currency: string;
    startTime: string | null;
    endTime: string | null;
    quantityListed: number;
    signedOrderId: string;
    expiresAt: string;
    userId: string;
    contractId: string;
    nft: {
      id: string;
      name: string;
      imageUrl: string | null;
      assetType: string;
      assetAddress: string;
      quantity: number;
    };
  }>;
  pagination: {
    count: number;
    limit?: number;
    offset?: number;
  };
};
