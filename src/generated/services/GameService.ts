/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddContractRequestInput } from '../models/AddContractRequestInput';
import type { AddContractResponse } from '../models/AddContractResponse';
import type { CreateGameRequestInput } from '../models/CreateGameRequestInput';
import type { CreateGameResponse } from '../models/CreateGameResponse';
import type { GenerateLinkCodeRequestInput } from '../models/GenerateLinkCodeRequestInput';
import type { GenerateLinkCodeResponse } from '../models/GenerateLinkCodeResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GameService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Register a new game
   * @param requestBody
   * @returns CreateGameResponse The game was successfully created
   * @throws ApiError
   */
  public createGame(
    requestBody: CreateGameRequestInput,
  ): CancelablePromise<CreateGameResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/game',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Add a new contract to the game
   * @param requestBody
   * @returns AddContractResponse The contract was successfully added to the game
   * @throws ApiError
   */
  public addContract(
    requestBody: AddContractRequestInput,
  ): CancelablePromise<AddContractResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/game/contract',
      body: requestBody,
      mediaType: 'application/json',
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
