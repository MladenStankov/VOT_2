import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Tasks({ keycloak }) {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/tasks', {
            headers: {
                Authorization: `Bearer ${keycloak.token}`
            }
        }).then(response => {
            setTasks(response.data);
        });
    }, [keycloak.token]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/tasks', { title, description }, {
            headers: {
                Authorization: `Bearer ${keycloak.token}`
            }
        }).then(response => {
            setTasks([...tasks, response.data]);
            setTitle('');
            setDescription('');
        });
    };

    return (
        <div>
            <h2>Tasks</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tasks;
