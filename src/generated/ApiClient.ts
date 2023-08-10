/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import { NodeHttpRequest } from './core/NodeHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';

import { AccountsService } from './services/AccountsService';
import { AssetsService } from './services/AssetsService';
import { GameService } from './services/GameService';
import { InventoriesService } from './services/InventoriesService';
import { PlayersService } from './services/PlayersService';
import { TransactionsService } from './services/TransactionsService';

type HttpRequestConstructor = new (_config: OpenAPIConfig) => BaseHttpRequest;

export class ApiClient {
  public readonly accounts: AccountsService;
  public readonly assets: AssetsService;
  public readonly game: GameService;
  public readonly inventories: InventoriesService;
  public readonly players: PlayersService;
  public readonly transactions: TransactionsService;

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

    this.accounts = new AccountsService(this.request);
    this.assets = new AssetsService(this.request);
    this.game = new GameService(this.request);
    this.inventories = new InventoriesService(this.request);
    this.players = new PlayersService(this.request);
    this.transactions = new TransactionsService(this.request);
  }
}
