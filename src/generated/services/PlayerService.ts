/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePlayerRequestInput } from '../models/CreatePlayerRequestInput';
import type { CreatePlayerResponse } from '../models/CreatePlayerResponse';
import type { GetAllPlayersResponse } from '../models/GetAllPlayersResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PlayerService {

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
      url: '/v1/player',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Getting all players
   * @param offset
   * @param limit
   * @returns GetAllPlayersResponse
   * @throws ApiError
   */
  public getAllPlayers(
    offset: number,
    limit: number,
  ): CancelablePromise<GetAllPlayersResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/player',
      query: {
        'offset': offset,
        'limit': limit,
      },
    });
  }

}
