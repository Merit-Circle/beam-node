/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetAllPlayersResponse = {
  data: Array<{
    id: string;
    identifier: string;
    clerkId: string | null;
  }>;
  pagination: {
    count: number;
    limit: number;
    offset?: number;
  };
};

