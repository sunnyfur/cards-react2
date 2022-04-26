import Card from "./components/Card";

import "./App.css";

import rates from "./mock/rates.json";

function App() {
  return (
    <div className="App">
      {rates.results.map((rate) => (
        <Card name={rate.name}></Card>
      ))}
    </div>
  );
}

export default App;
