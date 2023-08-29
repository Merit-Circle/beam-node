/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { NodeHttpRequest } from './core/NodeHttpRequest';

import { AssetsService } from './services/AssetsService';
import { ChainService } from './services/ChainService';
import { GameService } from './services/GameService';
import { HealthService } from './services/HealthService';
import { ProfilesService } from './services/ProfilesService';
import { TransactionsService } from './services/TransactionsService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class ApiClient {

  public readonly assets: AssetsService;
  public readonly chain: ChainService;
  public readonly game: GameService;
  public readonly health: HealthService;
  public readonly profiles: ProfilesService;
  public readonly transactions: TransactionsService;

  public readonly request: BaseHttpRequest;

  constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = NodeHttpRequest) {
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

    this.assets = new AssetsService(this.request);
    this.chain = new ChainService(this.request);
    this.game = new GameService(this.request);
    this.health = new HealthService(this.request);
    this.profiles = new ProfilesService(this.request);
    this.transactions = new TransactionsService(this.request);
  }
}

