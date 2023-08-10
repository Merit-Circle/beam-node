/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetInventoryResponse } from '../models/GetInventoryResponse';

import type { BaseHttpRequest } from '../core/BaseHttpRequest';
import type { CancelablePromise } from '../core/CancelablePromise';

export class InventoriesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get the player inventory
   * @param playerId
   * @returns GetInventoryResponse Player inventory
   * @throws ApiError
   */
  public getPlayerInventory(
    playerId: string,
  ): CancelablePromise<GetInventoryResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/inventories/player/{playerId}',
      path: {
        playerId: playerId,
      },
    });
  }
}
