import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://section20alta.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret': 'aTPOuy7VHbvEa0jaTmqmtAcB58eU0wUKHVqAZlmZxYYbDvxfML4xZRuPEXi5zfcY'
    }
  });

  export default client