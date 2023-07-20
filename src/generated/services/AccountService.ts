/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAccountRequestInput } from '../models/CreateAccountRequestInput';
import type { CreateAccountResponse } from '../models/CreateAccountResponse';
import type { TakeOwnershipRequestInput } from '../models/TakeOwnershipRequestInput';
import type { TakeOwnershipResponse } from '../models/TakeOwnershipResponse';

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
   * Taking ownership of an account
   * @param accountId
   * @param requestBody
   * @returns TakeOwnershipResponse
   * @throws ApiError
   */
  public takeOwnership(
    accountId: any,
    requestBody: TakeOwnershipRequestInput,
  ): CancelablePromise<TakeOwnershipResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/account/{accountId}/take-ownership',
      path: {
        accountId: accountId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
