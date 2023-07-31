/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TransferOwnershipResponse = {
  type: TransferOwnershipResponse.type;
  id: string;
  createdAt: any;
  message: string;
  chainId: number;
  address: string;
  url: string;
};

export namespace TransferOwnershipResponse {

  export enum type {
    TRANSFER_OWNERSHIP = 'TransferOwnership',
    BUY_ORDER = 'BuyOrder',
    SELL_ORDER = 'SellOrder',
    CANCEL_ORDER = 'CancelOrder',
    CREATE_SESSION = 'CreateSession',
    REVOKE_SESSION = 'RevokeSession',
  }


}

