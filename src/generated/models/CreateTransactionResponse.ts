/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateTransactionResponse = {
  policy?: {
    transactionIntents?: Array<{
      nextAction?: {
        type: 'sign_with_wallet';
        payload: {
          userOp?: any;
          userOpHash?: string;
        };
      };
      policy?: any;
      player?: {
        transactionIntents?: any[];
        accounts?: Array<{
          transactionIntents?: any[];
          id: string;
          object: 'account';
          createdAt: number;
          address: string;
          ownerAddress: string;
          deployed: boolean;
          custodial: boolean;
          chainId: number;
          accountType: string;
          pendingOwnerAddress?: string;
        }>;
        id: string;
        object: 'player';
        createdAt: number;
        name: string | null;
        description: string | null;
        metadata: string;
      };
      account?: any;
      id: string;
      object: 'transactionIntent';
      createdAt: number;
      updatedAt: number;
      chainId: number;
      userOperationHash?: string;
      userOperation?: any;
      response?: {
        createdAt: number;
        blockNumber?: number;
        transactionHash?: string;
        gasUsed?: number;
        status?: number;
        logs?: Array<{
          blockNumber: number;
          blockHash: string;
          transactionIndex: number;
          removed: boolean;
          address: string;
          data: string;
          topics: string[];
          transactionHash: string;
          logIndex: number;
        }>;
        to?: string;
        error?: any;
      };
      interactions?: Array<{
        contract?: string;
        value?: string;
        functionName: string;
        functionArgs: any[];
      }>;
    }>;
    policyRules?: Array<{
      id: string;
      object: 'policyRule';
      createdAt: number;
      contract?: {
        id: string;
        object: 'contract';
        createdAt: number;
        name: string | null;
        chainId: number;
        address: string;
        deleted: boolean;
        abi: Array<{
          name?: string;
          type?: string;
          anonymous?: boolean;
          payable?: boolean;
          constant?: boolean;
          stateMutability?: string;
          gas?: string;
          inputs?: Array<{
            name?: string;
            type?: string;
            indexed?: boolean;
            internalType?: any;
            components?: any[];
          }>;
          outputs?: any[];
        }>;
        publicVerification: boolean;
      };
      type: 'contract_functions' | 'account_functions';
      functionName?: string;
    }>;
    id: string;
    object: CreateTransactionResponse.object;
    createdAt: number;
    name: string | null;
    deleted: boolean;
    chainId: number;
    strategy: {
      sponsorSchema: CreateTransactionResponse.sponsorSchema;
      tokenContract?: string;
      tokenContractAmount?: string;
    };
  };
  player?: any;
  account?: any;
  id: string;
  object: CreateTransactionResponse.object;
  createdAt: number;
  updatedAt: number;
  chainId: number;
  userOperationHash?: string;
  userOperation?: any;
  response?: {
    createdAt: number;
    blockNumber?: number;
    transactionHash?: string;
    gasUsed?: number;
    status?: number;
    logs?: Array<{
      blockNumber: number;
      blockHash: string;
      transactionIndex: number;
      removed: boolean;
      address: string;
      data: string;
      topics: string[];
      transactionHash: string;
      logIndex: number;
    }>;
    to?: string;
    error?: any;
  };
  interactions?: Array<{
    contract?: string;
    value?: string;
    functionName: string;
    functionArgs: any[];
  }>;
};

export namespace CreateTransactionResponse {
  export enum object {
    POLICY = 'policy',
  }

  export enum sponsorSchema {
    PAY_FOR_USER = 'pay_for_user',
    CHARGE_CUSTOM_TOKENS = 'charge_custom_tokens',
  }
}
