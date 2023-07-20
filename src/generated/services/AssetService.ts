/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TransferAssetRequestInput } from '../models/TransferAssetRequestInput';
import type { TransferAssetResponse } from '../models/TransferAssetResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AssetService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Transfer an asset
   * @param xApiKey Beam API key
   * @param requestBody
   * @returns TransferAssetResponse
   * @throws ApiError
   */
  public createTransaction(
    xApiKey: string,
    requestBody: TransferAssetRequestInput,
  ): CancelablePromise<TransferAssetResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/asset/transfer',
      headers: {
        'x-api-key': xApiKey,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
