import Card from './components/Card';

import styles from './App.module.css';

import rates from './mock/rates.json';

function App() {
  const colors = ['blue', 'green', 'red', 'black'];
  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        {rates.results.map((rate, index) => (
          <Card
            name={rate.name}
            cost={rate.cost}
            currency={rate.currency}
            length={rate.length}
            speed={rate.speed}
            speedUnits={rate.speedUnits}
            optional={rate.optional}
            isSelected={rate.cost === 550}
            color={colors[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
