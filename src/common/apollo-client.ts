import { ApolloClient, InMemoryCache } from '@apollo/client';

import { GRAPHQL_URL } from '../utils/constants/graphql';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: GRAPHQL_URL,
});

export default client;
