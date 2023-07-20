/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConfirmTransactionRequestInput } from '../models/ConfirmTransactionRequestInput';
import type { ConfirmTransactionResponse } from '../models/ConfirmTransactionResponse';
import type { CreateTransactionRequestInput } from '../models/CreateTransactionRequestInput';
import type { CreateTransactionResponse } from '../models/CreateTransactionResponse';
import type { GetTransactionResponse } from '../models/GetTransactionResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TransactionService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Creating a new transaction
   * @param xApiKey Beam API key
   * @param requestBody
   * @returns CreateTransactionResponse
   * @throws ApiError
   */
  public whatever(
    xApiKey: string,
    requestBody: CreateTransactionRequestInput,
  ): CancelablePromise<CreateTransactionResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/transaction',
      headers: {
        'x-api-key': xApiKey,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Confirming a transaction
   * @param xApiKey Beam API key
   * @param requestBody
   * @returns ConfirmTransactionResponse
   * @throws ApiError
   */
  public confirmTransaction(
    xApiKey: string,
    requestBody: ConfirmTransactionRequestInput,
  ): CancelablePromise<ConfirmTransactionResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/transaction/signature',
      headers: {
        'x-api-key': xApiKey,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Getting a transaction
   * @param xApiKey Beam API key
   * @param id
   * @returns GetTransactionResponse
   * @throws ApiError
   */
  public getTransaction(
    xApiKey: string,
    id: string,
  ): CancelablePromise<GetTransactionResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/transaction/{id}',
      path: {
        'id': id,
      },
      headers: {
        'x-api-key': xApiKey,
      },
    });
  }

}
