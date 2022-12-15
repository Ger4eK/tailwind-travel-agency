import { Hero, Header, Memory } from './components';
import { hero, navlinks, memory } from './data/travigodata';

function App() {
  return (
    <>
      <Header navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
    </>
  );
}

export default App;
