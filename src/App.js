import Card from './components/Card'

import styles from './App.css'

import rates from './mock/rates.json'

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        {rates.results.map((rate) => {
          const isSelected = rate.cost === 550

          return (
            <Card
              name={rate.name}
              cost={rate.cost}
              currency={rate.currency}
              length={rate.length}
              speed={rate.speed}
              speedUnits={rate.speedUnits}
              optional={rate.optional}
              isSelected={isSelected}
              color={rate.color}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
