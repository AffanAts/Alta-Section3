import "./App.css";
import Home from "./Component/Home";
import { ApolloProvider } from "@apollo/client";
import client from "./GraphQL/apollo-client";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Home />
      </div>
    </ApolloProvider>
  );
}

export default App;