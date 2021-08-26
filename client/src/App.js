import './App.css';
import Header from './components/header/Header';
import Cards from './components/cards/Cards';
import SwipeButtons from './components/swipeButtons/SwipeButtons';

function App() {
  return (
    <div className="app">
      <Header />
      <Cards />
      <SwipeButtons />
    </div>
  );
}

export default App;
