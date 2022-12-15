import { Hero } from './components';
import { hero } from './data/travigodata';

function App() {
  return (
    <>
      <Hero hero={hero} />
    </>
  );
}

export default App;
