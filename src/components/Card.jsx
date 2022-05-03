import * as classnames from 'classnames';

import styles from '../assets/styles/card.module.scss';

const Card = ({
  name,
  cost,
  currency,
  length,
  speed,
  speedUnits,
  optional,
  isSelected,
  color = 'green',
}) => (
  <div className={classnames(styles.card, { [styles.selected]: isSelected })}>
    <div className={classnames(styles.header, styles[color])}>{name}</div>

    <div className={styles[color]}>
      <div className={styles.cost}>
        <sup>{currency}</sup>
        <span className={styles.cost__number}>{cost}</span>
        <sub>{`/${length}`}</sub>{' '}
      </div>
    </div>

    <div className={styles.speed}>{`до ${speed} ${speedUnits}`} </div>

    <div className={styles.optional}>{optional}</div>
  </div>
);

export default Card;
//
