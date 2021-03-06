import { useState } from 'react';

import Card from './Card';
import styles from '../App.module.css';

import rates from '../mock/rates.json';

const colors = ['blue', 'green', 'red', 'black'];

const CardList = () => {
  const [nameCard, nameCardSelected] = useState();
  const handleChange = (name) => {
    nameCardSelected(name);
  };

  return (
    <div className={styles.wrapper}>
      {rates.results.map((rate, index) => (
        <Card
          onClick={handleChange}
          key={index.toString}
          name={rate.name}
          cost={rate.cost}
          currency={rate.currency}
          length={rate.length}
          speed={rate.speed}
          speedUnits={rate.speedUnits}
          optional={rate.optional}
          isSelected={rate.name === nameCard}
          color={colors[index]}
        />
      ))}
    </div>
  );
};
export default CardList;
