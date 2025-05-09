import './App.css';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Why } from "./components/why/why";
import { Category } from "./components/category/category";
import { Products } from "./components/product/product";
import { Limited } from "./components/limited/limited";
import { Footer } from './components/footer/footer';

// Import Element dari React Scroll
import { Element } from 'react-scroll';

function App() {
  return (
    <>
      <Header />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="why">
        <Why />
      </Element>
      <Element name="category">
        <Category />
      </Element>
      <Element name="products">
        <Products />
      </Element>
      <Element name="limited">
        <Limited />
      </Element>
      <Footer />
    </>
  );
}

export default App;
