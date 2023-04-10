import starImg from './icon-star.svg';
import './react.css'

function App() {
  return (
    <div className="container">
    <div className="icon">
    <img src={starImg} alt=""/>
    </div>
    <h1>How did we do?</h1>
    <p>Please let us know how we did with your support request. All feedback is appreciated 
      to help us improve our offering!</p>
    <div className="container-number">
      <div className="number ">1</div>
      <div className="number">2</div>
      <div className="number">3</div>
      <div className="number active">4</div>
      <div className="number">5</div>
    </div>
    <button id="submit">SUBMIT</button>
  </div>
  );
}

export default App;


