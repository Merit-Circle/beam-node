/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import { NodeHttpRequest } from './core/NodeHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';

import { AccountService } from './services/AccountService';
import { AssetService } from './services/AssetService';
import { GameService } from './services/GameService';
import { PlayerService } from './services/PlayerService';
import { TransactionService } from './services/TransactionService';

type HttpRequestConstructor = new (_config: OpenAPIConfig) => BaseHttpRequest;

export class ApiClient {
  public readonly account: AccountService;
  public readonly asset: AssetService;
  public readonly game: GameService;
  public readonly player: PlayerService;
  public readonly transaction: TransactionService;

  public readonly request: BaseHttpRequest;

  constructor(
    config?: Partial<OpenAPIConfig>,
    HttpRequest: HttpRequestConstructor = NodeHttpRequest,
  ) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? '',
      VERSION: config?.VERSION ?? '1.0.0',
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? 'include',
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });

    this.account = new AccountService(this.request);
    this.asset = new AssetService(this.request);
    this.game = new GameService(this.request);
    this.player = new PlayerService(this.request);
    this.transaction = new TransactionService(this.request);
  }
}
