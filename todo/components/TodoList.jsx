import React from 'react'
import DeleteBtn from './DeleteBtn'
import Link from 'next/link'
import { HiMiniPencilSquare } from "react-icons/hi2";
import styles from './TodoList.module.css';

const getTopics= async()=> {
    try {
      const res=  await fetch('http://localhost:3000/api/topics', {cache: 'no-store'})

      if(!res.ok){
        throw new Error('Failed to Fetch Topics');

      }
      return res.json()
    } catch (error) {
        console.log(error);
    }
}
const TodoList = async () => {

   const {topics}= await getTopics()

  return (
    <>
    {topics.map(topic => (
        <div className={styles.main}>
            <div>
                <p className={styles.title}>{topic.title}</p>
            </div>
            <div className={styles.bttnns}>
                <DeleteBtn id={topic._id} />
                <Link href={`/editTodo/${topic._id}`}>
                    <HiMiniPencilSquare size={24} />
                </Link>
            </div>
        </div>
    ))}
        
    </>
  )
}

export default TodoList