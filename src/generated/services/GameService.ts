/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetGameResponse } from '../models/GetGameResponse';
import type { RegenerateGameApiKeysRequestInput } from '../models/RegenerateGameApiKeysRequestInput';
import type { RegenerateGameApiKeysResponse } from '../models/RegenerateGameApiKeysResponse';
import type { UpdateGameRequestInput } from '../models/UpdateGameRequestInput';
import type { UpdateGameResponse } from '../models/UpdateGameResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GameService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get information about your game
   * @returns GetGameResponse Game response (including contracts & policies)
   * @throws ApiError
   */
  public getGame(): CancelablePromise<GetGameResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/game',
    });
  }

  /**
   * Updating name, description and/or coverImageUrl
   * @param requestBody
   * @returns UpdateGameResponse Game was successfully updated
   * @throws ApiError
   */
  public updateGame(
    requestBody: UpdateGameRequestInput,
  ): CancelablePromise<UpdateGameResponse> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/v1/game',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Regenerate API keys
   * @param requestBody
   * @returns RegenerateGameApiKeysResponse Old keys were revoked and new ones were generated successfully
   * @throws ApiError
   */
  public regenerateApiKeys(
    requestBody: RegenerateGameApiKeysRequestInput,
  ): CancelablePromise<RegenerateGameApiKeysResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/game/regenerate-api-keys',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
