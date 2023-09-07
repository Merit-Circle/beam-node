/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTransactionRequestInput } from '../models/CreateTransactionRequestInput';
import type { CreateTransactionResponse } from '../models/CreateTransactionResponse';
import type { GetTransactionResponse } from '../models/GetTransactionResponse';
import type { GetTransactionsResponse } from '../models/GetTransactionsResponse';

import type { BaseHttpRequest } from '../core/BaseHttpRequest';
import type { CancelablePromise } from '../core/CancelablePromise';

export class TransactionsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get a paginated list of transactions from your game
   * @param limit
   * @param offset
   * @returns GetTransactionsResponse
   * @throws ApiError
   */
  public getTransactions(
    limit?: number,
    offset?: number,
  ): CancelablePromise<GetTransactionsResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/transactions',
      query: {
        limit: limit,
        offset: offset,
      },
    });
  }

  /**
   * Getting a transaction
   * @param transactionId
   * @returns GetTransactionResponse
   * @throws ApiError
   */
  public getTransaction(
    transactionId: string,
  ): CancelablePromise<GetTransactionResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/transactions/{transactionId}',
      path: {
        transactionId: transactionId,
      },
    });
  }

  /**
   * Get a paginated list of transactions created on behalf of a prfoile
   * @param profileId
   * @param limit
   * @param offset
   * @returns GetTransactionsResponse
   * @throws ApiError
   */
  public getProfileTransactions(
    profileId: string,
    limit?: number,
    offset?: number,
  ): CancelablePromise<GetTransactionsResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/transactions/profiles/{profileId}',
      path: {
        profileId: profileId,
      },
      query: {
        limit: limit,
        offset: offset,
      },
    });
  }

  /**
   * Creating a new transaction on behalf of a profile
   * @param profileId
   * @param requestBody
   * @returns CreateTransactionResponse
   * @throws ApiError
   */
  public createProfileTransaction(
    profileId: string,
    requestBody: CreateTransactionRequestInput,
  ): CancelablePromise<CreateTransactionResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/transactions/profiles/{profileId}',
      path: {
        profileId: profileId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
