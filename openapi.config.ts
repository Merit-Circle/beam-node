import * as OpenAPI from 'openapi-typescript-codegen';

OpenAPI.generate({
  input: 'http://localhost:4001/api/game-json',
  output: './src/generated',
  clientName: 'ApiClient',
  httpClient: 'node',
  indent: '2',
});
