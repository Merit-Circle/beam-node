/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RegenerateGameApiKeysResponse = {
  id: string;
  name: string;
  description: string | null;
  coverImageUrl: string | null;
  logoImageUrl: string | null;
  apiKeys: Array<{
    type: 'ReadOnly' | 'ReadAndWrite' | 'Regenerate';
    id: string;
    apiKey: string;
    gameId: string;
  }>;
};

