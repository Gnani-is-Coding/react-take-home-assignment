import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavScrollExample from './components/Navbar';
import BecomeAcc from './components/BecomeAcc';
import ApplyForm from './components/ApplyForm';

function App() {
  return (
    <div className='mb-4'>
    <NavScrollExample/>
    <div className='mb-4 px-lg-4 pt-lg-4' style={{"backgroundColor": '#f3f8fe'}}>
      <div className='row d-lg-flex align-items-lg-center'>
      <div className='col-sm-12 col-lg-6 '><BecomeAcc/></div>
      <div className='col-sm-12 col-lg-6 '><ApplyForm/></div>
      </div>
    </div>
    </div>
  );
}

export default App;
