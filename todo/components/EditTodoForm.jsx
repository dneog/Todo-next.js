'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"

const EditTodoForm = ({id, title}) => {
  const [newTitle, setNewTitle]= useState(title);
  const router= useRouter()
  const handleSubmit= async (e)=> {
    e.preventDefault();
    try {
      const res= await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: 'PUT',
        headers:{
          "Content-type": "application/json"
        },
        body: JSON.stringify({newTitle})
      })
      if(!res.ok){
        throw new Error('Something Went wrong')
      }
      router.refresh()
      router.push('/')

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
    <input type="text" placeholder="Update Todo list" onChange={(e)=> setNewTitle(e.target.value)} value={newTitle} />
    <br />
    <button type="submit">Update Todo</button>
</form>
  )
}

export default EditTodoForm