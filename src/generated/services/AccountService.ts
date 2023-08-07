/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAccountRequestInput } from '../models/CreateAccountRequestInput';
import type { CreateAccountResponse } from '../models/CreateAccountResponse';
import type { CreateTransferOwnershipRequestInput } from '../models/CreateTransferOwnershipRequestInput';
import type { CreateTransferOwnershipRequestResponse } from '../models/CreateTransferOwnershipRequestResponse';
import type { GetAccountResponse } from '../models/GetAccountResponse';
import type { GetAllAccountsResponse } from '../models/GetAllAccountsResponse';

import type { BaseHttpRequest } from '../core/BaseHttpRequest';
import type { CancelablePromise } from '../core/CancelablePromise';

export class AccountService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Creating an account
   * @param requestBody
   * @returns CreateAccountResponse
   * @throws ApiError
   */
  public account(
    requestBody: CreateAccountRequestInput,
  ): CancelablePromise<CreateAccountResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/account',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Getting all accounts
   * @returns GetAllAccountsResponse
   * @throws ApiError
   */
  public account1(): CancelablePromise<GetAllAccountsResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/account',
    });
  }

  /**
   * Getting information about authenticated player
   * @param accountId
   * @returns GetAccountResponse
   * @throws ApiError
   */
  public getAccount(accountId: string): CancelablePromise<GetAccountResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/account/{accountId}',
      path: {
        accountId: accountId,
      },
    });
  }

  /**
   * Creates a transfer request to transfer custodial wallet ownership to an external wallet
   * @param accountId
   * @param requestBody
   * @returns CreateTransferOwnershipRequestResponse
   * @throws ApiError
   */
  public createTransferRequest(
    accountId: any,
    requestBody: CreateTransferOwnershipRequestInput,
  ): CancelablePromise<CreateTransferOwnershipRequestResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/account/{accountId}/create-transfer-request',
      path: {
        accountId: accountId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
