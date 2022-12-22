import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Notes from "./components/Notes"

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          }
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          }
        }        
      }
    }
  }
});

const note = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={note}>
      <div className='container'>
        <Notes />
      </div>
      </ApolloProvider>
    </>
  );
}

export default App;
