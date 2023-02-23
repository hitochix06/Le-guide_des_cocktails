import '../Style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from '../Components/Input';
import ViewCocktail from './ViewCocktail';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Input />
        <ViewCocktail/>
      </header>
    </div>
  );
}

export default App;
