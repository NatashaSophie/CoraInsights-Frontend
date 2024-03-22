import { GraphQLClient } from 'graphql-request';

const endpoint =
  process.env.NEXT_PUBLIC_GRAPHQL_HOST || 'http://localhost:1337/graphql';

const client = new GraphQLClient(endpoint);

export const fetcher = <TData, TVariables>(
  query: string,
  variables?: TVariables
): (() => Promise<TData>) => {
  return async () => client.request(query, variables);
};

export default client;
