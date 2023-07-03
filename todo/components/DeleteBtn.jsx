'use client';
import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";
const DeleteBtn = ({id}) => {
  const router= useRouter()
  const removeTodo= async()=> {
   const res= await fetch(`http://localhost:3000/api/topics?id=${id}`, {
      method: 'DELETE'
    })
    if(res.ok){
      router.refresh()
    }
   
  }
  return (
    <div>
        <button className='delete-btn' onClick={removeTodo}><MdDelete /></button>
    </div>
  )
}

export default DeleteBtn