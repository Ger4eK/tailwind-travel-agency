import {
  Hero,
  Header,
  Memory,
  Explore,
  Advertise,
  Pricings,
} from './components';
import {
  hero,
  navlinks,
  memory,
  placesAPI,
  brands,
  pricingapi,
} from './data/travigodata';

function App() {
  return (
    <>
      <Header navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Explore title='Explore The Beauty of World' placesAPI={placesAPI} />
      <Advertise brands={brands} />
      <Pricings pricingapi={pricingapi} />
    </>
  );
}

export default App;
