import './App.css';
import CocktailRandom from './components/CocktailRandom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SearchCocktail from './components/SearchCocktail';
import CocktailDetails from './components/CocktailsDetails';
import Banner from "./components/Banner";

function App() {
  return (
    <Router>
      <div>
        <Banner/>
        <NavBar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search_cocktail" element={<SearchCocktail/>}/>
        <Route path="/surprise_me" element={<CocktailRandom/>}/>
        <Route path="/:id" element={<CocktailDetails/>}/>
      </Routes>
    </Router>
  );
    
}

export default App;
