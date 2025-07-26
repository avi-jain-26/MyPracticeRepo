
import './App.css';
import CalculateScore from './components/calculatorScore';
function App() {
  return (
    <>
      <CalculateScore 
        Name="Steeve" 
        School="DNV Public School" 
        total={284} 
        goal={3} />
    </>
  );
}

export default App;
