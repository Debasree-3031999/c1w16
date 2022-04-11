import logo from './logo.svg';
import './App.css';
import GroceryDetails from './components/Grocerydetails';
import GroceryItem from './components/GroceryItem';
import CartButton from './components/CartButton';

function App() {
  return (
    <div className="App">
  
  <GroceryDetails/>
     <GroceryItem/>
     
     <CartButton/>
    </div>
  );
}

export default App;

