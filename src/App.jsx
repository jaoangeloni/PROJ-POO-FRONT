import { useEffect, useState } from 'react';
import './styles/App.css';
import Card from './components/card';

function App() {
  const [users, setUsers] = useState({})

  useEffect(() => {
    const fetchUsers = async () => {
        const response = await fetch('http://localhost:8080/users').then(res => res?.json())
        setUsers(response);
    }
    fetchUsers();
  },[])

  return (
    <div className="flex flex-col w-screen h-screen">
      {users?.map((user) => {
        return(
          <div className='bg-red-100 border border-blue-500'>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
