import Header from './components/Header';
import MathWorkSheet from './pages/MathWorkSheet/MathWorkSheet';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <div className="container-fluid header-container">
        <div className="container">
          <Header></Header>
        </div>
      </div>
      <div className="container-fluid body-container">
        <div className="container">
          <MathWorkSheet />
        </div>
      </div>

    </div>
   
  );
}

export default App;