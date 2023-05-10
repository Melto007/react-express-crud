import React,  { useEffect, useState } from 'react'
import List from './components/List.js'
import axios from 'axios'
import { baseURL } from './utils/constant.js'

function App() {
  const [input, setInput] = useState("")
  const [task, setTask] = useState([])
  const [message, setMessage] = useState("")

  useEffect(() => {
    axios.get(`${baseURL}`)
    .then((res) => console.log(res.data))
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    axios.post(`${baseURL}create`, {'task': input}).then((res) => console.log(res.data))
    .catch(error => setMessage(error.response.data.message))
    setInput('')
  }

  return (
    <main>
      <h1 className="title">CRUD Operation</h1>

      <div className="input_holder">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />

        <button type="submit" onClick={submitHandler}>Add Task</button>
      </div>

      <ul>
        <List task="Something" />
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
