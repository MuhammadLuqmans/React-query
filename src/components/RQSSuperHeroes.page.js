import { useQuery } from "react-query";
import axios from "axios";
import React from "react";

const FetchData = () => {
  return axios.get("http://localhost:4000/superHeroes");
};

export default function RQSSuperHeroes() {
  const { isLoading, data, isError, error, refetch } = useQuery(
    "myHerose names",
    FetchData,
    {
      // these effect on api data just like realtime effect data
      // refetchInterval:2000,
      // refetchIntervalInBackground:true
      enabled: false,
    }
  );

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  console.log(data);

  return (
    <>
      <h2>RQSSuperHeroes.page</h2>
      <button onClick={refetch}>Fetch Name</button> 
      {data?.data.map((heros) => {
        return (
          <>
            
            <div key={heros.id}>{heros.title}</div>
          </>
        );
      })}
    </>
  );
}
