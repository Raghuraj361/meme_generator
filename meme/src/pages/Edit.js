import React, { createRef, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom'
import Text from '../component/Text'
import { exportComponentAsJPEG } from 'react-component-export-image';
import 'bootstrap/dist/css/bootstrap.css';


const Edit = () => {
    const [params]=useSearchParams();
    const[count,setCount]=useState(0);
const memeRef=createRef();

const addText=()=>{
setCount(count+1)
}

  return (
    <div ref={memeRef}className='meme mt-5 mb-5'>
    <div>
       <img src={params.get('url')} alt="#" width="250px"/>
       {
        Array(count).fill(0).map(e=><Text/>)
       }
    </div>
    <Button onClick={addText}>Add Text</Button>
    <Button variant="success" onClick={e=>exportComponentAsJPEG(memeRef)}>Save</Button>
    </div>
    
  )
}

export default Edit;