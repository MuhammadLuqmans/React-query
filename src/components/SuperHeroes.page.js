import React , { useEffect , useState } from 'react'
import axios from 'axios'

export default function SuperHeroes() {
    

    const [ myData , setMyData ] = useState([]);

    useEffect(() => {
      const myDatas = async () => {
          await axios.get('http://localhost:4000/superHeroes')
           .then((res)=>setMyData(res.data))
      }
    //   setTimeout( myDatas ,3000 )
      myDatas();
    }, [])

    console.log(myData)

  return (
    <div>
        <h2>Titles</h2>
        <div style={{ marginTop:'10px', background:'orange', padding:'20px'}}>
            { !myData ?  'loading ...' : myData.map((data)=>{
                return(
                    <h2 key={data.id}>{data.title}</h2>
                )
            })
            }
        </div>
    </div>
  )
}

