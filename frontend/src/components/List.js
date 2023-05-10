import React from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import axios from 'axios'
import { baseURL } from '../utils/constant'

const List = ({ id, task, updateMode, setUpdateUI, setMessage }) => {
  const removeTask = () => {
    axios.delete(`${baseURL}delete/${id}`)
    .then((res) => {
      setMessage(res.data.message)
    })
    setUpdateUI((prevState) => !prevState)
  }

  return (
    <li>
        {task}
        <div className="icon_holder">
            <AiFillEdit className='icon' onClick={() => updateMode(id, task)} />
            <BsFillTrashFill className='icon' onClick={removeTask} />
        </div>
    </li>
  )
}

export default List