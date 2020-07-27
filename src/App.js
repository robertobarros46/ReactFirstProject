import React, { useState, useEffect }  from 'react';
import Header from './components/Header';
import './App.css';

import api from './services/api';

function App() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data);
    })
  }, [])

  async function handleAddProject() {
    // setProjects([...projects, `Novo projeto ${Date.now()}`]);
    const response = await api.post('/projects', {
      title: "",
      owner: ""
    });

    const project = response.data;

    setProjects([...projects, project]);
  }
  return (
    <>
      <Header title="Projects" />

      <ul>
        {
          projects.map(project => (
            <li key={project.id}>{project.title}</li>
          ))
        }
      </ul>

      <button type="button" onClick={}>Adicionar projeto</button>
    </>
  );
}

export default App;