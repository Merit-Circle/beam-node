/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetAssetListingsResponse } from '../models/GetAssetListingsResponse';
import type { GetPlayerAssetsResponse } from '../models/GetPlayerAssetsResponse';

import type { BaseHttpRequest } from '../core/BaseHttpRequest';
import type { CancelablePromise } from '../core/CancelablePromise';

export class AssetsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get all the assets of a player.
   * @param playerId
   * @param limit
   * @param offset
   * @returns GetPlayerAssetsResponse
   * @throws ApiError
   */
  public getAssetsByPlayer(
    playerId: string,
    limit?: number,
    offset?: number,
  ): CancelablePromise<GetPlayerAssetsResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/assets/player/{playerId}',
      path: {
        playerId: playerId,
      },
      query: {
        limit: limit,
        offset: offset,
      },
    });
  }

  /**
   * Get all the assets listed by a player
   * @param playerId
   * @returns GetAssetListingsResponse
   * @throws ApiError
   */
  public getListedAssetsByPlayer(
    playerId: string,
  ): CancelablePromise<GetAssetListingsResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/assets/player/{playerId}/listings',
      path: {
        playerId: playerId,
      },
    });
  }
}
