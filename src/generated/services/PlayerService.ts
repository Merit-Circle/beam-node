/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePlayerRequestInput } from '../models/CreatePlayerRequestInput';
import type { CreatePlayerResponse } from '../models/CreatePlayerResponse';
import type { GetAllPlayersResponse } from '../models/GetAllPlayersResponse';

import type { BaseHttpRequest } from '../core/BaseHttpRequest';
import type { CancelablePromise } from '../core/CancelablePromise';

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
   * @returns GetAllPlayersResponse test
   * @throws ApiError
   */
  public getAllPlayers(): CancelablePromise<GetAllPlayersResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/player',
    });
  }
}
