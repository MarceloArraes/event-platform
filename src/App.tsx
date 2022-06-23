import { gql, useQuery } from "@apollo/client";
import { client } from "./lib/apollo";
import { Router } from "./Router";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  //const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);
  //console.log(data);

  /*   useEffect(() => {
    client.query({
      query: GET_LESSONS_QUERY,
}).then(response => {
  console.log(response)
})

  }, [])
   */

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
