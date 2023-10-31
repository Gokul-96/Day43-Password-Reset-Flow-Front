import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Signup from './components/Signup';
import ForgetPassword from './components/ForgetPassword';
import PasswordReset from './components/PasswordReset';
function App() {
  return (
    <Router>
    <div className="App">
      <h1 className='container text-center'>Password Reset Flow</h1>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/forget-password" element={<ForgetPassword />}/>
        <Route path="/reset-password/:randomString" element={<PasswordReset/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;