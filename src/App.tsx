import React from "react";
import useFetchData from "./hooks/useFetchData";
import PostTable from "./component/PostTable";

import "./App.css";

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const { loading, data, error } = useFetchData(POST_URL);

  console.log(data);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h2>Error loading data</h2>;

  return (
    <div className="App">
      {data?.length ? (
        data.map((item: Post) => <PostTable key={item.id} post={item} />)
      ) : (
        <h2>No Data</h2>
      )}
    </div>
  );
}

export default App;
