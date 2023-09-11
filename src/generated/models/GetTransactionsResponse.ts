/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetTransactionsResponse = {
  data: Array<{
    id: string;
    createdAt: number;
    updatedAt: number;
    chainId: number;
    userOperationHash?: string;
    userOperation?: any;
    response?: {
      createdAt: number;
      blockNumber?: number;
      transactionHash?: string;
      l1GasUsed?: string;
      gasUsed?: number;
      status?: number;
      logs?: Array<{
        blockNumber: number;
        blockHash: string;
        transactionIndex: number;
        removed?: boolean;
        address: string;
        data: string;
        topics: Array<string>;
        transactionHash: string;
        logIndex: number;
      }>;
      to?: string;
      error?: any;
    };
    interactions?: Array<{
      to?: string;
      contract?: string;
      value?: string;
      functionName?: string;
      functionArgs?: Array<any>;
    }>;
  }>;
  pagination: {
    count: number;
    limit?: number;
    offset?: number;
  };
};

