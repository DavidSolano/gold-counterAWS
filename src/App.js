import logo from './logo.svg';
import './App.css';
import Country from './components/Country';

class App extends Country {
  state = {  }
  render() {
    return (
      <div>
        <header className='App-header'>
          Gold Medals
        </header>
        <Country />
      </div>
    )
  }
}

export default App;
