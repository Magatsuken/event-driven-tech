import './App.css';
import DataDisplay from './DataDisplay/DataDisplay';
import { useState, useEffect } from 'react';

const URL = process.env.REACT_APP_BACKEND_API_ENDPOINT;

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    fetch(`${URL}`)
      .then(response => response.json())
      .then(json => setUsers(json))
      .finally(() => {
        setLoading(false);
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App-Body-Layout">
      {
        loading ?
          <div>Loading...</div>
          :
          <DataDisplay users={users}/>
      }
    </div>
  );

}