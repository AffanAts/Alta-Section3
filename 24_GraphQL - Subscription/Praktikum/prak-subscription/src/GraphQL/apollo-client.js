import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
    uri: 'https://section20alta.hasura.app/v1/graphql',
    headers: {
      "x-hasura-admin-secret": 'aTPOuy7VHbvEa0jaTmqmtAcB58eU0wUKHVqAZlmZxYYbDvxfML4xZRuPEXi5zfcY',
    },
  });
  
  const wsLink = new GraphQLWsLink(
    createClient({
      url: 'ws://section20alta.hasura.app/v1/graphql',
      connectionParams: {
        headers: {
          "x-hasura-admin-secret": 'aTPOuy7VHbvEa0jaTmqmtAcB58eU0wUKHVqAZlmZxYYbDvxfML4xZRuPEXi5zfcY',
        },
      },
    })
  );
  
  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    httpLink
  );
  
  const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
  });
  
  export default client