/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetAssetResponse } from '../models/GetAssetResponse';
import type { GetAssetsResponse } from '../models/GetAssetsResponse';
import type { GetProfileCurrenciesResponse } from '../models/GetProfileCurrenciesResponse';
import type { GetProfileNativeCurrencyResponse } from '../models/GetProfileNativeCurrencyResponse';
import type { TransferAssetRequestInput } from '../models/TransferAssetRequestInput';
import type { TransferAssetResponse } from '../models/TransferAssetResponse';
import type { TransferNativeTokenRequestInput } from '../models/TransferNativeTokenRequestInput';
import type { TransferTokenRequestInput } from '../models/TransferTokenRequestInput';
import type { TransferTokenResponse } from '../models/TransferTokenResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AssetsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get all the assets of a profile (NFT assets, e.g. ERC721 / ERC1155)
   * @param entityId
   * @param limit
   * @param offset
   * @returns GetAssetsResponse
   * @throws ApiError
   */
  public getProfileAssets(
    entityId: string,
    limit?: number,
    offset?: number,
  ): CancelablePromise<GetAssetsResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/assets/profiles/{entityId}',
      path: {
        'entityId': entityId,
      },
      query: {
        'limit': limit,
        'offset': offset,
      },
    });
  }

  /**
   * Get all the currencies owned by an account (ERC20)
   * @param entityId
   * @returns GetProfileCurrenciesResponse
   * @throws ApiError
   */
  public getProfileCurrencies(
    entityId: string,
  ): CancelablePromise<GetProfileCurrenciesResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/assets/profiles/{entityId}/currencies',
      path: {
        'entityId': entityId,
      },
    });
  }

  /**
   * Get the native token balance
   * @param entityId
   * @returns GetProfileNativeCurrencyResponse
   * @throws ApiError
   */
  public getProfileNativeCurrency(
    entityId: string,
  ): CancelablePromise<GetProfileNativeCurrencyResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/assets/profiles/{entityId}/native',
      path: {
        'entityId': entityId,
      },
    });
  }

  /**
   * Transfer an asset (NFT assets, ERC721 / ERC1155)
   * @param entityId
   * @param requestBody
   * @returns TransferAssetResponse
   * @throws ApiError
   */
  public transferAsset(
    entityId: string,
    requestBody: TransferAssetRequestInput,
  ): CancelablePromise<TransferAssetResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/assets/profiles/{entityId}/transfer-asset',
      path: {
        'entityId': entityId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Transfer a token (token assets, ERC20)
   * @param entityId
   * @param requestBody
   * @returns TransferTokenResponse
   * @throws ApiError
   */
  public transferToken(
    entityId: string,
    requestBody: TransferTokenRequestInput,
  ): CancelablePromise<TransferTokenResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/assets/profiles/{entityId}/transfer-token',
      path: {
        'entityId': entityId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Transfer the native token (MC)
   * @param entityId
   * @param requestBody
   * @returns TransferTokenResponse
   * @throws ApiError
   */
  public transferNativeToken(
    entityId: string,
    requestBody: TransferNativeTokenRequestInput,
  ): CancelablePromise<TransferTokenResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/assets/profiles/{entityId}/transfer-native',
      path: {
        'entityId': entityId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get all the assets of contract (NFT assets, e.g. ERC721 / ERC1155)
   * @param assetAddress
   * @param limit
   * @param offset
   * @returns GetAssetsResponse
   * @throws ApiError
   */
  public getContractAssets(
    assetAddress: string,
    limit?: number,
    offset?: number,
  ): CancelablePromise<GetAssetsResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/assets/{assetAddress}',
      path: {
        'assetAddress': assetAddress,
      },
      query: {
        'limit': limit,
        'offset': offset,
      },
    });
  }

  /**
   * Get a single NFT (e.g. ERC721 / ERC1155)
   * @param assetAddress
   * @param assetId
   * @param entityId
   * @returns GetAssetResponse
   * @throws ApiError
   */
  public getAsset(
    assetAddress: string,
    assetId: string,
    entityId?: string,
  ): CancelablePromise<GetAssetResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/assets/{assetAddress}/{assetId}',
      path: {
        'assetAddress': assetAddress,
        'assetId': assetId,
      },
      query: {
        'entityId': entityId,
      },
    });
  }

}
