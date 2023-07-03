import EditTodoForm from "@/components/EditTodoForm"
import Topic from "@/models/topic"

const getTodobyID= async(id)=> {
  try {
    const res= await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: 'no-store'
    })

    if(!res.ok){
      throw new Error('Failed to Fetch Topic')
    }

    return res.json()
  } catch (error) {
    
  }
}
const editTodo = async ({params}) => {
const {id}= params;
console.log(id);
const {topic}= await getTodobyID(id);
const {title}= topic
  return (
    <EditTodoForm id={id} title={title} />
  )
}

export default editTodo