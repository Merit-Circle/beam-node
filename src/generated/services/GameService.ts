/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenerateLinkCodeRequestInput } from '../models/GenerateLinkCodeRequestInput';
import type { GenerateLinkCodeResponse } from '../models/GenerateLinkCodeResponse';
import type { GetGameResponse } from '../models/GetGameResponse';

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
   * Generate QR code for linking player to the game
   * @param requestBody
   * @returns GenerateLinkCodeResponse The QR code was successfully created
   * @throws ApiError
   */
  public generateLinkCode(
    requestBody: GenerateLinkCodeRequestInput,
  ): CancelablePromise<GenerateLinkCodeResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/game/link',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
