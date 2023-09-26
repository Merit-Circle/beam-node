/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SellAssetRequestInput = {
  marketplaceId: string;
  quantity: number;
  price: string;
  startTime?: string;
  endTime?: string;
  sellType: SellAssetRequestInput.sellType;
  priceTokenAddress: string;
  sponsor?: boolean;
  policyId?: string;
};

export namespace SellAssetRequestInput {
  export enum sellType {
    FIXED_PRICE = 'FixedPrice',
    DESCENDING_AUCTION = 'DescendingAuction',
    ASCENDING_AUCTION = 'AscendingAuction',
    NOT_FOR_SALE = 'NotForSale',
  }
}
