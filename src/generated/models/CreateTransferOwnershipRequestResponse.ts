/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateTransferOwnershipRequestResponse = {
  type: CreateTransferOwnershipRequestResponse.type;
  id: string;
  createdAt: any;
  message: string | null;
  chainId: number;
  accountAddress: string;
  signerAddress: string;
  url: string;
};

export namespace CreateTransferOwnershipRequestResponse {
  export enum type {
    TRANSFER_OWNERSHIP = 'TransferOwnership',
    BUY_ORDER = 'BuyOrder',
    SELL_ORDER = 'SellOrder',
    CANCEL_ORDER = 'CancelOrder',
    CREATE_SESSION = 'CreateSession',
    REVOKE_SESSION = 'RevokeSession',
  }
}
