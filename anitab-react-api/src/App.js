import logo from './logo.svg';
import { Routes, Route } from "react-router-dom"
import './App.css';
import Login from './Login';
import Products from './Products';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="login" element={ <Login/> } />
      <Route path="products" element={ <Products/> } />
    </Routes>
  </div>
  );

}


export default App;
