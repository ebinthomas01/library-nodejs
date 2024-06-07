import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import Search from './components/Search';
import Delete from './components/Delete';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div className="App">
      <AddBook/>
      <Search/>
      <Delete/>
      <ViewAll/>
    </div>
  );
}

export default App;
