import { useEffect, useState } from 'react'
import Comp1 from './components/comp1'

import './App.css';

function App() {
  const [reachBottom, setReachBottom] = useState(0)

  const comps = [];

  for (let i = 0; i < reachBottom; i++) {
    comps.push(<Comp1 key={i} />)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setReachBottom((reachBottom) => reachBottom + 1)
    }
  };

  console.log(comps.length);
  return (
    <div className="App" style={window.innerWidth < 1024 ? {transformOrigin: "top", transform: 'scale(0.7)'} : undefined}>
      <h2>Rick Erfmann</h2>
      <Comp1 />
      {comps}
    </div>
  );
}

export default App;
