/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateTransactionResponse = {
  id: string;
  object: string;
  createdAt: number;
  updatedAt: number;
  chainId: number;
  userOperationHash?: string;
  userOperation?: any;
  nextAction?: {
    type: CreateTransactionResponse.type;
    payload: {
      userOp?: any;
      userOpHash?: string;
    };
  };
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
  policy?: {
    id: string;
    object: string;
    createdAt: number;
    name: string | null;
    chainId: number;
    strategy: {
      sponsorSchema: CreateTransactionResponse.sponsorSchema;
      tokenContract?: string;
      tokenContractAmount?: string;
    };
    transactionIntents?: Array<{
      id: string;
      object: string;
      createdAt: number;
      updatedAt: number;
      chainId: number;
      userOperationHash?: string;
      userOperation?: any;
      nextAction?: {
        type: 'SignWithWallet' | 0;
        payload: {
          userOp?: any;
          userOpHash?: string;
        };
      };
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
      policy?: any;
      player?: {
        id: string;
        object: string;
        createdAt: number;
        name: string | null;
        email: string | null;
        description: string | null;
        metadata: string;
        transactionIntents?: any[];
        accounts?: Array<{
          id: string;
          object: string;
          createdAt: number;
          address: string;
          deployed: boolean;
          custodial: boolean;
          chainId: number;
          transactionIntents: any[];
        }>;
      };
      account?: any;
      interactions?: Array<{
        contract?: string;
        value?: string;
        functionName: string;
        functionArgs: any[];
      }>;
    }>;
    policyRules?: Array<{
      id: string;
      object: string;
      createdAt: number;
      type: 'contract_functions' | 'account_functions';
      functionName: string | null;
      contract: {
        id: string;
        object: string;
        createdAt: number;
        name: string | null;
        chainId: number;
        address: string;
        abi: Array<{
          name?: string;
          type?: string;
          anonymous?: boolean;
          payable?: boolean;
          constant?: boolean;
          stateMutability?: string;
          inputs?: any;
          outputs?: any;
          gas?: string;
        }>;
        publicVerification: boolean;
      } | null;
    }>;
  };
  player?: any;
  account?: any;
  interactions?: Array<{
    contract?: string;
    value?: string;
    functionName: string;
    functionArgs: any[];
  }>;
};

export namespace CreateTransactionResponse {
  export enum type {
    SIGN_WITH_WALLET = 'SignWithWallet',
    _0 = 0,
  }

  export enum sponsorSchema {
    PAY_FOR_USER = 'pay_for_user',
    CHARGE_CUSTOM_TOKENS = 'charge_custom_tokens',
  }
}
