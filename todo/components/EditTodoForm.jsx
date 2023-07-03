import React from 'react'

const EditTodoForm = () => {
  return (
    <form className="form">
    <input type="text" placeholder="Update Todo list"  />
    <br />
    <button type="submit">Update Todo</button>
</form>
  )
}

export default EditTodoForm