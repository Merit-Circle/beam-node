/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetPlayerAssetsResponse } from '../models/GetPlayerAssetsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AssetService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get all players assets
   * @param offset
   * @param limit
   * @returns GetPlayerAssetsResponse
   * @throws ApiError
   */
  public getAssets(
    offset: number,
    limit: number,
  ): CancelablePromise<GetPlayerAssetsResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/asset/player',
      query: {
        'offset': offset,
        'limit': limit,
      },
    });
  }

}
