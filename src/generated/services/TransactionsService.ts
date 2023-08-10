/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConfirmTransactionRequestInput } from '../models/ConfirmTransactionRequestInput';
import type { ConfirmTransactionResponse } from '../models/ConfirmTransactionResponse';
import type { CreateTransactionRequestInput } from '../models/CreateTransactionRequestInput';
import type { CreateTransactionResponse } from '../models/CreateTransactionResponse';
import type { GetTransactionResponse } from '../models/GetTransactionResponse';
import type { GetTransactionsRequestInput } from '../models/GetTransactionsRequestInput';
import type { GetTransactionsResponse } from '../models/GetTransactionsResponse';

import type { BaseHttpRequest } from '../core/BaseHttpRequest';
import type { CancelablePromise } from '../core/CancelablePromise';

export class TransactionsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Creating a new transaction
   * @param requestBody
   * @returns CreateTransactionResponse
   * @throws ApiError
   */
  public createTransaction(
    requestBody: CreateTransactionRequestInput,
  ): CancelablePromise<CreateTransactionResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/transactions',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get all the transactions
   * @param requestBody
   * @param limit
   * @param offset
   * @returns GetTransactionsResponse
   * @throws ApiError
   */
  public getTransactions(
    requestBody: GetTransactionsRequestInput,
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
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Confirming a transaction
   * @param requestBody
   * @returns ConfirmTransactionResponse
   * @throws ApiError
   */
  public confirmTransaction(
    requestBody: ConfirmTransactionRequestInput,
  ): CancelablePromise<ConfirmTransactionResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/transactions/signature',
      body: requestBody,
      mediaType: 'application/json',
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
}
