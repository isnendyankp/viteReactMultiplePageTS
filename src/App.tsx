import './App.css';
import { HomeContainer } from './containers';

function App() {
  return (
    <div className="app">
      <HomeContainer />
    </div>
  );
}

export default App;

// Progress:
// 1. cr8 App component
// 2. import HomeContainer component
// 3. render with pass in HomeContainer component

// Cr8 simple form with add onSubmit to controlling input text & button submit
/* 
   <>
     <form onSubmit={() => console.log('asd')}>
      <input type="text" onChange={() => console.log('asd')} />
      <input type="text" onChange={() => console.log('asd')} />
      <input type="text" onChange={() => console.log('asd')} />
      <input type="text" onChange={() => console.log('asd')} />
      <input type="text" onChange={() => console.log('asd')} />
      <button type="submit">Submit</button>
    </form>
  </>
*/

// test active tailwind using bg-red-500
/*
  return (
    <div className='bg-red-500'>
      check active tailwind
    </div>
  );
*/
