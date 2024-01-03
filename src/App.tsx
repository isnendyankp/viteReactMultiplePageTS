import './App.css';
import { AboutContainer, ContactContainer, HomeContainer } from './containers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/about" element={<AboutContainer />} />
            <Route path="/contact" element={<ContactContainer />} />
          </Route>
          <Route path="*" element={<h1>404</h1>} />
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
// 8. cr8 route for 404 page if path not found
// 9. import AboutContainer component
// 10. render with cr8 route & pass in AboutContainer component
// 11. import ContactContainer component
// 12. render with cr8 route & pass in ContactContainer component
// 13. import PublicLayout component
// 14. add nested route with element PublicLayout component
