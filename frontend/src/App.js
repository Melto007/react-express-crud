import React,  { useEffect, useState } from 'react'
import List from './components/List.js'
import axios from 'axios'
import { baseURL } from './utils/constant.js'

function App() {
  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState([])
  const [updateUI, setUpdateUI] = useState(false)
  const [message, setMessage] = useState("")

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

  return (
    <main>
      <h1 className="title">CRUD Operation</h1>

      <div className="input_holder">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />

        <button type="submit" onClick={submitHandler}>Add Task</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <List key={task._id} id={task._id} task={task.task} setUpdateUI={setUpdateUI} />
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
