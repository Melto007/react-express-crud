import React from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'

const List = ({ id, task, updateMode, setUpdateUI }) => {
  return (
    <li>
        {task}
        <div className="icon_holder">
            <AiFillEdit className='icon' />
            <BsFillTrashFill className='icon' />
        </div>
    </li>
  )
}

export default List