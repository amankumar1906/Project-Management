import Header from "./components/assets/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="Container">
          <h1> Hello World</h1>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
