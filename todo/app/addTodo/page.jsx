'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

const addTopic = () => {
  const [title, setTitle]= useState('')
  const router= useRouter()
   const handleSubmit= async (e)=> {
    e.preventDefault();
    if(!title){
      alert('Please Add Title')
      return;
    }
    try {
     const res= await fetch('http://localhost:3000/api/topics', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({title})
      })

      if(res.ok){
        router.push('/')
      }else{
        throw new Error('Failed to add')
      }
    } catch (error) {
      console.log(error);
    }


  }
  return (
   
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Add Todo list" onChange={(e)=> setTitle(e.target.value)} value={title} />
            <br />
            <button type="submit" >Add Todo</button>
        </form>
   
  )
}

export default addTopic