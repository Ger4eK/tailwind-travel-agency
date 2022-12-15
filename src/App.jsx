import { Hero, Header, Memory } from './components';
import { hero, navlinks } from './data/travigodata';

function App() {
  return (
    <>
      <Header navlinks={navlinks} />
      <Hero hero={hero} />
    </>
  );
}

export default App;
