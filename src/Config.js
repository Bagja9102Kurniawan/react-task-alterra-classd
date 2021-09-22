import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://sought-prawn-64.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "O5Me9vD6INbc3iH7yRRTGBkUtUh1wQHokef1zn1aVS79bs5UL5u8cQL6lI5Ftf52",
  },
});

export default client;
