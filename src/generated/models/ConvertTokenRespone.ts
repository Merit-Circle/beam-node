/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ConvertTokenRespone = {
  status: ConvertTokenRespone.status;
  type: ConvertTokenRespone.type;
  transactionHash?: string;
  explorerUrl?: string;
};

export namespace ConvertTokenRespone {
  export enum status {
    PENDING = 'pending',
    SUCCESS = 'success',
  }

  export enum type {
    CUSTODIAL = 'custodial',
    SELF_CUSTODIAL = 'self-custodial',
  }
}
