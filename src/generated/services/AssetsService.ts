/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuyAssetRequestInput } from '../models/BuyAssetRequestInput';
import type { BuyAssetResponse } from '../models/BuyAssetResponse';
import type { CancelAssetListingRequestInput } from '../models/CancelAssetListingRequestInput';
import type { GetAssetListingsResponse } from '../models/GetAssetListingsResponse';
import type { GetAssetResponse } from '../models/GetAssetResponse';
import type { GetAssetsResponse } from '../models/GetAssetsResponse';
import type { GetProfileCurrenciesResponse } from '../models/GetProfileCurrenciesResponse';
import type { GetProfileNativeCurrencyResponse } from '../models/GetProfileNativeCurrencyResponse';
import type { SellAssetRequestInput } from '../models/SellAssetRequestInput';
import type { SellAssetResponse } from '../models/SellAssetResponse';
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
        'profileId': profileId,
      },
      query: {
        'limit': limit,
        'offset': offset,
      },
    });
  }

  /**
   * Get all the assets listed by an account (NFT assets, e.g. ERC721 / ERC1155)
   * @param profileId
   * @param limit
   * @param offset
   * @returns GetAssetListingsResponse
   * @throws ApiError
   */
  public getProfileListedAssets(
    profileId: string,
    limit?: number,
    offset?: number,
  ): CancelablePromise<GetAssetListingsResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/assets/profiles/{profileId}/listed',
      path: {
        'profileId': profileId,
      },
      query: {
        'limit': limit,
        'offset': offset,
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
        'profileId': profileId,
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
        'profileId': profileId,
      },
    });
  }

  /**
   * Transfer an asset (NFT assets, ERC721 / ERC1155)
   * @param profileId
   * @param requestBody
   * @returns TransferAssetResponse
   * @throws ApiError
   */
  public transferAsset(
    profileId: string,
    requestBody: TransferAssetRequestInput,
  ): CancelablePromise<TransferAssetResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/assets/profiles/{profileId}/transfer-asset',
      path: {
        'profileId': profileId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Transfer a token (token assets, ERC20)
   * @param profileId
   * @param requestBody
   * @returns TransferTokenResponse
   * @throws ApiError
   */
  public transferToken(
    profileId: string,
    requestBody: TransferTokenRequestInput,
  ): CancelablePromise<TransferTokenResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/assets/profiles/{profileId}/transfer-token',
      path: {
        'profileId': profileId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Transfer the native token (MC)
   * @param profileId
   * @param requestBody
   * @returns TransferTokenResponse
   * @throws ApiError
   */
  public transferNativeToken(
    profileId: string,
    requestBody: TransferNativeTokenRequestInput,
  ): CancelablePromise<TransferTokenResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/assets/profiles/{profileId}/transfer-native',
      path: {
        'profileId': profileId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * List an asset for sale
   * @param profileId
   * @param requestBody
   * @returns SellAssetResponse
   * @throws ApiError
   */
  public listAssetForSale(
    profileId: string,
    requestBody: SellAssetRequestInput,
  ): CancelablePromise<SellAssetResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/assets/profiles/{profileId}/listing',
      path: {
        'profileId': profileId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Buy listed asset
   * @param profileId
   * @param requestBody
   * @returns BuyAssetResponse
   * @throws ApiError
   */
  public buyAsset(
    profileId: string,
    requestBody: BuyAssetRequestInput,
  ): CancelablePromise<BuyAssetResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/assets/profiles/{profileId}/buy',
      path: {
        'profileId': profileId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Cancel asset listing
   * @param profileId
   * @param orderId
   * @param requestBody
   * @returns BuyAssetResponse
   * @throws ApiError
   */
  public cancelAssetListing(
    profileId: string,
    orderId: string,
    requestBody: CancelAssetListingRequestInput,
  ): CancelablePromise<BuyAssetResponse> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/v1/assets/profiles/{profileId}/listing/{orderId}',
      path: {
        'profileId': profileId,
        'orderId': orderId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get all listed assets for a game
   * @param gameId
   * @param limit
   * @param offset
   * @returns GetAssetListingsResponse
   * @throws ApiError
   */
  public getListedAssets(
    gameId: string,
    limit?: number,
    offset?: number,
  ): CancelablePromise<GetAssetListingsResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/assets/game/listed',
      path: {
        'gameId': gameId,
      },
      query: {
        'limit': limit,
        'offset': offset,
      },
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
   * @returns GetAssetResponse
   * @throws ApiError
   */
  public getAsset(
    assetAddress: string,
    assetId: string,
  ): CancelablePromise<GetAssetResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/assets/{assetAddress}/{assetId}',
      path: {
        'assetAddress': assetAddress,
        'assetId': assetId,
      },
    });
  }

}
