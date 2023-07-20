import {
  AccountService,
  AssetService,
  GameService,
  PlayerService,
  TransactionService,
} from './generated';
import { ApiClient } from './generated/ApiClient';

export class Beam {
  private client: ApiClient;

  constructor(
    private readonly apiKey: string,
    private readonly basePath?: string,
  ) {
    this.client = new ApiClient({
      BASE: this.basePath,
      HEADERS: {
        'x-api-key': this.apiKey,
      },
    });
  }

  public get accounts(): AccountService {
    return this.client.account;
  }

  public get assets(): AssetService {
    return this.client.asset;
  }

  public get games(): GameService {
    return this.client.game;
  }

  public get players(): PlayerService {
    return this.client.player;
  }

  public get transactions(): TransactionService {
    return this.client.transaction;
  }
}
