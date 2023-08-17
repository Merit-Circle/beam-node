/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetAssetListingsResponse } from '../models/GetAssetListingsResponse';
import type { GetAssetResponse } from '../models/GetAssetResponse';
import type { GetAssetsResponse } from '../models/GetAssetsResponse';
import type { GetProfileCurrenciesResponse } from '../models/GetProfileCurrenciesResponse';
import type { GetProfileNativeCurrencyResponse } from '../models/GetProfileNativeCurrencyResponse';

import type { BaseHttpRequest } from '../core/BaseHttpRequest';
import type { CancelablePromise } from '../core/CancelablePromise';

export class AssetsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get all the assets of contract (NFT assets, e.g. ERC721 / ERC1155)
   * @param contractAddress
   * @param limit
   * @param offset
   * @returns GetAssetsResponse
   * @throws ApiError
   */
  public getContractAssets(
    contractAddress: string,
    limit?: number,
    offset?: number,
  ): CancelablePromise<GetAssetsResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/assets/{contractAddress}',
      path: {
        contractAddress: contractAddress,
      },
      query: {
        limit: limit,
        offset: offset,
      },
    });
  }

  /**
   * Get a single NFT (e.g. ERC721 / ERC1155)
   * @param contractAddress
   * @param tokenId
   * @returns GetAssetResponse
   * @throws ApiError
   */
  public getAsset(
    contractAddress: string,
    tokenId: string,
  ): CancelablePromise<GetAssetResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/assets/{contractAddress}/{tokenId}',
      path: {
        contractAddress: contractAddress,
        tokenId: tokenId,
      },
    });
  }

  /**
   * Get all the assets of an account (NFT assets, e.g. ERC721 / ERC1155)
   * @param profileId
   * @param limit
   * @param offset
   * @returns GetAssetsResponse
   * @throws ApiError
   */
  public getProfileAssets(
    profileId: string,
    limit?: number,
    offset?: number,
  ): CancelablePromise<GetAssetsResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/assets/profiles/{profileId}',
      path: {
        profileId: profileId,
      },
      query: {
        limit: limit,
        offset: offset,
      },
    });
  }

  /**
   * Get all the assets listed by an account (NFT assets, e.g. ERC721 / ERC1155)
   * @param profileId
   * @returns GetAssetListingsResponse
   * @throws ApiError
   */
  public getProfileListedAssets(
    profileId: string,
  ): CancelablePromise<GetAssetListingsResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/assets/profiles/{profileId}/listed',
      path: {
        profileId: profileId,
      },
    });
  }

  /**
   * Get all the currencies owned by an account (ERC20)
   * @param profileId
   * @returns GetProfileCurrenciesResponse
   * @throws ApiError
   */
  public getProfileCurrencies(
    profileId: string,
  ): CancelablePromise<GetProfileCurrenciesResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/assets/profiles/{profileId}/currencies',
      path: {
        profileId: profileId,
      },
    });
  }

  /**
   * Get the native token balance
   * @param profileId
   * @returns GetProfileNativeCurrencyResponse
   * @throws ApiError
   */
  public getProfileNativeCurrency(
    profileId: string,
  ): CancelablePromise<GetProfileNativeCurrencyResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/assets/profiles/{profileId}/native',
      path: {
        profileId: profileId,
      },
    });
  }
}
