import * as OpenAPI from 'openapi-typescript-codegen';

OpenAPI.generate({
  input: '',
  output: './src/generated',
  clientName: 'ApiClient',
  httpClient: 'node',
  indent: '2',
});
