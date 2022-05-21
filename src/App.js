import { useEffect, useState } from 'react';
import './App.css';
import Loading from './components/Loading/Loading';
import Home from './page/Home';

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 5000)
},[])

  return (
    <div className='app'>
    {
      loading ?
      <Loading />
      :
      <Home />
    }
    </div>
  );
}
 
export default App;
