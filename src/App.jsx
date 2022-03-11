import './App.css';
import Userlist from './components/Userlist/Userlist';

function App() {

  return (
    <div className="App px-3 overflow-hidden mx-auto py-4">
      
      <h1 className='border border-5 border-primary rounded rounded-pill px-lg-2 py-lg-4 py-1 bg-white fw-bold text-primary'>convinUsers</h1>

      <Userlist/>

    </div>
  );
}

export default App;
