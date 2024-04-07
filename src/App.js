import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavScrollExample from './components/Navbar';
import BecomeAcc from './components/BecomeAcc';

function App() {
  return (
    <div >
    <NavScrollExample/>
    <div className='bg-[#f3f8fe]' style={{"backgroundColor": '#f3f8fe'}}>
    <BecomeAcc/>
    </div>
    </div>
  );
}

export default App;
