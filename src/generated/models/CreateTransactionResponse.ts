/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateTransactionResponse = {
  nextAction?: {
    type: CreateTransactionResponse.type;
    payload: {
      userOp?: any;
      userOpHash?: string;
    };
  };
  policy?: {
    id: string;
    object: string;
    createdAt: number;
    name: string | null;
    deleted: boolean;
    chainId: number;
    strategy: {
      sponsorSchema: CreateTransactionResponse.sponsorSchema;
      tokenContract?: string;
      tokenContractAmount?: string;
    };
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
        id: string;
        object: string;
        createdAt: number;
        name: string | null;
        email: string | null;
        description: string | null;
        metadata: string;
        transactionIntents?: Array<any>;
        accounts?: Array<{
          transactionIntents?: Array<any>;
          id: string;
          object: string;
          createdAt: number;
          address: string;
          ownerAddress?: string;
          deployed: boolean;
          custodial: boolean;
          chainId: number;
          accountType: string;
          pendingOwnerAddress?: string;
        }>;
      };
      account?: any;
      id: string;
      object: string;
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
          topics: Array<string>;
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
        functionArgs: Array<any>;
      }>;
    }>;
    policyRules?: Array<{
      id: string;
      object: string;
      createdAt: number;
      type: 'contract_functions' | 'account_functions';
      functionName?: string;
      contract?: {
        id: string;
        object: string;
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
            components?: Array<any>;
          }>;
          outputs?: Array<any>;
        }>;
        publicVerification: boolean;
      };
    }>;
  };
  player?: any;
  account?: any;
  id: string;
  object: string;
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
      topics: Array<string>;
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
    functionArgs: Array<any>;
  }>;
};

export namespace CreateTransactionResponse {

  export enum type {
    SIGN_WITH_WALLET = 'sign_with_wallet',
  }

  export enum sponsorSchema {
    PAY_FOR_USER = 'pay_for_user',
    CHARGE_CUSTOM_TOKENS = 'charge_custom_tokens',
  }


}

