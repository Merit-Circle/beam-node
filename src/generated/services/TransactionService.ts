/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConfirmTransactionRequestInput } from '../models/ConfirmTransactionRequestInput';
import type { ConfirmTransactionResponse } from '../models/ConfirmTransactionResponse';
import type { CreateTransactionRequestInput } from '../models/CreateTransactionRequestInput';
import type { CreateTransactionResponse } from '../models/CreateTransactionResponse';
import type { GetTransactionResponse } from '../models/GetTransactionResponse';

import type { BaseHttpRequest } from '../core/BaseHttpRequest';
import type { CancelablePromise } from '../core/CancelablePromise';

export class TransactionService {
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
      url: '/v1/transaction',
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
      url: '/v1/transaction/signature',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Getting a transaction
   * @param id
   * @returns GetTransactionResponse
   * @throws ApiError
   */
  public getTransaction(id: string): CancelablePromise<GetTransactionResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/transaction/{id}',
      path: {
        id: id,
      },
    });
  }
}
