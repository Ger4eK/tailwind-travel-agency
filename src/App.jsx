import {
  Hero,
  Header,
  Memory,
  Explore,
  Advertise,
  Pricings,
  Banner,
  Newslatter,
} from './components';
import {
  hero,
  navlinks,
  memory,
  placesAPI,
  brands,
  pricingapi,
  bannerAPI,
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
      <Banner bannerAPI={bannerAPI} />
      <Newslatter />
    </>
  );
}

export default App;
