/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetChainCurrenciesResponse = Array<{
  __typename?: 'CurrencyQueryResult';
  decimals: number;
  symbol:
    | 'Avax'
    | 'Eth'
    | 'Matic'
    | 'Mc'
    | 'Usdc'
    | 'Usdt'
    | 'Wavax'
    | 'Weth'
    | 'Wmatic'
    | 'Wmc';
  tokenAddress: string;
}>;
