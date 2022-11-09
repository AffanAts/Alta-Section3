# Summary Relational Database

### 1. Mutation
Mutation is basically functionality to update, insert and delete data. We need to define what operation that we want to do (based on available operation on your graphql server) and then define what data GraphQL need to return.

### 2.Apollo Client ReactJS Setup
1. Import gql and useQuery and then write your query, or you can copy the query from hasura console instead.
2. Get initial data by doing query on the server, call useQuery on top of your code.
3. Consume data in your jsx code, note that in first request data is null so need use optional chaining to avoid error.

### 3.types on mutation
1. Insert Mutation
2. Update Mutatiom
3. Delete Mutation