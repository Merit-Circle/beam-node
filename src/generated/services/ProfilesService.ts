/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProfileRequestInput } from '../models/CreateProfileRequestInput';
import type { CreateProfileResponse } from '../models/CreateProfileResponse';
import type { GenerateLinkCodeRequestInput } from '../models/GenerateLinkCodeRequestInput';
import type { GenerateLinkCodeResponse } from '../models/GenerateLinkCodeResponse';
import type { GenerateSignInCodeRequestInput } from '../models/GenerateSignInCodeRequestInput';
import type { GenerateSignInCodeResponse } from '../models/GenerateSignInCodeResponse';
import type { GetAllProfilesResponse } from '../models/GetAllProfilesResponse';
import type { GetProfileResponse } from '../models/GetProfileResponse';
import type { UpdateProfileRequestInput } from '../models/UpdateProfileRequestInput';
import type { UpdateProfileResponse } from '../models/UpdateProfileResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProfilesService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Creating a profile
   * @param requestBody
   * @returns CreateProfileResponse
   * @throws ApiError
   */
  public createProfile(
    requestBody: CreateProfileRequestInput,
  ): CancelablePromise<CreateProfileResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/profiles',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Getting all profiles
   * @returns GetAllProfilesResponse
   * @throws ApiError
   */
  public getAllProfiles(): CancelablePromise<GetAllProfilesResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/profiles',
    });
  }

  /**
   * Getting information on a profile
   * @param profileId
   * @returns GetProfileResponse
   * @throws ApiError
   */
  public getProfile(
    profileId: string,
  ): CancelablePromise<GetProfileResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/profiles/{profileId}',
      path: {
        'profileId': profileId,
      },
    });
  }

  /**
   * Update a profile
   * @param profileId
   * @param requestBody
   * @returns UpdateProfileResponse
   * @throws ApiError
   */
  public updateProfile(
    profileId: string,
    requestBody: UpdateProfileRequestInput,
  ): CancelablePromise<UpdateProfileResponse> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/v1/profiles/{profileId}',
      path: {
        'profileId': profileId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Generates a challenge which can be encoded in a QR code / app link for the user to take control of the profile
   * @param profileId
   * @param xApiKey
   * @param requestBody
   * @returns GenerateLinkCodeResponse Challenge to link up an anonymous profile to a user
   * @throws ApiError
   */
  public createConnectionRequest(
    profileId: string,
    xApiKey: string,
    requestBody: GenerateLinkCodeRequestInput,
  ): CancelablePromise<GenerateLinkCodeResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/profiles/{profileId}/create-connection-request',
      path: {
        'profileId': profileId,
      },
      headers: {
        'x-api-key': xApiKey,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Generates a challenge which can be encoded in a QR code / app link for the user to sign in to the game
   * @param profileId
   * @param xApiKey
   * @param requestBody
   * @returns GenerateSignInCodeResponse Challenge to sign in a player to the game
   * @throws ApiError
   */
  public createSignInRequest(
    profileId: string,
    xApiKey: string,
    requestBody: GenerateSignInCodeRequestInput,
  ): CancelablePromise<GenerateSignInCodeResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/profiles/{profileId}/create-sign-in-request',
      path: {
        'profileId': profileId,
      },
      headers: {
        'x-api-key': xApiKey,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
