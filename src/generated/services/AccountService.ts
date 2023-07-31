/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAccountRequestInput } from '../models/CreateAccountRequestInput';
import type { CreateAccountResponse } from '../models/CreateAccountResponse';
import type { TransferOwnershipRequestInput } from '../models/TransferOwnershipRequestInput';
import type { TransferOwnershipResponse } from '../models/TransferOwnershipResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

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
   * Taking ownership of an account
   * @param accountId
   * @param requestBody
   * @returns TransferOwnershipResponse
   * @throws ApiError
   */
  public transferOwnership(
    accountId: any,
    requestBody: TransferOwnershipRequestInput,
  ): CancelablePromise<TransferOwnershipResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/account/{accountId}/transfer-ownership',
      path: {
        'accountId': accountId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
