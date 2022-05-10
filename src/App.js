import logo from './logo.svg';
import './App.css';
import Realtime from './components/Realtime'

function App() {
  return (
    <div className="App">
      <div className="container">
        <form>
          <label>first name</label>
          <input type="text" name="first_name"></input>
          <label>last name</label>
          <input type="text" name="last_name"></input>
          <label>email</label>
          <input type="text" name="email"></input>
          <label>password</label>
          <input type="text" name="password"></input>
          <label>confirm password</label>
          <input type="text" name="confirm_password"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
