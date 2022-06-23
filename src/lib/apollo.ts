import { InMemoryCache, ApolloClient } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o22vi2074s01xm97jif9cm/master',
 
  cache: new InMemoryCache(),
});