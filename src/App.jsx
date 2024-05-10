import { useEffect, useState } from 'react'
import Comp1 from './components/comp1'
import Comp2 from './components/comp2'
import Comp3 from './components/comp3'
import Comp4 from './components/comp4'
import About from './components/about'

import './App.css';

function App() {

  const [showAbout, setShowAbout] = useState(false)
  const [bottomReached, setBottomReached] = useState(0)

  const comps = [ <Comp1 />, <Comp2 />, <Comp3 />, <Comp4 />];
  const addedComps = []

  for (let i = 0; i < bottomReached; i++) {
      addedComps.push(comps)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY + 100 >= document.body.offsetHeight) {
      setBottomReached((bottomReached) => bottomReached + 1)
    }
  };

  return (
    <div className="App">
      <h2 className="header" onClick={() => setShowAbout(true)}>Rick Erfmann</h2>
      <About show={showAbout} onClose={() => setShowAbout(false)}/>
      {comps}
      {addedComps}
    </div>
  );
}

export default App;
