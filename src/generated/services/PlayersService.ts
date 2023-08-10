/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePlayerRequestInput } from '../models/CreatePlayerRequestInput';
import type { CreatePlayerResponse } from '../models/CreatePlayerResponse';
import type { GetAllPlayersResponse } from '../models/GetAllPlayersResponse';
import type { GetPlayerResponse } from '../models/GetPlayerResponse';

import type { BaseHttpRequest } from '../core/BaseHttpRequest';
import type { CancelablePromise } from '../core/CancelablePromise';

export class PlayersService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Creating a new player
   * @param requestBody
   * @returns CreatePlayerResponse
   * @throws ApiError
   */
  public createPlayer(
    requestBody: CreatePlayerRequestInput,
  ): CancelablePromise<CreatePlayerResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/players',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Getting all players
   * @param limit
   * @param offset
   * @returns GetAllPlayersResponse
   * @throws ApiError
   */
  public getAllPlayers(
    limit?: number,
    offset?: number,
  ): CancelablePromise<GetAllPlayersResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/players',
      query: {
        limit: limit,
        offset: offset,
      },
    });
  }

  /**
   * Getting information about authenticated player
   * @param playerId
   * @returns GetPlayerResponse Return the player information
   * @throws ApiError
   */
  public getPlayer(playerId: string): CancelablePromise<GetPlayerResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/players/{playerId}',
      path: {
        playerId: playerId,
      },
    });
  }
}
