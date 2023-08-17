/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetChainResponse } from '../models/GetChainResponse';

import type { BaseHttpRequest } from '../core/BaseHttpRequest';
import type { CancelablePromise } from '../core/CancelablePromise';

export class ChainService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns GetChainResponse
   * @throws ApiError
   */
  public chain(): CancelablePromise<GetChainResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/chain',
    });
  }
}
