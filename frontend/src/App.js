import React,  { useEffect, useState } from 'react'
import List from './components/List.js'
import axios from 'axios'
import { baseURL } from './utils/constant.js'

function App() {
  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState([])
  const [updateUI, setUpdateUI] = useState(false)
  const [message, setMessage] = useState("")
  const [updateID, setUpdateID] = useState(null)

  useEffect(() => {
    axios.get(`${baseURL}`)
    .then((res) => {
      setTasks(res.data.task)
    })
  }, [updateUI])

  const submitHandler = (e) => {
    e.preventDefault()
    axios.post(`${baseURL}create`, {'task': input}).then((res) => console.log(res.data))
    .catch(error => setMessage(error.response.data.message))
    setInput('')
    setUpdateUI((prevState) => !prevState)
  }

  const updateMode = (id, task) => {
    setInput(task)
    setUpdateID(id)
  }

  const UpdateTask = () => {
    axios.put(`${baseURL}update/${updateID}`, {'task': input})
    .then((res) => {
      setMessage(res.data.message)
      setUpdateUI((prevState => !prevState))
    })
    .catch((err) => {
      setMessage(err.response.data.message)
    })
  }

  return (
    <main>
      <h1 className="title">CRUD Operation</h1>

      <div className="input_holder">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />

        <button type="submit" onClick={updateID ? UpdateTask : submitHandler}>{updateID ? 'Update Task' : 'Add Task'}</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <List key={task._id} id={task._id} task={task.task} setUpdateUI={setUpdateUI} setMessage={setMessage} updateMode={updateMode} />
        ))}
      </ul>

      {message && (
        <ul>
          <li>{message}</li>
        </ul>
      )}
    </main>
  );
}

export default App;
