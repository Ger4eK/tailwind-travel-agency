import { Hero, Header, Memory, Explore } from './components';
import { hero, navlinks, memory, placesAPI } from './data/travigodata';

function App() {
  return (
    <>
      <Header navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Explore title='Explore The Beauty of World' placesAPI={placesAPI} />
    </>
  );
}

export default App;
