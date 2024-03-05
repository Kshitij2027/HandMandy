import './App.css';
import Banner from './Components/Banner';
import Feature from './Components/Feature';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Newsletter from './Components/Newsletter';
import Products from './Components/Products';
import {
  BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Shop from './Components/Shop';
import Productspg from './Components/Productspg';
import PropTypes from 'prop-types'


function App(props) {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Feature />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Products />} />
        </Routes>
        <Routes>
          <Route path='Shop' element={<Shop />} />
        </Routes>
        <Routes>
          <Route path='Shop/Productspg' element={<Productspg image="/pics/products/p1.jpg" smallimg="/pics/products/p1.jpg" pgtitle="Pot" title="Classic Earthen Pot" price="Rs 80" desc="Classic, Food is enriched with 18 types of Micro-Nutrients, Food becomes more Delicious, Nutritious & Healthy. Brown, Export Quality, 100% Natural Clay, Non-Toxic, Eco Friendly, Can Be Used On Gas Stove, Open Fire, 100% Nutrients From The Ingredients Is Retained In Your Cooking, Moisture Content Of The Food Is Retained Thus Making Your Food Juicer, Tender And Fresher Than Conventional Cooking, Food becomes more Delicious, Nutritious & Healthy. The food cooked in clay pot can be cooked without oil due to the natural non-stick property there by aiding fat free meal. Cooking Capacity is 1.5 Ltrs & Full filling capacity is 1 Ltrs" />} />
        </Routes>
        <Banner />
        <Newsletter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
