import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Page from './components/Page.jsx';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
      <Navbar />
      <Page />
    </div>
  );
}

export default App;
