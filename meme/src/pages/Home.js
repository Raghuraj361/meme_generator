import React, { useEffect, useState } from 'react'
import MemeCard from '../component/MemeCard'
import { getAllMemes } from '../api/memes'

const Home = () => {
const [data,setData]=useState([])

useEffect(()=>{
    getAllMemes().then((memes)=>setData(memes.data.memes))
},[])

  return (
    <div className="row">
       {data?.map((el,i)=>(<MemeCard img={el.url} key={i} title={el.name} />
       ))}
    </div>
  )
}
// 
export default Home