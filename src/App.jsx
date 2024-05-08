import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import Comp1 from './components/comp1'

import './App.css';

function App() {

  // const lenis = new Lenis()

  // function raf(time) {
  //   lenis.raf(time)
  //   requestAnimationFrame(raf)
  // }

  // requestAnimationFrame(raf)

  const [bottomReached, setBottomReached] = useState(0)
  const comps = [];

  for (let i = 0; i < bottomReached; i++) {
    comps.push(<Comp1 key={i} />)
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
      <h2>Rick Erfmann</h2>
      <Comp1 />
      {comps}
    </div>
  );
}

export default App;
