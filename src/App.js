import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';

function App() {
  const [toDoList, setToDo] = useState([]);
  const [task, setTask] = useState("")
  useEffect(async () => {
    fetchTaskList()
  }, [])

  let fetchTaskList = async () => {
    try {
      let toDoListData = await axios.get("http://localhost:3000/list-all-todo");
      setToDo([...toDoListData.data])
    } catch (error) {
      console.log(error)
    }
  }

  let handleCreateTask = async () => {
    try {
      let postData = await axios.post("http://localhost:3000/create-task", { message: task })
      fetchTaskList()
      setTask("")
    } catch (error) {
      alert(error)
    }
  }

  let handleCHange = async (e, id) => {
    try {
      let updateData = await axios.put(`http://localhost:3000/update-task/${id}`, { status: e.target.checked });
      fetchTaskList()
    } catch (error) {
      alert(error)
    }
  }

  let handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/delete-task/${id}`);
      fetchTaskList()
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div className="container">
      <div className="row">
        <h2>To Do</h2>
        <div className="col-lg-12">
          <div class="input-group mb-3">
            <input type="text" class="form-control" value={task} onChange={e => setTask(e.target.value)} placeholder="Task..." aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button onClick={handleCreateTask} class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
          </div>
        </div>
        <div className="col-lg-12">
          <ul class="list-group">
            {
              toDoList.map((item) => {
                return <li class="list-group-item justify-content-between align-items-center">
                  <input class="form-check-input me-1" checked={item.status} type="checkbox" value="" aria-label="..." onChange={(e) => handleCHange(e, item._id)} />
                  <span style={{ textDecoration: item.status ? "line-through" : "" }}>{item.message}</span>
                  <span class="badge bg-primary ml-4" onClick={() => handleDelete(item._id)}>X</span>
                </li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
