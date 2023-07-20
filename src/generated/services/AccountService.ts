/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAccountRequestInput } from '../models/CreateAccountRequestInput';
import type { CreateAccountResponse } from '../models/CreateAccountResponse';
import type { TakeOwnershipRequestInput } from '../models/TakeOwnershipRequestInput';
import type { TakeOwnershipResponse } from '../models/TakeOwnershipResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Creating an account
   * @param xApiKey Beam API key
   * @param requestBody
   * @returns CreateAccountResponse
   * @throws ApiError
   */
  public account(
    xApiKey: string,
    requestBody: CreateAccountRequestInput,
  ): CancelablePromise<CreateAccountResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/account',
      headers: {
        'x-api-key': xApiKey,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Taking ownership of an account
   * @param xApiKey Beam API key
   * @param accountId
   * @param requestBody
   * @returns TakeOwnershipResponse
   * @throws ApiError
   */
  public takeOwnership(
    xApiKey: string,
    accountId: any,
    requestBody: TakeOwnershipRequestInput,
  ): CancelablePromise<TakeOwnershipResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/account/{accountId}/take-ownership',
      path: {
        'accountId': accountId,
      },
      headers: {
        'x-api-key': xApiKey,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
