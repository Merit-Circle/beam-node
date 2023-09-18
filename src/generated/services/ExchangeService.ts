/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConvertTokenRequestInput } from '../models/ConvertTokenRequestInput';
import type { ConvertTokenRespone } from '../models/ConvertTokenRespone';
import type { GetQuoteResponse } from '../models/GetQuoteResponse';

import type { BaseHttpRequest } from '../core/BaseHttpRequest';
import type { CancelablePromise } from '../core/CancelablePromise';

export class ExchangeService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Returns the maximum necessary input amount for a token trade, given a desired output amount
   * @param tokenIn
   * @param tokenOut
   * @param amountOut
   * @returns GetQuoteResponse
   * @throws ApiError
   */
  public getQuoteForInput(
    tokenIn: string,
    tokenOut: string,
    amountOut: string,
  ): CancelablePromise<GetQuoteResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/exchange/quote/input',
      query: {
        tokenIn: tokenIn,
        tokenOut: tokenOut,
        amountOut: amountOut,
      },
    });
  }

  /**
   * Returns the minimum expected output amount for a token trade, given an input amount
   * @param tokenIn
   * @param tokenOut
   * @param amountIn
   * @returns GetQuoteResponse
   * @throws ApiError
   */
  public getQuoteForOutput(
    tokenIn: string,
    tokenOut: string,
    amountIn: string,
  ): CancelablePromise<GetQuoteResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/exchange/quote/output',
      query: {
        tokenIn: tokenIn,
        tokenOut: tokenOut,
        amountIn: amountIn,
      },
    });
  }

  /**
   * Trade an exact amount of `tokenIn` for a minimum amount of `tokenOut`
   * @param profileId
   * @param requestBody
   * @returns ConvertTokenRespone
   * @throws ApiError
   */
  public convertInput(
    profileId: string,
    requestBody: ConvertTokenRequestInput,
  ): CancelablePromise<ConvertTokenRespone> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/exchange/profiles/{profileId}/convert/input',
      path: {
        profileId: profileId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Swap a maximum amount of `tokenIn` for an exact amount of `tokenOut`
   * @param profileId
   * @param requestBody
   * @returns ConvertTokenRespone
   * @throws ApiError
   */
  public convertToOutput(
    profileId: string,
    requestBody: ConvertTokenRequestInput,
  ): CancelablePromise<ConvertTokenRespone> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/exchange/profiles/{profileId}/convert/output',
      path: {
        profileId: profileId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
