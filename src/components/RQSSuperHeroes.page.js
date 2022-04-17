import { useQuery } from 'react-query';
import axios from 'axios';
import React from 'react';

export default function RQSSuperHeroes() {

  const { isLoading , data , isError , error } = useQuery('myHerose names', ()=>{
    return axios.get('http://localhost:4000/superHeroes')
  })

  if(isLoading){
    return <h2>Loading ...</h2>
  }
  if(isError){
    return <h2>{error.message}</h2>
  }

  console.log(data)

  return (
    <>
    <h2>RQSSuperHeroes.page</h2>
    {data?.data.map((heros)=>{
      return <div key={heros.id}>{heros.title}</div>
    })}
    </>
  )
}
