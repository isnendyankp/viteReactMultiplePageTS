import './App.css';
import { HomeContainer } from './containers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// Progress:
// 1. cr8 App component
// 2. import HomeContainer component
// 3. render with pass in HomeContainer component
// 4. import BrowserRouter, Routes, Route from react-router-dom
// 5. wrap HomeContainer component with BrowserRouter
// 6. wrap HomeContainer component with Routes
// 7. pass HomeContainer component inside Route with path= "/" 
