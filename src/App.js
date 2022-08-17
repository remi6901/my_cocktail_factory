import './App.css';
import CocktailRandom from './components/CocktailRandom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SearchCocktail from './components/SearchCocktail';
import CocktailDetails from './components/CocktailsDetails';
import Banner from "./components/Banner";
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <Banner/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search_cocktail" element={<SearchCocktail/>}/>
        <Route path="/surprise_me" element={<CocktailRandom/>}/>
        <Route path="/cocktail/:id" element={<CocktailDetails/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
    
}

export default App;
