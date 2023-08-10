import {
  AccountsService,
  AssetsService,
  GameService,
  InventoriesService,
  PlayersService,
  TransactionsService,
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

  public get accounts(): AccountsService {
    return this.client.accounts;
  }

  public get games(): GameService {
    return this.client.game;
  }

  public get players(): PlayersService {
    return this.client.players;
  }

  public get transactions(): TransactionsService {
    return this.client.transactions;
  }

  public get assets(): AssetsService {
    return this.client.assets;
  }

  public get inventories(): InventoriesService {
    return this.client.inventories;
  }
}
