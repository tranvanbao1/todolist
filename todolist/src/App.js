import './App.css';
import React, { useState } from 'react';
function App() {

  const [job,setJob] = useState('');
  const [jobs,setJobs] = useState(()=>{
  const allJobsFromLocalStorage = JSON.parse(localStorage.getItem('jobs'));
    return allJobsFromLocalStorage ?? [];
  });

  const handleSubmit = ()=> {
    setJobs(prev => {
      const allJobs = [...prev, job];
      localStorage.setItem('jobs',JSON.stringify(allJobs));
      return allJobs;
    });
    setJob('');
  }
  return (
    <div style={{padding: 32}}>
      <input 
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>add</button>
      <ul>
        {jobs.map((job,index)=> (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
