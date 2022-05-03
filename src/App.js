import { useState } from 'react';

import Card from './components/Card';

import styles from './App.module.css';

import rates from './mock/rates.json';

function App() {
  const colors = ['blue', 'green', 'red', 'black'];
  const [indexSelected, setIndexSelected] = useState(1);
  const handleChange = (index) => {
    setIndexSelected(index);
  };
  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        {rates.results.map((rate, index) => (
          <Card
            onClick={handleChange(index)}
            key={index.toString}
            name={rate.name}
            cost={rate.cost}
            currency={rate.currency}
            length={rate.length}
            speed={rate.speed}
            speedUnits={rate.speedUnits}
            optional={rate.optional}
            isSelected={indexSelected === index}
            color={colors[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
