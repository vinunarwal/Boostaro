import './App.css';
import ProductInfo from './components/SectionOne';
import './Style/Section3.css';
import Section3 from './components/Section3';
import Foot from './components/Foot';
import Section2 from './components/Section2';


function App() {
  return (
    <div className="App">
    <ProductInfo />
    <Section2/>
      <Section3 />
      <Foot />
    </div>

  );
}

export default App;
