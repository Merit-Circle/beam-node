/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateAccountResponse = {
  id: string;
  object: string;
  createdAt: number;
  address: string;
  deployed: boolean;
  custodial: boolean;
  chainId: number;
  transactionIntents: Array<{
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
        topics: Array<string>;
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
        sponsorSchema: 'pay_for_user' | 'charge_custom_tokens';
        tokenContract?: string;
        tokenContractAmount?: string;
      };
      transactionIntents?: Array<any>;
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
        id: string;
        object: string;
        createdAt: number;
        address: string;
        deployed: boolean;
        custodial: boolean;
        chainId: number;
        transactionIntents: Array<any>;
      }>;
    };
    account?: any;
    interactions?: Array<{
      contract?: string;
      value?: string;
      functionName: string;
      functionArgs: Array<any>;
    }>;
  }>;
};

