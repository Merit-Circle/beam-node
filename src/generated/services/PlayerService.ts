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
   * @param xApiKey Beam API key
   * @param requestBody
   * @returns CreatePlayerResponse
   * @throws ApiError
   */
  public createPlayer(
    xApiKey: string,
    requestBody: CreatePlayerRequestInput,
  ): CancelablePromise<CreatePlayerResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/player',
      headers: {
        'x-api-key': xApiKey,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Getting all players
   * @param xApiKey Beam API key
   * @returns GetAllPlayersResponse test
   * @throws ApiError
   */
  public getAllPlayers(
    xApiKey: string,
  ): CancelablePromise<GetAllPlayersResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/player',
      headers: {
        'x-api-key': xApiKey,
      },
    });
  }

}
