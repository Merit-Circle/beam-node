/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateTransactionRequestInput = {
  playerId: string;
  chainId: number;
  interactions: Array<{
    contract: string;
    functionName: string;
    functionArgs: Array<any>;
  }>;
  optimistic: boolean;
  policyId?: string;
  discriminator?: string;
  attributeTypes: string;
};

