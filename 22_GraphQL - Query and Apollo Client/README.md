# Summary Relational Database

### 1. What is Apollo?
Apollo Client is a comprehensive state management library for JavaScript that enables us to manage both local and remote data with GraphQL. Use it to fetch, cache, and modify application data, all while automatically updating UI. The core @apollo/client library provides built-in integration with React. We an use Apollo client to do any GraphQL operations (query, mutation and subscription) inside our React or Next JS app. Apollo client works well with any GraphQL server (Hasura, Apollo Server, etc)

### 2.Apollo Client Next JS Setup - Installation
1.Create new react js project on terminal with "npx create-react-app react-graphql"
2.Install GraphQL and apollo client with "yarn add graphql @apollo/client"

### Apollo Client ReactJS Setup
1.Import gql and useQuery and then write your query, or you can copy the query from hasura console instead.
2.Get initial dadta by doing query on the server, call useQuery on top of your code
3.Consume data in your jsx code, note that in first request data is null so need use optional chaining to avoid error.

