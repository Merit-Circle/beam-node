/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateTransactionRequestInput = {
  interactions: Array<{
    contractAddress: string;
    functionName: string;
    functionArgs?: Array<any>;
    value?: string;
  }>;
  optimistic: boolean;
  policyId?: string;
  sponsor?: boolean;
};

