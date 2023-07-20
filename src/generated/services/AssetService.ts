/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TransferAssetRequestInput } from '../models/TransferAssetRequestInput';
import type { TransferAssetResponse } from '../models/TransferAssetResponse';

import type { BaseHttpRequest } from '../core/BaseHttpRequest';
import type { CancelablePromise } from '../core/CancelablePromise';

export class AssetService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Transfer an asset
   * @param requestBody
   * @returns TransferAssetResponse
   * @throws ApiError
   */
  public createTransaction(
    requestBody: TransferAssetRequestInput,
  ): CancelablePromise<TransferAssetResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/asset/transfer',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
