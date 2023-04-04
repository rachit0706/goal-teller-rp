import { useEffect, useState } from 'react';
import './App.css';
import Portfolio from './components/Portfolio/Portfolio';
import axios from 'axios';

const LIST_API = "https://api.mfapi.in/mf";

function App() {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
        const response = await axios.get(LIST_API);
        setList(response.data);
    } catch (e) {
        alert(e);
    }
};

useEffect(() => { 
    fetchList();
}, []);

  return (
    <div className="App">
      <Portfolio data={list} />
    </div>
  );
}

export default App;
