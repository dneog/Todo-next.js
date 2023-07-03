import React from 'react'
import DeleteBtn from './DeleteBtn'
import Link from 'next/link'
import { HiMiniPencilSquare } from "react-icons/hi2";
import styles from './TodoList.module.css';
const TodoList = () => {
  return (
    <>
        <div className={styles.main}>
            <div>
                <p className={styles.title}>Title</p>
            </div>
            <div className={styles.bttnns}>
                <DeleteBtn />
                <Link href={'/editTodo/123'}>
                    <HiMiniPencilSquare size={24} />
                </Link>
            </div>
        </div>
    </>
  )
}

export default TodoList