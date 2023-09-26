/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuyAssetRequestInput } from '../models/BuyAssetRequestInput';
import type { BuyAssetResponse } from '../models/BuyAssetResponse';
import type { CancelAssetListingRequestInput } from '../models/CancelAssetListingRequestInput';
import type { GetAssetListingsResponse } from '../models/GetAssetListingsResponse';
import type { GetChainCurrenciesResponse } from '../models/GetChainCurrenciesResponse';
import type { SellAssetRequestInput } from '../models/SellAssetRequestInput';
import type { SellAssetResponse } from '../models/SellAssetResponse';

import type { BaseHttpRequest } from '../core/BaseHttpRequest';
import type { CancelablePromise } from '../core/CancelablePromise';

export class MarketplaceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get all listed assets for a game (NFT assets, e.g. ERC721 / ERC1155)
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
      url: '/v1/marketplace',
      path: {
        gameId: gameId,
      },
      query: {
        limit: limit,
        offset: offset,
      },
    });
  }

  /**
   * Get all the assets listed by a profile (NFT assets, e.g. ERC721 / ERC1155)
   * @param entityId
   * @param limit
   * @param offset
   * @returns GetAssetListingsResponse
   * @throws ApiError
   */
  public getListedAssetsForProfile(
    entityId: string,
    limit?: number,
    offset?: number,
  ): CancelablePromise<GetAssetListingsResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/marketplace/profiles/{entityId}',
      path: {
        entityId: entityId,
      },
      query: {
        limit: limit,
        offset: offset,
      },
    });
  }

  /**
   * List an asset for sale
   * @param entityId
   * @param requestBody
   * @returns SellAssetResponse
   * @throws ApiError
   */
  public listAsset(
    entityId: string,
    requestBody: SellAssetRequestInput,
  ): CancelablePromise<SellAssetResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/marketplace/profiles/{entityId}/listing',
      path: {
        entityId: entityId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Buy listed asset
   * @param entityId
   * @param orderId
   * @param requestBody
   * @returns BuyAssetResponse
   * @throws ApiError
   */
  public buyListedAsset(
    entityId: string,
    orderId: string,
    requestBody: BuyAssetRequestInput,
  ): CancelablePromise<BuyAssetResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/marketplace/profiles/{entityId}/listing/{orderId}',
      path: {
        entityId: entityId,
        orderId: orderId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Cancel asset listing
   * @param entityId
   * @param orderId
   * @param requestBody
   * @returns BuyAssetResponse
   * @throws ApiError
   */
  public cancelListing(
    entityId: string,
    orderId: string,
    requestBody: CancelAssetListingRequestInput,
  ): CancelablePromise<BuyAssetResponse> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/v1/marketplace/profiles/{entityId}/listing/{orderId}',
      path: {
        entityId: entityId,
        orderId: orderId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param chainId
   * @returns GetChainCurrenciesResponse
   * @throws ApiError
   */
  public getChainCurrencies(
    chainId: number,
  ): CancelablePromise<GetChainCurrenciesResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v1/marketplace/chain-currencies/{chainId}',
      path: {
        chainId: chainId,
      },
    });
  }
}
